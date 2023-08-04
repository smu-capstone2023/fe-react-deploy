import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ViewPostView from "../component/template/ViewPostView";
import { getDetailPost } from "../api/Post/getDetailPost";
import { addComment } from "../api/Comment/addComment";
import { deletePost } from "../api/Post/deletePost";
import Swal from "sweetalert2";
const ViewPost = () => {
    const { post_id, board_id } = useParams();
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false);
    const [inputComment, setInputComment] = useState("");
    const [imageUrlList, setImageUrlList] = useState([]);
    const [emoticonOpen, setEmoticonButton] = useState(false);
    const onClickOpenEmoticonView =() => {
        setEmoticonButton(!emoticonOpen);
    }
    const onClickAddComment = () => {
        addComment(post_id, inputComment).then((response) => {
            if (response) {
                window.location.reload();
            } else {
                alert("네트워크 문제!", "잠시후 시도해주세요");
            }
        });
    };

    const onDeletePost = () => {
        Swal.fire({
            title: "해당 글을 삭제하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        }).then((result) => {
            if (result.isConfirmed) {
                deletePost(post_id).then((response) => {
                    if (response) {
                        window.history.back();
                    } else {
                        alert("네트워크 오류!", "잠시 후에 다시 시도해주세요!");
                    }
                });
            }
        });
    };

    useEffect(() => {
        getDetailPost(post_id).then((response) => {
            if (response) {
                let commentsLength = 0;
                if (response.comments) {
                    commentsLength = response.comments.length;
                }
                if (response.image_urls) {
                    setImageUrlList(response.image_urls.split(","));
                }

                setPost({
                    post_id: response.post_id,
                    comments: commentsLength,
                    likes: response.likes,
                    title: response.title,
                    content: response.content,
                    created_time: response.created_time,
                });
                setAuthor({
                    id: response.user_id,
                    userName: response.username,
                });
                setCommentList(response.comments);
                setIsAuthor(response.is_author);
            } else {
                alert("네트워크 문제! 잠시 후에 다시 시도해주세요.");
            }
        });
    }, [post_id]);

    return (
        <ViewPostView
            boardId={board_id}
            post={post}
            author={author}
            isAuthor={isAuthor}
            commentList={commentList}
            setInputComment={setInputComment}
            onClickAddComment={onClickAddComment}
            onDeletePost={onDeletePost}
            imageUrlList={imageUrlList}
            onClickOpenEmoticonView={onClickOpenEmoticonView}
            emoticonOpen={emoticonOpen}
            inputComment={inputComment}
        />
    );
};

export default ViewPost;
