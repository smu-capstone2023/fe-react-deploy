import React, { useState, useEffect } from "react";
import ViewPostView from "../component/template/ViewPostView";

const ViewPost = () => {
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false);
    useEffect(() => {
        /**
         * 1. api/Post/getPostDetail 를 사용해서 setPost, setAuthor, setCommnetList, setIsAuthor을 해주세요.
         * post의 값 형식은 {post_id, comments, likes, title, content, created_time} 입니다.
         * post의 comments값은 백엔드의 comments.length로 set해주셔야 합니다.
         * setCommnetList는 백엔드의 comments를 받으면 됩니다.
         * 이때, author의 형식은 {id, userName}입니다. 백엔드에서 오는 요청형식이 다르니 확인해보시고 해당형식으로 set해주세요.
         */
    }, []);

    return <ViewPostView post={post} author={author} isAuthor={isAuthor} commentList={commentList} />;
};

export default ViewPost;
