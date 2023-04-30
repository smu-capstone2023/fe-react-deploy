import React from 'react';
import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';

const LikeView = () => {
//좋아요수 카운트
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(prevCount => prevCount + 1);
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
      <AiOutlineLike
        size={10}
        color="#FF5A5A"
        onClick={handleLikeClick}
      />
      <span style={{ fontSize: 10, color: '#FF5A5A' }}>{likeCount}</span>
    </div>
  );
};

export default LikeView;
