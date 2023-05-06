import React from "react";
import CommentView from "./CommentView";
import LikeView from "./LikeView";
import styled from "styled-components";

/**
 * @param onClick: () => {}
 * @param commentCount: number
 * @param likeCount: number
 * @param title: string
 * @param content: string
 * @param createdDate: string
 * @returns
 */

const PostListElement = ({onClick, commentCount, likeCount, title, content, createdDate}) => {
    return(
        <PostListElementLayout onClick={onClick}>
            <div style={{flex: 1, fontFamily:'nexon-regular'}}>{title}</div>
            <div style={{flex: 1, fontSize:'.8em'}}>{content}</div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row', gap: '.5rem', paddingLeft:'.3rem'}}>
                <CommentView commentCount={commentCount}/>
                <LikeView likeCount={likeCount}/>
                <div style={{fontSize: 15}}>{createdDate}</div>
            </div>
        </PostListElementLayout>
    );
};

const PostListElementLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .9rem;
    font-size: .8em;
    gap: .1em;
    cursor: pointer;
    border-bottom: .5px solid #B8B8B8;
`

export default PostListElement;



