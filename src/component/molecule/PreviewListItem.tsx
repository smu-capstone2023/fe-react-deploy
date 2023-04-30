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
    <div>{title}</div>
      <LikeView></LikeView>
      <CommentView></CommentView>
    </div>
  );
};

export default PreviewListItem;
