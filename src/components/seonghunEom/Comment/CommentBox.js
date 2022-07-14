import React from 'react';
import CommentRemove from './CommentRemove';

const CommentBox = ({ onRemove, addComent }) => {
  return (
    <div className="article-bottom-texts-new">
      <div className="article-text-left">
        <span className="article-bold">{addComent.userName}</span>
        <span>{addComent.content}</span>
      </div>
      <CommentRemove onRemove={onRemove} data={addComent} />
    </div>
  );
};

export default CommentBox;
