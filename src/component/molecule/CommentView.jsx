import React from 'react';
import { IoChatboxOutline } from "react-icons/io5";

//댓글 수
export const CommentView = ({ commentCount }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IoChatboxOutline size={14} color="#4169E1" />
      <span 
        style={{ fontSize: 14,color:'#4169E1', marginLeft: 4 }}>
        {commentCount}
      </span>
    </div>
  );
};

export default CommentView;
