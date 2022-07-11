import React, { useState } from 'react';

const CommentRemove = ({ onRemove, data }) => {
  const [like, setLike] = useState('');
  const removeCommneet = () => {
    onRemove(data.id);
  };
  return (
    <div className="article-text-right">
      <span className="imozi">
        <i
          onClick={() =>
            like === 'fa-solid' ? setLike('') : setLike('fa-solid')
          }
          className={`fa-regular fa-heart + ${like}`}
        />
        <i className="delete far fa-trash-alt" onClick={removeCommneet} />
      </span>
    </div>
  );
};

export default CommentRemove;
