import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommentBox from '../Comment/CommentBox';
import './Feeds.scss';

const Feeds = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [nextId, setNextId] = useState(3);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });

    fetch('/data/feedsData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onClick = e => {
    e.preventDefault();
    const nextNames = commentList.concat({
      id: nextId,
      userName: 'Hosino gen ',
      content: inputValue,
    });
    setNextId(nextId + 1);
    setCommentList(nextNames);
    setInputValue('');
  };

  const onRemove = id => {
    const nextNames = commentList.filter(name => name.id !== id);
    alert('정말 지울거에요? ㅠㅠ 흑흑');
    setCommentList(nextNames);
  };

  return (
    <div className="feeds">
      {feeds.map(feed => {
        return (
          <article key={feed.id} className="article-wrap">
            <div className="article-header">
              <div className="profiles">
                <div className="profiles-img">
                  <Link to="">
                    <img src={feed.idImg} alt="feedsimg" />
                  </Link>
                </div>
                <div className="id-text">
                  <span>{feed.commentId}</span>
                </div>
                <div className="article-header-menu">
                  <Link to="">
                    <i className="fas fa-ellipsis-h" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="contents">
              <img src={feed.imgUrl} alt={feed.imgAlt} />
            </div>
            <div className="article-bottom">
              <div className="article-links">
                <div className="article-links-left">
                  <i className="far fa-heart" />
                  <i className="far fa-comment" />
                  <i className="fas fa-share-square" />
                </div>
                <div className="article-links-right">
                  <i className="far fa-bookmark" />
                </div>
              </div>
              <div className="article-bottom-like">
                <div className="like-profile">
                  <span className="like-profile-myImg">
                    <img
                      src="../../../../images/seonghunEom/people01.jpg"
                      alt="profile01"
                    />
                  </span>
                  <span className="article-bold">leejimin</span>님
                  <span>
                    <span className="article-bold-child">
                      {' '}
                      외 2,412,751명이
                    </span>
                    좋아합니다.
                  </span>
                </div>
              </div>
              <div className="article-bottom-texts">
                <div>
                  <span className="article-bold">canon_mj</span>
                  <span>{feed.content}</span>
                </div>
                <div>
                  <span className="article-bold">nececsoeis</span>
                  <span>{feed.contents}</span>
                </div>
                <div className="upload-time">
                  <span>42분 전</span>
                </div>
                {commentList.map((addComent, id) => {
                  return (
                    <CommentBox
                      key={id}
                      addComent={addComent}
                      onRemove={onRemove}
                    />
                  );
                })}
              </div>
              <div className="article-bottom-comments">
                <form>
                  <div className="emotion">
                    <i className="far fa-smile" />
                  </div>
                  <textarea
                    className="comments-id"
                    placeholder="댓글 달기..."
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={onChange}
                    value={inputValue}
                  />
                  <button
                    className="comments-submit-false"
                    disabled={inputValue ? false : true}
                    onClick={onClick}
                  >
                    입력
                  </button>
                </form>
              </div>
            </div>
          </article>

          // <Feeds
          //   key={feed.id}
          //   imgUrl={feed.imgUrl}
          //   imgAlt={feed.imgAlt}
          //   content={feed.content}
          //   contents={feed.contents}
          //   commentId={feed.commentId}
          //   idImg={feed.idImg}
          // />
        );
      })}
    </div>
  );
};

export default Feeds;
