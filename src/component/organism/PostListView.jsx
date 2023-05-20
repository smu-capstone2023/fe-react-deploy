import React from "react";
import PostListElement from "../molecule/PostListElement";

/**
 * @param postListData: {comments, likes, title, title, createdate, preview}[]
 * @param onClickPost: (value: number) => void;
 * @returns
 */

const PostListView = ({ postListData, onClickPost }) => {
    return (
        <div style={{ width: "100%" }}>
            {postListData &&
                postListData.map((postData, index) => (
                    <PostListElement
                        key={index}
                        onClick={() => onClickPost(postData.post_id)}
                        commentCount={postData.comments}
                        likeCount={postData.likes}
                        title={postData.title}
                        content={postData.preview}
                        createdDate={postData.created_time}
                    />
                ))}
        </div>
    );
};

export default PostListView;
