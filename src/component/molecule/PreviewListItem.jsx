import React from 'react';
import LikeView from '../molecule/LikeView';
import CommentView from '../molecule/CommentView';

export const PreviewListItem = ({ title, onClick, commentCount, likeCount }) => {
  return (
    <div
      style={{
        height: '40px',
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
        <CommentView commentCount={commentCount} />
        &nbsp;
        <LikeView likeCount={likeCount} />
      </div>
    </div>
  );
};

export default PreviewListItem;
