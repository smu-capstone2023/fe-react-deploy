import React, { useState } from "react";
import styled from "styled-components";
import UserInfoPostReader from "../molecule/UserInfoPostReader";
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";
import CommentView from "../molecule/CommentView";
import LikeView from "../molecule/LikeView";
import ViewImageList from "./ViewImageList";
import { likePost } from "../../api/Post/likePost";
import { useToast } from "@chakra-ui/react";
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
    const { post_id, comments, title, content, created_time, likes } = post;
    const toast = useToast();
    const onClickEdit = () => {
        window.location.href = `/addpost/${boardId}/${post_id}`;
    };

    const onClickLike = () => {
        likePost(post_id).then((response) => {
            window.location.reload();
        });
    };

    return (
        <PostContentLayout>
            {isAuthor ? (
                //글쓴이
                <UserInfoPostWriter
                    iconSize="1.3rem"
                    fontSize="1.3rem"
                    userName={author.userName}
                    onClickEdit={onClickEdit}
                    onClickDelete={onDeletePost}
                    isShowEdit={true}
                />
            ) : (
                //글쓴이 아닌 사람
                <UserInfoPostReader
                    iconSize="1.3rem"
                    fontSize="1.3rem"
                    userName={author.userName}
                    postId={post_id}
                    onClickLike={onClickLike}
                />
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
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
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
    white-space: pre-wrap;
`;

const PostContentInfoLayout = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
`;

export default PostContent;
