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
            <div style={{flex: 1, fontFamily:'nexon-regular', fontSize:'1.1em'}}>{title}</div>
            <div style={{flex: 1, fontSize:'1em'}}>{content}</div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row', gap: '.5rem', paddingLeft:'.3rem'}}>
                <CommentView commentCount={commentCount} iconSize={13} fontSize={13}/>
                <LikeView likeCount={likeCount} iconSize={13} fontSize={13}/>
                <div style={{fontSize: 13}}>{createdDate}</div>
            </div>
        </PostListElementLayout>
    );
};

const PostListElementLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.2rem;
    cursor: pointer;
    border-bottom: .5px solid #B8B8B8;
    font-size: .7em;
    `

export default PostListElement;



