/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getBoardPagingByPage } from "api/board/getBoardPagingByPage";
import { getMajorsBoardList } from "api/board/getMajorsBoardList";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IBoard, IPostPreview } from "./type";
import SelectBox from "component/molecule/SelectBox";
import BoardSelectBox from "component/molecule/BoardSelectBox";
import Pagination from "component/Pagination";
import PostListElement from "component/molecule/PostListElement";
import { AiOutlineSearch } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Board() {
    const [postListData, setPostListData] = useState<IPostPreview[]>([]);
    const [boardList, setBoardList] = useState<IBoard[]>([]);
    const majorList = JSON.parse(`${localStorage.getItem("majorList")}`);
    let { board_id, major_id } = useParams();
    const [changePage, setChangePage] = useState(1);
    const searchKeyword = useRef<string>();
    const [paginationCount, setPaginationCount] = useState<number>(1);
    const per_page = 20;

    useEffect(() => {
        getMajorsBoardList(`${major_id}`).then((response) => {
            if (response) setBoardList(response);
        });
    }, []);

    useEffect(() => {
        if (board_id)
            getBoardPagingByPage(board_id, changePage, per_page, "", "").then((response) => {
                setPostListData(response.posts);
                setPaginationCount(response.total_page);
            });
    }, [board_id, changePage]);

    const onChangeMajorSelect = (value: number) => {
        majorList.forEach((item: { major_id: number; free_board_id: number }) => {
            if (item.major_id === parseInt(`${value}`)) {
                window.location.href = `/board/${value}/${item.free_board_id}`;
            }
        });
    };

    const onHandleSearch = () => {
        if (board_id)
            getBoardPagingByPage(board_id, changePage, per_page, searchKeyword.current ? searchKeyword.current : "", "").then(
                (response) => {
                    setPostListData(response.posts);
                }
            );
    };

    const onChangeBoard = (board_id: number | string) => {
        window.location.href = `/board/${major_id}/${board_id}`;
    };

    const onClickPost = (postId: number | string) => {
        window.location.href = `/viewpost/${board_id}/${postId}`;
    };

    const onClickAddPost = () => {
        window.location.href = `/addpost/${board_id}/null`;
    };

    return (
        <div
            css={css`
                display: flex;
                flex: 1;
                flex-direction: column;
                width: 100%;
                background: white;
                padding-bottom: 3rem;
                @media (min-width: 500px) {
                    max-width: 500px;
                    margin: 0 auto;
                }
            `}
        >
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    padding: 2rem 1rem 1rem 1rem;
                    gap: 1rem;
                    width: 100%;
                `}
            >
                <SelectBox options={majorList} onChange={onChangeMajorSelect} initValue={major_id} />
                <BoardSelectBox boardList={boardList} onClick={onChangeBoard} currentBoardId={board_id} />

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        margin: 0 3rem;
                        @media screen and (max-width: 350px) {
                            margin: 0;
                        }
                    `}
                >
                    <input
                        placeholder="검색어를 입력해주세요"
                        onChange={(e) => (searchKeyword.current = e.target.value)}
                        css={css`
                            background-color: #f3f3f3;
                            height: 35px;
                            border-radius: 20px;
                            outline: none;
                            border: #888 2px solid;
                            font-size: 13px;
                            padding: 1rem;
                            flex: 1;
                        `}
                    />
                    <AiOutlineSearch size={25} color="#888" onClick={onHandleSearch} />
                </div>
            </div>
            <div
                css={css`
                    border-bottom-width: 10px;
                    border-bottom-style: solid;
                    border-bottom-color: #f3f3f3;
                `}
            />

            <BoardLayout>
                {postListData &&
                    postListData.map((postData, index) => (
                        <PostListElement
                            key={index}
                            onClick={() => onClickPost(postData.post_id)}
                            commentCount={postData.comments}
                            likeCount={postData.likes}
                            title={postData.title}
                            content={postData.preview}
                            createdDate={postData.created_time}
                        />
                    ))}

                <Pagination count={paginationCount} onChange={setChangePage} size="small" siblingCount={3}></Pagination>
            </BoardLayout>
            <div
                css={css`
                    position: fixed;
                    display: flex;
                    align-self: center;
                    bottom: 1rem;
                `}
            >
                <button
                    onClick={onClickAddPost}
                    css={css`
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        background-color: #4169e1;
                        padding: 0.8rem 1.2rem;
                        border-radius: 2rem;
                        color: white;
                        font-family: nexon-bold;
                    `}
                >
                    글쓰기 <IoAddCircleOutline size={"1.5rem"} />
                </button>
            </div>
        </div>
    );
}

const BoardLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
`;

const ButtonLayout = styled.div`
    position: fixed;
    bottom: 1rem;
`;
