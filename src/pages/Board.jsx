import React, { useState, useEffect } from "react";
import BoardView from "../component/template/BoardView";

const Board = () => {
    const [majorOptions, setMajorOptions] = useState([]);
    const [postListData, setPostListData] = useState([]);
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        /**
         * 1. localStorage에 있는 majorList값을 이용하여 setMajorOptions을 해주세요.
         */
        /**
         * 2. api/Board/getBoardPostList 를 이용해서 setPostListData를 해주세요.
         * 참고로 받아야 하는 값의 형식은 {comments, likes, title, title, createdate, preview}[] 입니다.
         */
        /**
         * 3. api/Board/getMajorBoardList 를 이용해서 setBoardList를 해주세요.
         * 이때, boardList의 형식은 {id: number, name: string}[] 이렇게 와야 합니다.
         * 백엔드에서 오는 형식과 다르니, 백엔드에서 어떻게 나오는지 보시고, 해당 형식에 맞게 set해주세요
         */
    });

    const onChangeMajorSelect = (value) => {
        /**
         * 1. 해당 눌려진 전공 id의 자유게시판으로 페이지가 이동할 수 있도록 구현해주세요.
         * argument에 있는 value값은 해당 전공의 id값입니다.
         */
    };

    const onChangeBoard = (value) => {
        /**
         * 1. 해당 눌러진 보드 id게시판으로 페이지가 이동할 수 있도록 구현해주세요.
         * argument에 있는 value값은 해당 board의 id 값입니다.
         */
    };

    const onClickPost = (postId) => {
        /**
         * 1. postId를 눌렀을 때, viewpost의 해당 postId로 넘어가게 구현해주세요.
         */
    };

    return (
        <>
            <BoardView
                majorOptions={majorOptions}
                onChangeMajorSelect={onChangeMajorSelect}
                onChangeBoard={onChangeBoard}
                postListData={postListData}
                boardList={boardList}
                onClickPost={onClickPost}
                //currentMajorId={url값을 가지고 여기 현재 majorId값을 넣어주세요}
                //currentBoardId={url값을 가지고 여기 현재 boardId값을 넣어주세요}
            />
        </>
    );
};

export default Board;
