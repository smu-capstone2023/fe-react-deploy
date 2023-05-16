import React from "react";
import styled from "styled-components";
import CommentList from "../organism/CommentList";
import PostContent from "../organism/PostContent";

/**
 * @param post: {id, commentCount, likeCount, title, content, createDate}
 * @param author: {id, userName}
 * @param isAuthor: boolean
 * @param commentList: {comment: {id, commentCount, likeCount, content, createDate}, author: {id, userName}, isAuthor: boolean, children: ReactElement}[]
 * @returns
 */
const ViewPostView = ({ post, author, isAuthor, commentList }) => {
  return (
    <ViewPostLayout>
      <PostContent post={post} author={author} isAuthor={isAuthor} />
      <PostCommentGap />
      <CommentList commentList={commentList} />
    </ViewPostLayout>
  );
};

const ViewPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`;

const PostCommentGap = styled.div`
  height: 5px;
  width: 100%;
  background-color: #E5E5E5;
`;

export default ViewPostView;
