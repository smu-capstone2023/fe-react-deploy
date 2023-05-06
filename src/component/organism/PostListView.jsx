import React from "react";
import PostListElement from "../molecule/PostListElement";

/**
 * @param postListData: {onClick, commentCount, likeCount, title, content, createdate}[]
 * @returns
 */

const PostListView = () => {
    const postListData = [
        {
          onClick: () => alert("Post 1 clicked!"),
          commentCount: 10,
          likeCount: 5,
          title: "Post 1",
          content: "This is the first post.",
          createdate: "2022-05-10",
        },
        {
          onClick: () => alert("Post 2 clicked!"),
          commentCount: 3,
          likeCount: 8,
          title: "Post 2",
          content: "This is the second post.",
          createdate: "2022-05-11",
        },
        {
          onClick: () => alert("Post 3 clicked!"),
          commentCount: 7,
          likeCount: 2,
          title: "Post 3",
          content: "This is the third post.",
          createdate: "2022-05-12",
        },
        {
          onClick: () => alert("Post 4 clicked!"),
          commentCount: 2,
          likeCount: 6,
          title: "Post 4",
          content: "This is the fourth post.",
          createdate: "2022-05-13",
        },
        {
          onClick: () => alert("Post 5 clicked!"),
          commentCount: 5,
          likeCount: 3,
          title: "Post 5",
          content: "This is the fifth post.",
          createdate: "2022-05-14",
        },
        {
          onClick: () => alert("Post 6 clicked!"),
          commentCount: 9,
          likeCount: 1,
          title: "Post 6",
          content: "This is the sixth post.",
          createdate: "2022-05-15",
        },
      ];
      
    return(
        <div style={{width: '100%'}}>
            {postListData.map((postData, index) => (
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
