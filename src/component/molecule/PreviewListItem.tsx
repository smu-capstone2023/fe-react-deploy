import React from 'react';
import LikeView from '../molecule/LikeView';
import CommentView from '../molecule/CommentView';

const PreviewListItem = ({ title, onClick, commentCount, likeCount }) => {
  return (
    <div
      style={{
        height: 49,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        backgroundColor: 'white',
      }}
      onClick={onClick}
    >
      <div style={{ flex: 1 }}>{title}</div>
      <div style={{ display: 'flex' }}>
        <LikeView likeCount={likeCount} />
        <CommentView commentCount={commentCount} />
      </div>
    </div>
  );
};

export default PreviewListItem;
