import React, { useState } from "react";
import ViewPostView from "../component/template/ViewPostView";

const ViewPost = () => {
    //post 예시 데이터입니다.
    const [post, setPost] = useState({
        id: 2,
        commentCount: 3,
        likeCount: 2,
        title: "예시데이터 제목입니다.1",
        content: "예시데이터 내용입니다내용입니다내용입니다내용입니다내용입니다내용니다내용입니다내용입입니다내용입니다내용입용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다.1",
        createDate: "2020-05-14",
    });
    const [author, setAuthor] = useState({ id: 3, userName: "User1" });

    //comment 예시 데이터입니다.
    const [commentList, setCommentList] = useState([
        {
            comment: { commentCount: 3, likeCount: 2, content: "예시데이터", createDate: "2020-02-12" },
            author: { id: 4, userName: "user1" },
            isAuthor: true,
        },
        {
            comment: { commentCount: 3, likeCount: 2, content: "예시데이터", createDate: "2020-02-12" },
            author: { id: 5, userName: "user2" },
            isAuthor: false,
        },
        {
            comment: { commentCount: 3, likeCount: 2, content: "예시데이터", createDate: "2020-02-12" },
            author: { id: 6, userName: "user3" },
            isAuthor: false,
        },
    ]);

    return <ViewPostView post={post} author={author} isAuthor={true} commentList={commentList} />;
};

export default ViewPost;
