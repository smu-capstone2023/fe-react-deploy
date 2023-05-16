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
 * @param onClickBoard: () => {}
 * @param onChangeMajorSelect: () => {}
 * @param majorOptions: {id: number, name: string}[]
 * @param postListData: {onClick, commentCount, likeCount, title, content, createdate}[]
 * @param fontSize: {string}
 * @returns
 */

const BoardView = ({ majorOptions, onChangeMajorSelect, fontSize, postListData, boardList, onClickBoard }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ margin: "3%" }}>
                <SelectBox options={majorOptions} onChange={onChangeMajorSelect} fontSize={fontSize}></SelectBox>
                <BoardSelectBox boardList={boardList} onClickBoard={onClickBoard}></BoardSelectBox>

                <BoardLayout>
                    <SearchAndWriteLayout>                  
                        <InputBoxContainer style={{ flex: "1" }}>
                            <InputBox placeholder="검색어를 입력해주세요." />
                        </InputBoxContainer>

                        <ButtonLayout>
                            <Button
                                title={"글쓰기"}
                                onClick={() => {
                                    alert("글쓰기");
                                }}
                                width={"130px"}
                                fontSize={"20px"}
                                height={"50px"}
                            ></Button>
                        </ButtonLayout>
                    </SearchAndWriteLayout>

                    <PostListView postListData={postListData}></PostListView>
                </BoardLayout>
            </div>
            <Footer />
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
        font-size: 15px;
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
