import {
  BoardUtilsButtonsLayout,
  WritePostButton,
  BoardTitle,
  BoardListLayout,
  TableSchemaElement,
  TableTitleSchema,
  BoardTableSchema,
  BoardLayout,
} from "./BoardStyles";
import NoticeLong from "../../component/PostListElement/NoticeLong";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <WritePostButton
        onClick={() => (window.location.href = `/addpost/${boardId}`)}
      >
        글쓰기
      </WritePostButton>
    </BoardUtilsButtonsLayout>
  );
};
const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [majorName, setMajorName] = useState("");
  const { board_id } = useParams();
  const majorId = board_id.slice(0, 3);
  const boardId = board_id.slice(3, 6);

  const setBoardListFromServer = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}:8001/board/${majorId}/${boardId}/list`,
        {
          headers: {
            email: localStorage.getItem("email"),
          },
        }
      )
      .then((response) => {
        setBoardList(response.data.postList);
        setBoardName(response.data.boardName);
        setMajorName(response.data.majorName);
      })
      .catch((response) => {
        console.log(response);
        alert("접근 불가능한 페이지입니다.");
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
        <BoardUtilsButtons boardId={board_id} />
        <BoardList boardList={boardList} />
      </BoardLayout>
    </>
  );
};

export default Board;
