/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import CommentView from "./CommentView";
import LikeView from "./LikeView";
import { AiOutlineComment, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

/**
 * @param onClick: () => {}
 * @param commentCount: number
 * @param likeCount: number
 * @param title: string
 * @param content: string
 * @param createdDate: string
 * @returns
 */

interface Prop {
    onClick: () => void;
    commentCount: number;
    likeCount: number;
    title: string;
    content: string;
    createdDate: string;
}
const PostListElement = ({ onClick, commentCount, likeCount, title, content, createdDate }: Prop) => {
    return (
        <PostListElementLayout onClick={onClick}>
            <p
                css={css`
                    font-size: 15px;
                    font-family: nexon-regular;
                    font-weight: 600;
                `}
            >
                {title}
            </p>
            <p
                css={css`
                    font-size: 13px;
                    font-family: nexon-regular;
                `}
            >
                {content}
            </p>
            <CommentViewAndLikeView>
                <div
                    css={css`
                        align-items: center;
                        display: flex;
                        gap: 5px;
                    `}
                >
                    <AiOutlineMessage size={11} />
                    <p
                        css={css`
                            font-size: 11px;
                        `}
                    >
                        {commentCount}
                    </p>
                </div>
                <div
                    css={css`
                        align-items: center;
                        display: flex;
                        gap: 5px;
                    `}
                >
                    <AiOutlineHeart size={11} color="red" />
                    <p
                        css={css`
                            font-size: 11px;
                            color: red;
                        `}
                    >
                        {likeCount}
                    </p>
                </div>

                <div
                    css={css`
                        font-size: 11px;
                    `}
                >
                    {createdDate.split("_")[0]}
                </div>
            </CommentViewAndLikeView>
        </PostListElementLayout>
    );
};

const PostListElementLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.2rem 0;
    cursor: pointer;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
    @media screen and (max-width: 780px) {
        gap: 0.2em;
    }
`;
const CommentViewAndLikeView = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;

export default PostListElement;
