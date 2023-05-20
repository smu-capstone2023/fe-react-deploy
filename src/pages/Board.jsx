import React, { useState, useEffect } from "react";
import BoardView from "../component/template/BoardView";

const Board = () => {
    const [majorOptions, setMajorOptions] = useState([
        { id: 1, name: "상명대학교" },
        { id: 2, name: "컴퓨터과학과" },
    ]);

    useEffect(() => {
        /**
         * 1. localStorage에 있는 majorList값을 이용하여 setMajorOptions을 해주세요.
         */
    });
    const onChangeMajorSelect = (value) => {
        alert(value);
        /**
         * 1. 해당 눌려진 전공 id의 자유게시판으로 페이지가 이동할 수 있도록 구현해주세요.
         */
    };

    const onChangeBoard = () => {
        /**
         *
         */
    };
    const postListData = [
        {
            onClick: () => alert("Post 1 clicked!"),
            commentCount: 10,
            likeCount: 5,
            title: "포스트 1",
            content: "이것은 첫번째 포스트 입니다. This is the first post.",
            createdate: "2022-05-10",
        },
        {
            onClick: () => alert("Post 2 clicked!"),
            commentCount: 3,
            likeCount: 8,
            title: "Post 2",
            content: "This is the second post.",
            createdate: "2022-05-11",
        },
        {
            onClick: () => alert("Post 3 clicked!"),
            commentCount: 7,
            likeCount: 2,
            title: "Post 3",
            content: "This is the third post.",
            createdate: "2022-05-12",
        },
        {
            onClick: () => alert("Post 4 clicked!"),
            commentCount: 2,
            likeCount: 6,
            title: "Post 4",
            content: "This is the fourth post.",
            createdate: "2022-05-13",
        },
        {
            onClick: () => alert("Post 5 clicked!"),
            commentCount: 5,
            likeCount: 3,
            title: "Post 5",
            content: "This is the fifth post.",
            createdate: "2022-05-14",
        },
        {
            onClick: () => alert("Post 6 clicked!"),
            commentCount: 9,
            likeCount: 1,
            title: "Post 6",
            content: "This is the sixth post.",
            createdate: "2022-05-15",
        },
    ];
    const boardList = [
        { id: 1, name: "자유게시판" },
        { id: 2, name: "비밀게시판" },
        { id: 3, name: "공지게시판" },
        { id: 4, name: "홍보게시판" },
    ];
    return (
        <>
            <BoardView
                majorOptions={majorOptions}
                onChangeMajorSelect={onChangeMajorSelect}
                postListData={postListData}
                boardList={boardList}
                currentBoardId={1}
            />
        </>
    );
};

export default Board;
