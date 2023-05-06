import React from "react";
import PostListElement from "../molecule/PostListElement";

/**
 * @param postListData: {onClick, commentCount, likeCount, title, content, createdate}[]
 * @returns
 */

const PostListView = ({postListData}) => {
    
    return(
        <div style={{width: '100%'}}>
            {postListData && postListData.map((postData, index) => (
            <PostListElement
                key={index}
                onClick={postData.onClick}
                commentCount={postData.commentCount}
                likeCount={postData.likeCount}
                title={postData.title}
                content={postData.content}
                createdDate={postData.createdate}
            />
            ))}
      </div>
    )
}

export default PostListView;
