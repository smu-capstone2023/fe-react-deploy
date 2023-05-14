import React from "react";
import styled from "styled-components";
import UserInfoPostReader from "../molecule/UserInfoPostReader";
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";
import LikeView from "../molecule/LikeView";
import CommentView from "../molecule/CommentView";

/**
 * @param comment: {id, commentCount, likeCount, content, createDate}
 * @param author : {id, userName}
 * @param isAuthor : boolean
 * @param children: ReactElement
 * @returns
 */

const CommentContentView = ({ comment, author, isAuthor, children }) => {
    const { id, commentCount, likeCount, content, createDate } = comment;

    return (
        <CommentContentLayout>
            {isAuthor ? (
                //댓글 작성자
                <UserInfoPostWriter iconSize="1.8em" fontSize="1.3em" userName={author.userName} postId={id} />
            ) : (
                //댓글 작성자 외
                <UserInfoPostReader iconSize="1.8em" fontSize="1.3em" userName={author.userName} postId={id} />
            )}
            <TextContentText>{content}</TextContentText>
            {/* 대댓글수, 좋아요수, 작성일 */}
            <CommentContentInfoLayout>
                <CommentView commentCount={commentCount} fontSize={15} iconSize={15} />
                <LikeView likeCount={likeCount} fontSize={15} iconSize={15} />
                <p style={{ color: "gray", fontSize: "0.8em" }}>{createDate}</p>
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
    gap: 15px;
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
