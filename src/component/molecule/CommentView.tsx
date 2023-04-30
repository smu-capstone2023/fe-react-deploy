import React from 'react';
import { useState } from 'react';
import { IoChatboxOutline } from "react-icons/io5";

const CommentView = () => {
//댓글수 카운트
  const [commentCount, setCommentCount] = useState(0);

  const handleCommentClick = () => {
    setCommentCount(prevCount => prevCount + 1);
  };

  return (
    //컨테이너
    <div
      style={{
        width: 38,
        height: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <IoChatboxOutline
        size={10}
        color="#4169E1"
        onClick={handleCommentClick}
      />
      <span style={{ fontSize: 10, color: '#4169E1' }}>{commentCount}</span>
    </div>
  );
};

export default CommentView;
