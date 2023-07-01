import React from "react";
import styled from "styled-components";
import CommentList from "../organism/CommentList";
import PostContent from "../organism/PostContent";
import Footer from "../organism/Footer";
import AddComment from "../organism/AddComment";

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

const ViewPostView = ({ boardId, post, author, isAuthor, commentList, setInputComment, onClickAddComment, onDeletePost, imageUrlList }) => {
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
            <AddComment onChangeComment={setInputComment} onClickAddComment={onClickAddComment} />
        </ViewPostLayout>
    );
};

const ViewPostLayout = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const PostCommentGap = styled.div`
    height: 8px;
    width: 100%;
    background-color: #e5e5e5;
`;

const PostMarginView = styled.div`
    width: 95%;
    margin: 0 auto;
`;
export default ViewPostView;
