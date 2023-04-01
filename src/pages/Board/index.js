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
    ChangeBoardInBox,
    ChangeBoardOutBox,
    TitleAndToggle,
    Line,
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
import { COLORS } from '../../color';
import styled from 'styled-components';

const BoardList = ({ boardList, boardListByRecommendation }) => {
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

const BoardUtilsButtons = ({ boardId, BoardList_sortByRecommendation }) => {

    const [isActive, setIsActive] = useState(false);


    return (
        <BoardUtilsButtonsLayout>
            <BoardUtilsButton
                style={{ borderColor: `${COLORS.gray_button}` }}
                onClick={() => (window.location.href = `/addpost/${boardId}`)}
            >
                글쓰기
            </BoardUtilsButton>
            <SortUtilButtonLayout>
                <BoardUtilsButton>최신순</BoardUtilsButton>
                <BoardUtilsButton
                
                onClick={()=>{
                BoardList_sortByRecommendation();   
                setIsActive(!isActive);   
                
                 }}
                 style={{ 
                    // fontWeight: isActive ? 'bold' : 'normal' ,
                    background: isActive ? `${COLORS.color_button}`: '' }}
                    //TODO_hyun: 활성화된 배경색 구림, 변경 필요함
                    
                 >인기순</BoardUtilsButton>
            </SortUtilButtonLayout>
        </BoardUtilsButtonsLayout>
    );
};

const BoardToggle = ({ majorName, majorOptions }) => {
    const major_Name = majorName;
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
                        textAlign: 'center',
                    }),
                }}
                key={major_Name}
                placeholder={major_Name}
                options={majorOptions}
                components={animatedComponents}
                onChange={(selectedOptions) => {
                    window.location.href = `${selectedOptions.value}`;
                }}
            />
        </ToggleBox>
    );
};

const ChangeBoardBox = ({ boardId }) => {


    const [major_id, setMajor_id] = useState('');
    const [boardList, setBoardList] = useState([]);
    console.log('(위)메이저 아이디',major_id)
    

useEffect(() => {
    console.log('rendering')
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/usermajors`, {
        headers: { Authorization: localStorage.getItem('access_token') },
      })
      .then((response) => {
        setMajor_id(response.data[1].major_id);
        // console.log('(aixos)메이저아이디',response.data[1].major_id)
        setBoardList(getBoardList(response.data[1].major_id));
      })
      .catch((response) => {
        alert('접근 불가능한 페이지입니다.');
        window.history.back();
    });
  }, [major_id]);




const getBoardList = (major_id)=>{
    console.log(major_id)
    axios
          .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/board_list/${major_id}`)
          
          .then((response) => {
            // console.log('2데이터반환', response.data);
            return response.data
            // console.log('2메이저아이디반환', major_id);
            // setBoardList(response.data.boardList);
          })
          .catch((response) => {
            console.log(response)
            
            return[]
          });
}
        
 
      return (
        <>
          <ChangeBoardOutBox>
            {boardList.map((board) => {


            //   const isActive = currentPageUrl.includes(String(boardUrl));
              return (
                <ChangeBoardInBox
                  key={board.board_id}
                //   active={isActive}
                  onClick={() => {
                    window.location.href = `./${board.board_id}`;
                  }}
                >
                  {board.board_name}

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

    return (
        <SearchBarWrapper>
            <SearchInput type='search' placeholder='검색하기' onChange={handleSearch} />
        </SearchBarWrapper>
    );
};

const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [boardName, setBoardName] = useState('');
    const [majorName, setMajorName] = useState('');
    const { board_id } = useParams();

    const[ boardListByRecommendation, setBoardListbyReco] = useState([]);

    const BoardList_sortByRecommendation = () => {

        axios
        .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/post_list/${board_id}`, 
            {headers : {
            Authorization : localStorage.getItem('access_token'),
            sorting : localStorage.getItem('likes')
        }})
        .then((response)=>{
            setBoardListbyReco(response.data.posts)
            console.log('q',boardListByRecommendation)
        })
        }



    const setBoardListFromServer = () => {

        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/post_list/${board_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                // console.log(response.data);
                setBoardList(response.data.posts);
                setBoardName(response.data.board_name);
                setMajorName(response.data.major_name);
            })
            .catch((response) => {
                alert('접근 불가능한 페이지입니다.');
                window.history.back();
            });
    };

    useEffect(() => {
        if (board_id) {
            setBoardListFromServer();
        }

    }, [board_id, boardList.length]);


    return (
        <BoardLayout>
            <Boardline>
                <TitleAndToggle>
                    <BoardTitle>{boardName}</BoardTitle>
                    <BoardToggle majorName={majorName} majorOptions={JSON.parse(localStorage.getItem('major_options'))} />
                </TitleAndToggle>
                {/* <ChangeBoardBox boardId={board_id} /> */}
                <Line />
                <Search />
                <BoardUtilsButtons boardId={board_id} BoardList_sortByRecommendation={BoardList_sortByRecommendation} />
                <BoardList boardList={boardList}   />
            </Boardline>
        </BoardLayout>
    );
};

export default Board;
