import {
  Boardline,
  BoardUtilsButtonsLayout,
  BoardUtilsButton,
  BoardTitle,
  BoardListLayout,
  TableSchemaElement,
  TableTitleSchema,
  BoardTableSchema,
  BoardLayout,
  ToggleBox,
  DefaultText,
  NavLinks,
  ChangeBoardInBox,
  ChangeBoardOutBox,
  TitleAndToggle,
  Line,
  SearchBar,
  SearchBarWrapper,
  SearchInput,
  SortUtilButtonLayout,
  

} from './BoardStyles';
import NoticeLong from '../../component/PostListElement/NoticeLong';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';
import { COLORS } from '../../color';


const BoardList = ({ boardList }) => {
  return (
      <>
          <BoardListLayout>
              <BoardTableSchema>
                  <TableTitleSchema>제목</TableTitleSchema>
                  <TableSchemaElement>작성자</TableSchemaElement>
                  <TableSchemaElement>작성일</TableSchemaElement>
                  <TableSchemaElement>조회수</TableSchemaElement>
              </BoardTableSchema>

              {boardList.map((boardElement) => (
                  <NoticeLong
                      key={boardElement.post_id}
                      writerName={boardElement.username}
                      title={boardElement.title}
                      numberOfComment={boardElement.comments}
                      createDate={boardElement.created_time.split('T')[0]}
                      postId={boardElement.post_id}
                      numberOfViews={boardElement.views}
                  />
              ))}
          </BoardListLayout>
      </>
  );
};

const BoardUtilsButtons = ({ boardId }) => {
  return (
      <BoardUtilsButtonsLayout>
          <BoardUtilsButton style={{borderColor: `${COLORS.gray_button}`}} onClick={() => (window.location.href = `/addpost/${boardId}`)}>글쓰기</BoardUtilsButton>
          <SortUtilButtonLayout>
          <BoardUtilsButton>최신순</BoardUtilsButton>
          <BoardUtilsButton>인기순</BoardUtilsButton>
          </SortUtilButtonLayout>

      </BoardUtilsButtonsLayout>
  );
};

const BoardToggle = ({majorName}) => {
const major_Name = majorName;
const majorOptions = [
  { label: '컴퓨터과학과', value: '컴퓨터과학과', link: '/board/001001' },
  { label: '휴먼지능정보공학전공', value: '휴먼지능정보공학전공', link: '/board/002001' },
  { label: '경제학과', value: '경제학과', link: '/board/003001' },
];

const animatedComponents = makeAnimated();


return (
  <ToggleBox>
      <Select
      styles={{
        // Select 기본 적용되는 테두리랑 온클릭 함수 없애는 기능
        control: (base, state) => ({
          ...base,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          boxShadow: state.isFocused ? null : null, // optional: remove box shadow on focus
          '&:hover': {
            borderColor: 'transparent',
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: 'black',
          fontWeight: '500',
          textAlign: 'center'
        }),
      }}
      key={major_Name}
      placeholder={major_Name}
      options={majorOptions}
      components={animatedComponents}
      onChange={(selectedOptions) => {
        window.location.href = `${selectedOptions.link}`;
      }}
    />
  </ToggleBox>
);
};

const ChangeBoardBox = ({ boardId }) => {
  const detailMajorId = boardId.slice(0, 3);
  const boardLink = ["자유", "비밀", "공지", "정보/홍보"];
  const currentPageUrl = window.location.href;

  return (
    <>
      <ChangeBoardOutBox>
        {boardLink.map((link, index) => {
          const boardUrl = `${detailMajorId}00${index + 1}`;
          const isActive = currentPageUrl.includes(boardUrl);
          return (
            <ChangeBoardInBox
              key={index}
              active={isActive}
              onClick={() => {
                window.location.href = boardUrl;
              }}
            >
              {link}
            </ChangeBoardInBox>
          );
        })}
      </ChangeBoardOutBox>
    </>
  );
};

const Search = () => {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };
 
  return(
  <SearchBarWrapper>
    <SearchInput
      type="search"
      placeholder="검색하기"
      onChange={
        handleSearch
      }
      
    />
  </SearchBarWrapper>
  )
}





const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [boardName, setBoardName] = useState('');
  const [majorName, setMajorName] = useState('');
  const { board_id } = useParams();

  const setBoardListFromServer = () => {

      axios
          .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/post_list/${board_id}`, {
              headers: {
                  Authorization: localStorage.getItem('access_token'),

              },
          })
          .then((response) => {
            //TODO: response.data 어떻게 생겼는지 보기
            //setBoardList(response.data.list)
            //setBoardName(response.data.name)
            //setBoardMajorName(response.data.major)
            console.log(response.data);
              setBoardList(response.data);
              // response.data.postList.sort(
              //     (a, b) => new Date(b.createDate) - new Date(a.createDate));
              
              // setBoardList(response.data.post_id);
              // setBoardName(response.data.boardName);
              // setMajorName(response.data.majorName);
              
          })
          .catch((response) => {
              console.log(response);
              alert('접근 불가능한 페이지입니다.');
              // window.history.back();
              
          });
  };

  useEffect(() => {
      if (board_id) {
          setBoardListFromServer();
      }
  },[board_id]);

  
  return (
      
      <BoardLayout>
      
          <Boardline>
            <TitleAndToggle>
            <BoardTitle>
                  {boardName}
              </BoardTitle>
              <BoardToggle majorName={majorName} />
            </TitleAndToggle>
              <ChangeBoardBox boardId={board_id}/>

              <Line/>

              <Search/>

              <BoardUtilsButtons boardId={board_id} />
              <BoardList boardList={boardList} />
          </Boardline>
          
      </BoardLayout>
  );
};

export default Board;