import React from "react";
import styled from "styled-components";

import UserInfoPostReader from '../molecule/UserInfoPostReader';
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";
import LikeView from "../molecule/LikeView";
import CommentView from "../molecule/CommentView";

const PostContent = ({ post, author, isAuthor }) => {
  const { 
    id, 
    commentCount, 
    likeCount, 
    title, 
    content, 
    createDate, 
    authorName 
  } = post;

  return (
    <PostContentLayout>
      {isAuthor ? ( 
        // 글쓴이
        <UserInfoPostWriter userName={author.userName} postId={id}/>
      ) : (
        // 글쓴이 아닌 사람
        <UserInfoPostReader userName={authorName} postId={id}/>
      )}
      <PostContentTitle>{title}</PostContentTitle>
      <PostContentText>{content}</PostContentText>
        {/* 댓글수, 좋아요수, 작성일 */}
        <InfoContainer>
          <CommentView commentCount={commentCount} iconSize={11} fontSize="10px" />
          <Spacing/>
          <LikeView likeCount={likeCount} iconSize={11} fontSize="10px" />
          <Spacing/>
        <PostContentInfo>{createDate}</PostContentInfo>
        </InfoContainer>
    </PostContentLayout>
  );
};

const PostContentLayout = styled.div`
  width: 100%;
  padding: 1rem;
`;

//글 제목
const PostContentTitle = styled.h2`
  font-size: 13px;
  font-family: 'nexon-regular';
  padding: 1rem;
`;

//글 내용
const PostContentText = styled.p`
  font-size: 10px;
  font-family: 'nexon-light';
  padding: 1rem;
  margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
`;

const PostContentInfo = styled.p`
  font-size: 0.1rem;
  color: #747474;
  font-family: 'nexon-regular';
`;

const Spacing = styled.div`
  width: 10px;
`;

export default PostContent;