import React from "react";
import styled from "styled-components";
import UserInfoPostReader from "../molecule/UserInfoPostReader";
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";

/**
 * @param post: {id, commentCount, likeCount, title, content, createDate}
 * @param author : {id, userName}
 * @param isAuthor : boolean
 * @returns
 */

const PostContent = ({ post, author, isAuthor }) => {
    const { id, commentCount, likeCount, title, content, createDate, authorName } = post;

    return (
        <PostContentLayout>
            {isAuthor ? (
                //글쓴이
                <UserInfoPostWriter userName={author.userName} postId={id} />
            ) : (
                //글쓴이 아닌 사람
                <UserInfoPostReader userName={authorName} postId={id} />
            )}
            <PostContentTitle>{title}</PostContentTitle>
            <PostContentText>{content}</PostContentText>
            <PostContentInfo_Layout>
                {/* 댓글수,좋아요수,작성일 */}
                <PostContentInfo>{commentCount}</PostContentInfo>
                <PostContentInfo>{likeCount}</PostContentInfo>
                <PostContentInfo>{createDate}</PostContentInfo>
            </PostContentInfo_Layout>
        </PostContentLayout>
    );
};

const PostContentLayout = styled.div`
    width: 100%;
`;

const PostContentTitle = styled.h2`
    font-size: 1.5rem;
    font-family: "nexon-bold";
    margin: 1rem 0;
`;

const PostContentText = styled.p`
    font-size: 1.2rem;
    font-family: "nexon-regular";
    margin-bottom: 2rem;
`;

const PostContentInfo_Layout = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PostContentInfo = styled.p`
    font-size: 0.8rem;
    color: #ffffff;
    font-family: "nexon-regular";
`;

export default PostContent;
