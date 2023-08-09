import React from "react";
import styled from "styled-components";
import CommentContentView from "./CommentContentView";

/**
 * @param commentList: {comment_id, username, user_id, content, likes, created_time, isLiked, children: ReactElement}[]
 * @returns
 */

const CommentList = ({ commentList }) => {
    return (
        <div>
            {commentList &&
                commentList.map((comment, index) => {
                    const { comment_id, likes, comments, content, create_time, user_id, username } = comment;
                    console.log(user_id);
                    return (
                        <CommentWrapper key={index}>
                            <CommentContentView
                                key={index}
                                comment={{ comment_id, likes, comments, content, create_time }}
                                author={{ user_id, username }}
                                isAuthor={localStorage.getItem("user_id") === `${user_id}`}
                            />
                        </CommentWrapper>
                    );
                })}
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
