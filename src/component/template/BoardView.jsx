/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import SelectBox from "../molecule/SelectBox";
import PostListView from "../organism/PostListView";
import InputBox from "../molecule/InputBox";
import styled from "styled-components";
import Button from "../molecule/Button";
import BoardSelectBox from "../molecule/BoardSelectBox";
import Pagination from "component/Pagination";

/**
 * @param boardList : {id: number, name: string}[]
 * @param onChangeBoard: () => {}
 * @param onChangeMajorSelect: () => {}
 * @param majorOptions: {id: number, name: string}[]
 * @param postListData: {comments, likes, title, preview, post_id, created_time}[]
 * @param fontSize: {string}
 * @param currentBoardId: number
 * @param currentMajorId: number
 * @param onClickPost: (value: number) => void
 * @param onClickAddPost: () => void
 * @param onChangeSearch: (value: string) => void
 * @param setChangePage: number
 * @returns
 */

const BoardView = ({
    majorOptions,
    onChangeMajorSelect,
    postListData,
    boardList,
    onChangeBoard,
    currentBoardId,
    currentMajorId,
    onClickPost,
    onClickAddPost,
    onChangeSearch,
    setChangePage,
}) => {
    return (
        <div
            css={css`
                flex-direction: column;
                flex: 1;
                background: white;
                padding: 10px;
                width: 100%;
                @media (min-width: 500px) {
                    max-width: 500px;
                    margin: 0 auto;
                }
            `}
        >
            <SelectBox options={majorOptions} onChange={onChangeMajorSelect} initValue={currentMajorId}></SelectBox>
            <BoardSelectBox boardList={boardList} onClick={onChangeBoard} currentBoardId={currentBoardId}></BoardSelectBox>

            <BoardLayout>
                <SearchAndWriteLayout>
                    <InputBox placeholder="검색어를 입력해주세요." onChange={onChangeSearch} useDebounce={true} />
                    <ButtonLayout>
                        <Button title={"글쓰기"} onClick={onClickAddPost} width={"100px"} fontSize={"16px"} height={"40px"}></Button>
                    </ButtonLayout>
                </SearchAndWriteLayout>
                <PostListView postListData={postListData} onClickPost={onClickPost}></PostListView>
                <Pagination count={postListData.length} onChange={setChangePage} size="small" siblingCount="3"></Pagination>
            </BoardLayout>
        </div>
    );
};

const SearchAndWriteLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    gap: 20px;
`;

const BoardLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 1rem auto;
`;

const ButtonLayout = styled.div`
    position: fixed;
    bottom: 1rem;
`;

export default BoardView;
