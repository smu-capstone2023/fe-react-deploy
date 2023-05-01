import React from 'react';
import LikeView from '../molecule/LikeView';
import CommentView from '../molecule/CommentView';

const PreviewListItem = ({ title, onClick }) => {
  return (
    <div
      style={{
        height: 49,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
      }}
      onClick={onClick}
    >
      <div style={{ flex: 1 }}>{title}</div>
      <div style={{ display: 'flex' }}>
        {/* 수동으로 지정 */}
        <LikeView likeCount={0} />
        <CommentView commentCount={0} />
      </div>
    </div>
  );
};

export default PreviewListItem;
