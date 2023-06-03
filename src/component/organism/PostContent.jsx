import React from "react";
import styled from "styled-components";
import UserInfoPostReader from "../molecule/UserInfoPostReader";
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";
import CommentView from "../molecule/CommentView";
import LikeView from "../molecule/LikeView";
import ViewImageList from "./ViewImageList";
/**
 * @param boardId: number
 * @param post: {post_id, comments, likes, title, content, created_time}
 * @param author : {id, userName}
 * @param isAuthor : boolean
 * @param onDeletePost: () => void
 * @param imageUrlList: string[]
 * @returns
 */

const PostContent = ({ boardId, post, author, isAuthor, onDeletePost, imageUrlList }) => {
    const { post_id, comments, likes, title, content, created_time } = post;
    const onClickEdit = () => {
        window.location.href = `/addpost/${boardId}/${post_id}`;
    };

    return (
        <PostContentLayout>
            {isAuthor ? (
                //글쓴이
                <UserInfoPostWriter
                    iconSize="1.3em"
                    fontSize="1.3em"
                    userName={author.userName}
                    onClickEdit={onClickEdit}
                    onClickDelete={onDeletePost}
                    isShowEdit={true}
                />
            ) : (
                //글쓴이 아닌 사람
                <UserInfoPostReader iconSize="1.3em" fontSize="1.3em" userName={author.userName} postId={post_id} />
            )}
            <div>
                <PostContentTitle>{title}</PostContentTitle>
                <PostContentText>{content}</PostContentText>
            </div>

            <ViewImageList imageUrlList={imageUrlList} size={80} />
            <PostContentInfoLayout>
                {/* 댓글수,좋아요수,작성일 */}
                <CommentView commentCount={comments} fontSize={15} iconSize={15} />
                <LikeView likeCount={likes} fontSize={15} iconSize={15} />
                <p style={{ color: "gray", fontSize: "0.8em" }}>{created_time}</p>
            </PostContentInfoLayout>
        </PostContentLayout>
    );
};

const PostContentLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
`;

const PostContentTitle = styled.p`
    font-size: 1.3rem;
    font-family: nexon-regular;
`;

const PostContentText = styled.p`
    margin-top: 20px;
    font-size: 1rem;
    font-family: nexon-light;
`;

const PostContentInfoLayout = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
`;

export default PostContent;
