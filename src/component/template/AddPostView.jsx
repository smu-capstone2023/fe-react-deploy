/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
 * @param content: string
 * @param title: string
 * @returns
 */

const AddPostView = ({
    boardInfo,
    onChangeTitle,
    onChangeContent,
    imageList,
    onDeleteImage,
    onClickSavePost,
    onAddImage,
    title,
    content,
}) => {
    return (
        <AddPostViewContainer>
            <AddPostViewLayout>
                <div style={{ display: "flex" }}>
                    <h3 style={{ fontFamily: "nexon-regular" }}>
                        {boardInfo.majorName} {boardInfo.boardName}
                    </h3>
                </div>

                <InputTextAreaBox
                    value={title}
                    placeholder={"제목"}
                    onChange={(e) => onChangeTitle(e)}
                    background={"white"}
                    width={"100%"}
                    height={"2.3rem"}
                />
                <InputTextAreaBox
                    value={content}
                    placeholder={"내용을 입력해주세요"}
                    onChange={(e) => onChangeContent(e)}
                    background={"white"}
                    width={"100%"}
                    height={"20rem"}
                />

                <ImageLayout>
                    <ImageUploadButton iconSize={"2rem"} size={"4rem"} onClickImageButton={onAddImage} />
                    <ImageViewList onDeleteImage={onDeleteImage} imageList={imageList} iconSize={"1.5rem"} size={"4rem"} />
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
    flex-direction: column;
    flex: 1;
    background: white;
    padding: 10px;
    width: 100%;
    @media (min-width: 500px) {
        max-width: 500px;
        margin: 0 auto;
    }
`;

const AddPostViewLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 100%;
    max-width: 50rem;
    padding: 1rem;
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
    width: 100%;
`;

export default AddPostView;
