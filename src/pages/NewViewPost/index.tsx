/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getDetailPost } from "api/Post/getDetailPost";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "./types";
import Separator from "pages/MyPage/Separator";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import CommentItem from "./CommentItem";
import { likePost } from "api/Post/likePost";
import { likeComment } from "api/Comment/likeComment";
import TextField from "component/TextField";
import { IoPaperPlane } from "react-icons/io5";
import { addComment } from "api/Comment/addComment";
import { position, useToast } from "@chakra-ui/react";

export default function ViewPost() {
    const { post_id, board_id } = useParams();
    const [post, setPost] = useState<IPost>();
    const comment = useRef<string>();
    const toast = useToast();
    const onHandlePostLike = () => {
        if (post_id)
            likePost(post_id).then((res) => {
                if (res !== null) window.location.reload();
            });
    };

    const onHandleCommentLike = (commentId: number) => {
        likeComment(commentId).then((res) => {
            if (res !== null) window.location.reload();
        });
    };

    const onHandleAddComment = () => {
        if (comment.current) {
            addComment(post_id, comment.current).then((res) => {
                if (res) window.location.reload();
            });
        } else {
            toast({ title: "댓글을 입력해주세요", position: "top" });
        }
    };

    useEffect(() => {
        if (post_id) {
            getDetailPost(post_id).then((res) => {
                if (res) {
                    setPost(res);
                }
            });
        }
    }, []);

    return (
        <>
            <div
                css={css`
                    flex-direction: column;
                    flex: 1;
                    background: white;
                    width: 100%;
                    position: relative;
                    @media (min-width: 500px) {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                `}
            >
                <PostHeader username={post?.username} onClick={onHandlePostLike} isLiked={post?.isLiked} />
                <PostContainer>
                    <PostTitle>{post?.title}</PostTitle>
                    <PostContent>{post?.content}</PostContent>
                </PostContainer>
                <PostFooter commentCount={post?.comments?.length} likeCount={post?.likes} date={post?.created_time} />
                <Separator />
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        padding-bottom: 5rem;
                    `}
                >
                    {post?.comments?.map((item, index) => {
                        return (
                            <CommentItem
                                onClickLike={() => onHandleCommentLike(item.comment_id)}
                                date={item.created_time}
                                key={index}
                                likes={item.likes}
                                username={item.username}
                                content={item.content}
                                isLiked={item.isLiked}
                            />
                        );
                    })}
                </div>
                <div
                    css={css`
                        width: 100%;
                        height: 3rem;
                        position: fixed;
                        bottom: 1rem;
                        z-index: 1;
                        @media (min-width: 500px) {
                            max-width: 500px;
                            margin: 0 auto;
                        }
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            margin: 0 1rem;
                            position: relative;
                            align-items: center;
                        `}
                    >
                        <TextField
                            color="gray"
                            variant="filled"
                            fullWidth={true}
                            placeholder="댓글을 입력해주세요"
                            onChange={(e: { target: { value: string } }) => (comment.current = e.target.value)}
                        />
                        <div
                            onClick={onHandleAddComment}
                            css={css`
                                position: absolute;
                                right: 0.5rem;
                            `}
                        >
                            <IoPaperPlane size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    padding: 0 1rem;
    gap: 1rem;
`;

const PostTitle = styled.p`
    font-size: 1rem;
    font-family: nexon-bold;
`;

const PostContent = styled.p`
    white-space: pre-wrap;
    font-family: nexon-regular;
    font-size: 0.9rem;
`;
