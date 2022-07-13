import React, { useState, useEffect } from 'react';
import { InsertJsData } from './InsertJsonData';

function InsertJson() {
  const JsData = [
    {
      id: 1,
      text: '댓글 데이터를 파일로 분리해서 관리해주세요.',
    },
    {
      id: 2,
      text: '아직 fetch 함수가 익숙지 않은 분들은 .json 파일이 아닌 .js 파일로 데이터를 관리해주세요.',
    },
    {
      id: 3,
      text: '데이터가 기획에 맞게 UI 에 나타나면 과제 완료입니다.',
    },
    {
      id: 4,
      text: '로그인 실습 후에는 반드시 .json 파일로 변환 후 fetch 함수 적용해서 구현해주세요.',
    },
  ];
  const jsDataList = JsData.map(props => (
    <div key={props.id}>
      <p>{props.text}</p>
    </div>
  ));
  const InsertJsDataList = InsertJsData.map(props => (
    <div key={props.id}>
      <p>{props.text}</p>
    </div>
  ));
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch('data/commentJsonData.json')
      .then(response => response.json())
      .then(data => setCommentData(data));
  }, []);

  const commentJsonDataList = commentData.map(props => (
    <div key={props.id}>
      <p>{props.text}</p>
    </div>
  ));

  return (
    <article className="firstArticle">
      <div className="firstArticleFirstBox">
        <img
          className="firstArticleUserIcon"
          src="https://images.unsplash.com/profile-1656290325730-60c2880dea0b?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt="firstArticleUserIcon"
        />
        <p>Json으로 받아오자!</p>
      </div>
      <div className="firstArticlesecondBox">
        <img
          className="firstArticlesecondBoxUser"
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
        좋아요 393개
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
      <div className="commentList">
        {jsDataList}
        {InsertJsDataList}
        {commentJsonDataList}
      </div>
      <div className="comment">
        <input className="commentInput" placeholder="댓글 달기..." />
        <input type="button" className="commentButton" />
      </div>
    </article>
  );
}
export default InsertJson;
