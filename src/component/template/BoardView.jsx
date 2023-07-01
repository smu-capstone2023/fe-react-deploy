import React from "react";
import SelectBox from "../molecule/SelectBox";
import PostListView from "../organism/PostListView";
import InputBox from "../molecule/InputBox";
import styled from "styled-components";
import Button from "../molecule/Button";
import BoardSelectBox from "../molecule/BoardSelectBox";
import Footer from "../organism/Footer";

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
}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ margin: "3%" }}>
                <SelectBox options={majorOptions} onChange={onChangeMajorSelect} initValue={currentMajorId}></SelectBox>
                <BoardSelectBox boardList={boardList} onClick={onChangeBoard} currentBoardId={currentBoardId}></BoardSelectBox>
                <BoardLayout>
                    <SearchAndWriteLayout>
                        <InputBoxContainer style={{ flex: "1" }}>
                            <InputBox placeholder="검색어를 입력해주세요." onChange={onChangeSearch} useDebounce={true} />
                        </InputBoxContainer>
                        <ButtonLayout>
                            <Button title={"글쓰기"} onClick={onClickAddPost} width={"130px"} fontSize={"20px"} height={"50px"}></Button>
                        </ButtonLayout>
                    </SearchAndWriteLayout>
                    <PostListView postListData={postListData} onClickPost={onClickPost}></PostListView>
                </BoardLayout>
            </div>
        </div>
    );
};

const SearchAndWriteLayout = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 1rem;
    gap: 20px;
    padding-right: 0rem;

    @media screen and (max-width: 780px) {
        padding: 0rem;
    }
`;

const InputBoxContainer = styled.div`
    display: flex;
    font-family: nexon-regular;
    font-weight: 300;
    color: #b6b6b6;
    justify-content: center;

    @media screen and (max-width: 780px) {
        padding: 0rem 1rem 0rem 1rem;
    }
`;

const BoardLayout = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    margin: 1rem auto;

    @media screen and (max-width: 780px) {
        width: 100%;
        font-size: 21px;
    }
`;

const ButtonLayout = styled.div`
    @media screen and (max-width: 780px) {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
    }
`;

export default BoardView;
