import React from "react";
import styled from "styled-components";
import UserInfoPostReader from "../molecule/UserInfoPostReader";
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";
import LikeView from "../molecule/LikeView";
import CommentView from "../molecule/CommentView";

/**
 * @param comment: { comment_id, likes, comments, content, create_time }
 * @param author : {user_id, username}
 * @param isAuthor : boolean
 * @param children: ReactElement
 * @returns
 */

const CommentContentView = ({ comment, author, isAuthor, children }) => {
    const { comment_id, comments, likes, content, create_time } = comment;

    return (
        <CommentContentLayout>
            {isAuthor ? (
                //댓글 작성자
                <UserInfoPostWriter iconSize="1.1em" fontSize="1.1em" userName={author.username} postId={comment_id} />
            ) : (
                //댓글 작성자 외
                <UserInfoPostReader iconSize="1.1em" fontSize="1.1em" userName={author.username} postId={comment_id} />
            )}
            <TextContentText>{content}</TextContentText>
            {/* 대댓글수, 좋아요수, 작성일 */}
            <CommentContentInfoLayout>
                <CommentView commentCount={comments} fontSize={10} iconSize={10} />
                <LikeView likeCount={likes} fontSize={10} iconSize={10} />
                <p style={{ color: "gray", fontSize: "0.8em" }}>{create_time}</p>
            </CommentContentInfoLayout>
            {/*대댓글 컴포넌트 위치*/}
            {children}
        </CommentContentLayout>
    );
};

const CommentContentLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;

//댓글내용
const TextContentText = styled.p`
    font-size: 1rem;
    font-family: nexon-light;
`;

const CommentContentInfoLayout = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
`;

export default CommentContentView;
