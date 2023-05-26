import React from "react";
import styled from "styled-components";
import UserInfoPostReader from "../molecule/UserInfoPostReader";
import UserInfoPostWriter from "../molecule/UserInfoPostWriter";
import LikeView from "../molecule/LikeView";
import CommentView from "../molecule/CommentView";
import Swal from "sweetalert2";
import { deleteComment } from "../../api/Comment/deleteComment";
/**
 * @param comment: { comment_id, likes, comments, content, create_time }
 * @param author : {user_id, username}
 * @param isAuthor : boolean
 * @param children: ReactElement
 * @returns
 */

const CommentContentView = ({ comment, author, isAuthor, children }) => {
    const { comment_id, comments, likes, content, create_time } = comment;

    const onClickDelete = () => {
        Swal.fire({
            title: "해당 글을 삭제하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteComment(comment_id).then((response) => {
                    if (response) {
                        window.location.reload();
                    } else {
                        alert("네트워크 오류!", "잠시 후에 다시 시도해주세요.");
                    }
                });
            }
        });
    };
    return (
        <CommentContentLayout>
            {isAuthor ? (
                //댓글 작성자
                <UserInfoPostWriter
                    iconSize="1.1em"
                    fontSize="1.1em"
                    userName={author.username}
                    postId={comment_id}
                    onClickDelete={onClickDelete}
                />
            ) : (
                //댓글 작성자 외
                <UserInfoPostReader iconSize="1.1em" fontSize="1.1em" userName={author.username} postId={comment_id} />
            )}
            <TextContentText>{content}</TextContentText>
            {/* 대댓글수, 좋아요수, 작성일 */}
            <CommentContentInfoLayout>
                <CommentView commentCount={comments} fontSize={10} iconSize={10} />
                <LikeView likeCount={likes} fontSize={10} iconSize={10} />
                <p style={{ color: "gray", fontSize: "0.8em" }}>{create_time}</p>
            </CommentContentInfoLayout>
            {/*대댓글 컴포넌트 위치*/}
            {children}
        </CommentContentLayout>
    );
};

const CommentContentLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;

//댓글내용
const TextContentText = styled.p`
    font-size: 1rem;
    font-family: nexon-light;
`;

const CommentContentInfoLayout = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
`;

export default CommentContentView;
