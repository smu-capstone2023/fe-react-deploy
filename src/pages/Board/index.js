import {
    BoardUtilsButtonsLayout,
    WritePostButton,
    BoardTitle,
    BoardListLayout,
    TableSchemaElement,
    TableTitleSchema,
    BoardTableSchema,
    BoardLayout,
    SignInnerBox,
    DefaultText,
    NavLinks

} from './BoardStyles';
import NoticeLong from '../../component/PostListElement/NoticeLong';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';


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
                        key={boardElement.id}
                        writerName={boardElement.author}
                        title={boardElement.title}
                        numberOfComment={3}
                        createDate={boardElement.createDate}
                        postId={boardElement.id}
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
            <WritePostButton onClick={() => (window.location.href = `/addpost/${boardId}`)}>글쓰기</WritePostButton>
        </BoardUtilsButtonsLayout>
    );
};

const BoardToggle = () => {
  const majorOptions = [
    { label: '컴퓨터과학과', value: '컴퓨터과학과', link: '/board/001001' },
    { label: '경제학과', value: '경제학과', link: '/board/002001' },
    { label: '휴먼지능정보공학전공', value: '휴먼지능정보공학전공', link: '/board/003001' },
  ];

  const animatedComponents = makeAnimated();

  return (
    <SignInnerBox>
        <DefaultText>학과를 선택하세요</DefaultText>
      <Select
        defaultValue={null}
        options={majorOptions}
        components={animatedComponents}
        onChange={(selectedOptions) =>{
          
          window.location.href=`${selectedOptions.link}`}

        }>
        
      </Select>
    </SignInnerBox>
  );
};


const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [boardName, setBoardName] = useState('');
    const [majorName, setMajorName] = useState('');
    const { board_id } = useParams();
    const majorId = board_id.slice(0, 3);
    const boardId = board_id.slice(3, 6);

    const setBoardListFromServer = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/${majorId}/${boardId}/list`, {
                headers: {
                    email: localStorage.getItem('email'),
                },
            })
            .then((response) => {
                
                response.data.postList.sort(
                    (a, b) => new Date(b.createDate) - new Date(a.createDate));
                
                setBoardList(response.data.postList);
                setBoardName(response.data.boardName);
                setMajorName(response.data.majorName);
                
            })
            .catch((response) => {
                console.log(response);
                alert('접근 불가능한 페이지입니다.');
                window.history.back();
                
            });
    };

    useEffect(() => {
        if (board_id) {
            setBoardListFromServer();
        }
    }, []);

    
    return (
        
        <>
        
            <BoardLayout>

                <BoardTitle>
                    {majorName}-{boardName}
                </BoardTitle>
                <BoardToggle />

                <BoardUtilsButtons boardId={board_id} />
                
                <BoardList boardList={boardList} />
            </BoardLayout>
            
        </>
    );
};

export default Board;
