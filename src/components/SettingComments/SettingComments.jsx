import React from 'react';
import { useEffect, useState } from 'react';

//Mock data 실습 과제
const SettingComments = () => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/settingCommentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, []);

  return (
    <>
      {commentData.map(comment => {
        return (
          <div key={comment.id} className="comments">
            <span className="user-id">{comment.userId}</span>
            <span className="details">{comment.details}</span>
          </div>
        );
      })}
    </>
  );
};

export default SettingComments;
