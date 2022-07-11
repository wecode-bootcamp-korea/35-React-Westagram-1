import React from 'react';
import { useState } from 'react';
import Comments from '../Comments/Comments';
import './Feed.scss';
import '../../styles/common.scss';
import '../../styles/reset.scss';

const Feed = ({ imgAlt, imgUrl, details }) => {
  //Mission 3) Main | 댓글 기능
  const [comments, setComments] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const isValidComments = e => {
    return comments ? setIsValid(true) : setIsValid(false);
  };

  const commentsInput = e => {
    setComments(e.target.value);
  };

  const commentsSubmit = e => {
    e.preventDefault();

    setCommentsList(prevList => {
      return [...prevList, comments];
    });
    setComments('');
  };
  return (
    <article className="article">
      <div className="top">
        <div className="user-img">
          <img alt="profile" src="/images/profile.JPG" />
        </div>
        <div className="user-id">m.minzzy</div>
        <button className="more">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
      </div>
      <div className="middle">
        <img alt={imgAlt} src={imgUrl} />
      </div>
      <div className="bottom">
        <div className="img-bottom-icons">
          <div className="left-icons">
            <img alt="likes-heart" src="/images/like.png" />
            <img alt="comments" src="/images/chat.png" />
            <img alt="share" src="/images/send.png" />
          </div>
          <div className="right-icons">
            <img alt="bookmark" src="/images/bookmark.png" />
          </div>
        </div>
        <div className="likes">
          <div className="profile">
            <img alt="user of likes" src="/images/profile.JPG" />
          </div>
          <div className="who-likes">
            <b>m.minzzy</b>님 외 <b>{Math.round(Math.random() * 1000)}명</b>이
            좋아합니다.
          </div>
        </div>
        <div className="contents">
          <span className="user-id">m.minzzy</span>
          <span className="details">{details}</span>
        </div>
        {commentsList.map((oneComment, id) => {
          return <Comments key={id} oneComment={oneComment} />;
        })}
        <div className="time-ago">{Math.round(Math.random() * 10)}분 전</div>
        <form
          className="input-comments"
          onSubmit={commentsSubmit}
          onKeyUp={isValidComments}
        >
          <img alt="comments imoji" src="/images/smile.png" />
          <input
            className="do-input"
            type="text"
            placeholder="댓글 달기..."
            value={comments}
            onChange={commentsInput}
          />
          <button
            className={'input-button' + (isValid ? ' active' : '')}
            disabled={isValid ? false : true}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default Feed;
