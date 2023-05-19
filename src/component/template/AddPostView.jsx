import React from "react";
import styled from "styled-components";
import InputTextAreaBox from "../molecule/InputTextAreaBox";
import ImageUploadButton from "../molecule/ImageUploadButton";
import ImageViewList from "../organism/ImageViewList";
import Button from "../molecule/Button";

/**
 * @param boardInfo: {majorName, boardName}
 * @param onChangeTitle : (value: string) => void
 * @param onChangeContent : (value: string) => void;
 * @param imageList: string[]
 * @param onDeleteImage : (value: string[]) => void;
 * @param onAddImage: (value: string) => void;
 * @param onClickSavePost: () => void;
 * @returns
 */

const AddPostView = ({ boardInfo, onChangeTitle, onChangeContent, imageList, onDeleteImage, onClickSavePost, onAddImage }) => {
    return (
        <AddPostViewContainer>
            <AddPostViewLayout>
                <div style={{ display: "flex" }}>
                    <h3 style={{ fontFamily: "nexon-regular" }}>
                        {boardInfo.majorName} {boardInfo.boardName}
                    </h3>
                </div>

                <InputTextAreaBox
                    placeholder={"제목"}
                    onChange={(e) => onChangeTitle(e)}
                    background={"white"}
                    width={"100%"}
                    height={"2.3rem"}
                />
                <InputTextAreaBox
                    placeholder={"내용을 입력해주세요"}
                    onChange={(e) => onChangeContent(e)}
                    background={"white"}
                    width={"100%"}
                    height={"20rem"}
                />

                <ImageLayout>
                    <ImageUploadButton iconSize={"2rem"} size={"4rem"} onClick={onAddImage} />
                    <ImageViewList onDeleteImageList={onDeleteImage} imageList={imageList} iconSize={"1.5rem"} size={"4rem"} />
                </ImageLayout>

                <AddPostViewLine />

                <PostUploadButtonLayout>
                    <Button title={"게시하기"} onClick={onClickSavePost} width={"100%"} height={"3rem"} fontSize={"16px"}>
                        게시하기
                    </Button>
                </PostUploadButtonLayout>
            </AddPostViewLayout>
        </AddPostViewContainer>
    );
};

const AddPostViewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const AddPostViewLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 100%;
    max-width: 50rem;
    padding: 3rem;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`;

const ImageLayout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const AddPostViewLine = styled.div`
    display: flex;
    width: 100%;
    border: solid 1px #e8e8e8;
    margin: 0 0 10px 0;
`;

const PostUploadButtonLayout = styled.div`
    display: flex;
    width: 20%;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;

export default AddPostView;
