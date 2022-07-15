import React, { useState, useEffect } from 'react';

function ArticleJson() {
  const [articleComponentList, setArticleComponentList] = useState([]);
  useEffect(() => {
    fetch('/data/ArticleComponentData.json')
      .then(response => response.json())
      .then(data => setArticleComponentList(data));
  }, []);

  const [names, setNames] = useState([]);
  const [comment, setComment] = useState('');
  const [nextId, setNextId] = useState(1);

  const onChange = e => setComment(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: comment,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setComment('');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map(name => (
    <div key={name.id}>
      <p>{name.text}</p>
      <button onClick={() => onRemove(name.id)}>삭제</button>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt="love"
      />
    </div>
  ));

  return (
    <>
      {articleComponentList.map(articleComponent => {
        return (
          <article className="firstArticle" key={articleComponent.id}>
            <div className="firstArticleFirstBox">
              <img
                className="firstArticleUserIcon"
                src="https://images.unsplash.com/profile-1656290325730-60c2880dea0b?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt="firstArticleUserIcon"
              />
              <p>{articleComponent.name}</p>
            </div>
            <div className="firstArticleSecondBox">
              <img
                className="firstArticleSecondBoxUser"
                src="https://images.unsplash.com/photo-1656313836297-0cd072f08f43?ixlib=rb-1.2.1&ixclassName=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="firstArticlesecondBoxUser"
              />
            </div>
            <div className="firstArticlFirstBoxIcon">
              <img
                className="loveIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="loveIcon"
              />
              <img
                className="message"
                src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                alt="messageIcon"
              />
              <img
                className="planeIcon"
                src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                alt="planeIconIcon"
              />
              <img
                className="bookMark"
                src="https://cdn-icons-png.flaticon.com/512/25/25667.png"
                alt="bookMark"
              />
            </div>
            <span
              style={{
                fontWeight: 'bold',
                margin: '10px 0px 0px 10px',
                fontSize: '14px',
              }}
            >
              {articleComponent.like}
            </span>
            <span
              style={{
                fontWeight: 'bolder',
                margin: '10px 0px 0px 10px',
                fontSize: '14px',
              }}
            >
              kakaofriends_official
            </span>
            <div className="commentList">{nameList}</div>
            <div className="comment">
              <input
                className="commentInput"
                placeholder="댓글 달기..."
                value={comment}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              <input
                type="button"
                className="commentButton"
                value="게시"
                onClick={onClick}
              />
            </div>
          </article>
        );
      })}
    </>
  );
}
export default ArticleJson;
