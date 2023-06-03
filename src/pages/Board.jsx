import React, { useState, useEffect } from "react";
import BoardView from "../component/template/BoardView";
import { getBoardPostList } from "../api/board/getBoardPostList";
import { getMajorsBoardList } from "../api/board/getMajorsBoardList";
import { useParams } from "react-router-dom";

const Board = () => {
    const [majorOptions, setMajorOptions] = useState([]);
    const [postListData, setPostListData] = useState([]);
    const [boardList, setBoardList] = useState([]);
    const [allOfPostListData, setAllOfPostListData] = useState([]);

    let { board_id, major_id } = useParams();

    useEffect(() => {
        setMajorOptions(JSON.parse(localStorage.majorList));

        getBoardPostList(board_id).then((response) => {
            const filtered_PostListData = response.map(({ username, views, updated_time, ...filtered }) => filtered);
            setAllOfPostListData(filtered_PostListData);
            setPostListData(filtered_PostListData);
        });

        getMajorsBoardList(major_id).then((response) => {
            const filtered_BoardList = response.map(({ is_can_anonymous, is_notice, ...filtered }) => filtered);
            setBoardList(filtered_BoardList);
        });
    }, []);

    const onChangeMajorSelect = (value) => {
        majorOptions.map((item) => {
            if (item.major_id == value) {
                window.location.href = `/board/${value}/${item.free_board_id}`;
            }
        });
    };

    const onChangeSearch = (search) => {
        if (search === "") {
            setPostListData([...allOfPostListData]);
        } else setPostListData([...allOfPostListData].filter((value) => value.title.includes(search)));
    };

    const onChangeBoard = (board_id) => {
        window.location.href = `/board/${major_id}/${board_id}`;
    };

    const onClickPost = (postId) => {
        window.location.href = `/viewpost/${board_id}/${postId}`;
    };

    const onClickAddPost = () => {
        window.location.href = `/addpost/${board_id}/null`;
    };

    return (
        <>
            <BoardView
                onClickAddPost={onClickAddPost}
                majorOptions={majorOptions}
                onChangeMajorSelect={onChangeMajorSelect}
                onChangeBoard={onChangeBoard}
                postListData={postListData}
                boardList={boardList}
                onClickPost={onClickPost}
                currentMajorId={major_id}
                currentBoardId={board_id}
                onChangeSearch={onChangeSearch}
            />
        </>
    );
};

export default Board;
