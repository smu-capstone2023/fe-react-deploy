import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ViewPostView from "../component/template/ViewPostView";
import { getDetailPost } from "../api/Post/getDetailPost";

const ViewPost = () => {
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false);
    let { post_id } = useParams();

    useEffect(() => {
        getDetailPost(post_id).then((response) => {
            if (response) {
                let commentsLength = 0;
                if (response.comments) {
                    commentsLength = response.comments.length;
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

    return <ViewPostView post={post} author={author} isAuthor={isAuthor} commentList={commentList} />;
};

export default ViewPost;
