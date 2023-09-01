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
import { AiOutlineSmile } from "react-icons/ai";
import EmoticonView from "./EmotionView";
import { getBoardDetailInfoByPostId } from "api/board/getBoardDetailInfoByPostId";

export default function ViewPost() {
    const { post_id, board_id } = useParams();
    const [boardInfo, setBoardInfo] = useState<string>();
    const [post, setPost] = useState<IPost>();
    const selectedEmotion = useRef<string | null>(null);
    const comment = useRef<string>();
    const toast = useToast();
    const [isOpenEmotion, setIsOpenEmotion] = useState<boolean>(false);

    const CommentAuthor = (userId: string):boolean => {
        const Id = (localStorage.user_id);
        if(userId == Id) {
            return true;
        } else return false;
    }
    
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

    const onSaveComment = () => {
        if (comment.current && post_id) {
            addComment("글", post_id, comment.current).then((res) => {
                if (res) window.location.reload();
            });
        } else {
            toast({ title: "댓글을 입력해주세요", position: "top" });
        }
    };

    const onHandleEmotion = (url: string | null) => {
        selectedEmotion.current = url;
    };

    const onSaveEmotion = () => {
        if (selectedEmotion.current && post_id) {
            addComment("사진", post_id, selectedEmotion.current).then((res) => {
                if (res) window.location.reload();
            });
        } else toast({ title: "이모티콘을 선택해주세요", position: "top" });
    };

    useEffect(() => {
        selectedEmotion.current = null;
        if (post_id) {
            getBoardDetailInfoByPostId(post_id).then((res) => {
                setBoardInfo(`${res.major_name} ${res.board_name}`);
            });
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
                <p
                    css={css`
                        padding: 1rem;
                        font-family: nexon-regular;
                        color: #888;
                    `}
                >
                    {boardInfo}
                </p>

                <PostHeader
                    username={post?.username}
                    onClickHeart={onHandlePostLike}
                    isLiked={post?.isLiked}
                    boardId={board_id}
                    postId={post_id}
                    isAuthor={post?.is_author}
                />
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
                                commentId={item.comment_id}
                                date={item.created_time}
                                key={index}
                                likes={item.likes}
                                username={item.username}
                                content={item.content}
                                isLiked={item.isLiked}
                                isAuthor={CommentAuthor(item.user_id)}
                            />
                        );
                    })}
                </div>
                <div
                    css={css`
                        width: 100%;
                        min-height: 3rem;
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
                            disabled={isOpenEmotion}
                            onChange={(e: { target: { value: string } }) => (comment.current = e.target.value)}
                        />
                        <div
                            css={css`
                                display: flex;
                                gap: 5px;
                                position: absolute;
                                right: 0.5rem;
                            `}
                        >
                            <AiOutlineSmile size={20} onClick={() => setIsOpenEmotion(!isOpenEmotion)} />
                            <IoPaperPlane
                                size={20}
                                onClick={() => {
                                    if (isOpenEmotion) {
                                        onSaveEmotion();
                                    } else {
                                        onSaveComment();
                                    }
                                }}
                            />
                        </div>
                    </div>
                    {isOpenEmotion && <EmoticonView onChange={onHandleEmotion} />}
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
