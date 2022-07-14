import React from 'react';
import './Follow.scss';

const Follow = ({ imgUrl, userId, userDetails }) => {
  return (
    <div className="users">
      <div className="user-img">
        <img alt="profile" src={imgUrl} />
      </div>
      <div>
        <div className="user-id">{userId}</div>
        <div className="user-details">{userDetails}</div>
      </div>
      <div className="follow">팔로우</div>
    </div>
  );
};

export default Follow;
