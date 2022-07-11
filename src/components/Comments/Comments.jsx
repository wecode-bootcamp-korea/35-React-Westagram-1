import React from 'react';
import './Comments.scss';
import '../../styles/common.scss';
import '../../styles/reset.scss';

//Mission 4) Main | 댓글 컴포넌트화 + props로 데이터 전달
const Comments = ({ id, oneComment }) => {
  return (
    <div key={id} className="comments">
      <span className="user-id">m.minzzy</span>
      <span className="details">{oneComment}</span>
    </div>
  );
};

export default Comments;
