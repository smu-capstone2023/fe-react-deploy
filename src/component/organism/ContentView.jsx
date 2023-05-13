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

const ContentView = ({ comment, author, isAuthor, children }) => {
    const {
        commentCount, 
        likeCount, 
        content, 
        createDate,
        } = comment;

    const {
        id, 
        userName} = author;

  return (
    <CommentContentLayout>
      {isAuthor ? (
        //댓글 작성자
        <UserInfoPostWriter userName={author.userName} postId={id} />
      ) : (
        //댓글 작성자 외
        <UserInfoPostReader userName={userName} postId={id} />
      )}
      {children}
      <TextContentText>{content}</TextContentText>
      {/* 대댓글수, 좋아요수, 작성일 */}
      <InfoContainer>
          <CommentView commentCount={commentCount} iconSize={11} fontSize="10px" />
          <Spacing/>
          <LikeView likeCount={likeCount} iconSize={11} fontSize="10px" />
          <Spacing/>
        <PostContentInfo>{createDate}</PostContentInfo>
      </InfoContainer>
    </CommentContentLayout>
  );
};

const CommentContentLayout = styled.div`
  width: 100%;
  padding: 1rem;
`;

//댓글내용
const TextContentText = styled.p`
  font-size: 12px;
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

export default ContentView;