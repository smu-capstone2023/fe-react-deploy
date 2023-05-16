import React from "react";
import styled from "styled-components";
import CommentContentView from "./CommentContentView";

/**
 * @param commentList: {comment: {id, commentCount, likeCount, content, createDate}, author: {id, userName}, isAuthor: boolean}[]
 * @returns
 */

const CommentList = ({ commentList }) => {
    return (
        <div>
            {commentList &&
                commentList.map((comment, index) => (
                    <CommentWrapper key={index}>
                        <CommentContentView key={index} comment={comment.comment} author={comment.author} isAuthor={comment.isAuthor} />
                    </CommentWrapper>
                ))}
        </div>
    );
};

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 15px;
`;

export default CommentList;
