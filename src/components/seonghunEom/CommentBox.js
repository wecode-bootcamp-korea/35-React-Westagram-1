import React from 'react';
import CommentRemove from './CommentRemove';

const CommentBox = ({ commentList, onRemove }) => {
  return (
    <>
      {commentList.map(data => (
        <div className="article-bottom-texts-new" key={data.id}>
          <div className="article-text-left">
            <span className="article-bold">{data.userName}</span>
            <span>{data.text}</span>
          </div>
          <CommentRemove onRemove={onRemove} data={data} />
        </div>
      ))}
    </>
  );
};

export default CommentBox;
