import React from "react";
import styled from "styled-components";
import CommentList from "../organism/CommentList";
import PostContent from "../organism/PostContent";
import Footer from "../organism/Footer";

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
            <PostMarginView>
                <PostContent post={post} author={author} isAuthor={isAuthor} />
            </PostMarginView>
            <PostCommentGap />
            <PostMarginView>
                <CommentList commentList={commentList} />
            </PostMarginView>
            <Footer />
        </ViewPostLayout>
    );
};

const ViewPostLayout = styled.div`
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
