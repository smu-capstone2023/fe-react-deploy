import React from "react";
import CommentView from "./CommentView";
import LikeView from "./LikeView";
import styled from "styled-components";

/**
 * @param onClick: () => {}
 * @param commentCount: number
 * @param likeCount: number
 * @param title: string
 * @param content: string
 * @param createdDate: string
 * @returns
 */

const PostListElement = ({ onClick, commentCount, likeCount, title, content, createdDate }) => {
    return (
        <PostListElementLayout onClick={onClick}>
            <div style={{ flex: 1, fontFamily: "nexon-regular", fontSize: "1rem" }}>{title}</div>
            <div style={{ flex: 1, fontSize: "0.8rem" }}>{content}</div>
            <CommentViewAndLikeView>
                <CommentView commentCount={commentCount} fontSize={"0.8rem"} iconSize={"0.8rem"} />
                <LikeView likeCount={likeCount} fontSize={"0.8rem"} iconSize={"0.8rem"} />
                <div style={{ fontSize: "0.8rem" }}>{createdDate.split("_")[0]}</div>
            </CommentViewAndLikeView>
        </PostListElementLayout>
    );
};

const PostListElementLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.2rem;
    cursor: pointer;
    border-bottom: 0.5px solid #b8b8b8;
    font-size: 0.7em;

    @media screen and (max-width: 780px) {
        gap: 0.2em;
    }
`;
const CommentViewAndLikeView = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0rem 0.3rem 0rem 0.2rem;

    @media screen and (max-width: 780px) {
        padding: 0.3rem 0.3rem 0rem 0.2rem;
    }
`;

export default PostListElement;
