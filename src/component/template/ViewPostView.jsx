/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import styled from "styled-components";
import CommentList from "../organism/CommentList";
import PostContent from "../organism/PostContent";
import AddComment from "../organism/AddComment";
import EmoticonView from "../organism/EmoticonView"

/**
 * @param post: {post_id, comments, likes, title, content, created_time}
 * @param author: {id, userName}
 * @param boardId: number;
 * @param isAuthor: boolean
 * @param commentList: {comment_id, username, user_id, content, likes, created_time, isLiked, children: ReactElement}[]
 * @param setInputComment: (value: string) => void
 * @param onClickAddComment: () => void
 * @param onDeletePost: () => void
 * @param imageUrlList: string[]
 * @returns
 */

const ViewPostView = ({ boardId, post, author, isAuthor, commentList, setInputComment, onClickAddComment, onDeletePost, imageUrlList, onClickOpenEmoticonView, emoticonOpen, inputComment, setCommentType}) => {
    return (
        <ViewPostLayout>
            <PostMarginView>
                <PostContent
                    post={post}
                    author={author}
                    isAuthor={isAuthor}
                    boardId={boardId}
                    onDeletePost={onDeletePost}
                    imageUrlList={imageUrlList}
                />
            </PostMarginView>
            <PostCommentGap />
            <PostMarginView>
                <CommentList commentList={commentList} />
            </PostMarginView>
            <AddComment onChangeComment={setInputComment} onClickAddComment={onClickAddComment} onClickOpenEmoticonView={onClickOpenEmoticonView} inputComment={inputComment} setCommentType={setCommentType}/>
            {emoticonOpen && <EmoticonView/>}
        </ViewPostLayout>
    );
};

const ViewPostLayout = styled.div`
    flex-direction: column;
    flex: 1;
    background: white;
    max-width: 500px;
    margin: 0 auto;
`;

const PostCommentGap = styled.div`
    height: 8px;
    width: 100%;
    background-color: #f3f3f3;
`;

const PostMarginView = styled.div`
    width: 95%;
    margin: 0 auto;
`;
export default ViewPostView;
