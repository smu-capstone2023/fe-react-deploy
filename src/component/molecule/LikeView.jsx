import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';

//좋아요 수
export const LikeView = ({ likeCount }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <AiOutlineLike size={14} color="#FF5A5A" />
      <span 
        style={{ fontSize: 14,color: "#FF5A5A", marginLeft: 4 }}>
        {likeCount}
      </span>
    </div>
  );
};

export default LikeView;
