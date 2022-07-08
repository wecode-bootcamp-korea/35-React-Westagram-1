import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className="body">
      <div className="top">
        <nav className="topNav">
          <span className="westagram">Westagram</span>
          <div className="search">
            <input placeholder="검색" />
            <img
              className="finderIcon"
              src="https://cdn-icons.flaticon.com/png/512/3482/premium/3482644.png?token=exp=1657002170~hmac=7d8987c1afdbe9a92cb481a21d496afc"
              alt="finderIcon"
            />
          </div>
          <div className="navIcon">
            <img
              className="homeIcon"
              src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405771.png?token=exp=1657002232~hmac=cf415e50dbd29d00d68e62f923f88ade"
              alt="homeIcon"
            />
            <img
              className="planeIcon"
              src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
              alt="PlaneIcon"
            />
            <img
              className="plusBoxIcon"
              src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040520.png?token=exp=1657002274~hmac=41695f50548401a88b33cf048d079884"
              alt="plusIcon"
            />
            <img
              className="searchIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="searchIcon"
            />
            <img
              className="loveIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="loveIcon"
            />
            <img
              className="userIcon"
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="userIcon"
            />
          </div>
        </nav>
      </div>
      <main>
        <div className="feeds">
          <article className="firstArticle">
            <div className="firstArticleFirstBox">
              <img
                className="firstArticleUserIcon"
                src="https://images.unsplash.com/profile-1656290325730-60c2880dea0b?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt="firstArticleUserIcon"
              />
              <p>daniel Alexander</p>
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
            <div className="commentList" />
            <div className="comment">
              <input className="commentInput" placeholder="댓글 달기..." />
              <input type="button" className="commentButton" value={'게시'} />
            </div>
          </article>
        </div>
        <div className="mainRight">
          <div className="mainRightUser">
            <img
              className="mainRightUserUserIcon"
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="mainRightUserUserIcon"
            />
            <div className="mainRightUserUserName">
              <span style={{ fontWeight: 'bolder' }}>gilhyeonmin98</span>
              <span style={{ color: '#979797' }}>길현민</span>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              전환
            </p>
          </div>
          <div className="suggestionText">
            <p
              style={{
                color: '#777777',
                fontSize: '15px',
                fontWeight: 'bolder',
              }}
            >
              회원님을 위한 추천
            </p>
            <p style={{ fontSize: '15px', fontWeight: 'bolder' }}>모두 보기</p>
          </div>
          <div className="suggestionFirstUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="suggestionFirstUser"
            />
            <div className="suggestionFirstUserText">
              <p style={{ fontWeight: 'bolder', margin: '0' }}>라이언</p>
              <p style={{ color: 'gray', margin: '0' }}>
                회원님을 팔로우합니다
              </p>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              팔로우
            </p>
          </div>
          <div className="suggestionFirstUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              alt="suggestionFirstUser"
            />
            <div className="suggestionFirstUserText">
              <p style={{ fontWeight: 'bolder', margin: '0' }}>무지</p>
              <p style={{ color: 'gray', margin: '0' }}>
                회원님을 팔로우합니다
              </p>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              팔로우
            </p>
          </div>
          <div className="suggestionFirstUser">
            <img
              src="https://cdn-icons.flaticon.com/png/512/560/premium/560277.png?token=exp=1657004141~hmac=f3b2e3ba48386a03081beb304f4149c3"
              alt="suggestionFirstUser"
            />
            <div className="suggestionFirstUserText">
              <p style={{ fontWeight: 'bolder', margin: '0' }}>네오</p>
              <p style={{ color: 'gray', margin: '0' }}>
                회원님을 팔로우합니다
              </p>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              팔로우
            </p>
          </div>
          <div className="suggestionFirstUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/560/560216.png"
              alt="suggestionFirstUser"
            />
            <div className="suggestionFirstUserText">
              <p style={{ fontWeight: 'bolder', margin: '0' }}>튜브</p>
              <p style={{ color: 'gray', margin: '0' }}>
                회원님을 팔로우합니다
              </p>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              팔로우
            </p>
          </div>
          <div className="suggestionFirstUser">
            <img
              src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1657004141~hmac=5b70243640531777f7cb9ba848a003a7"
              alt="suggestionFirstUser"
            />
            <div className="suggestionFirstUserText">
              <p style={{ fontWeight: 'bolder', margin: '0' }}>춘식이</p>
              <p style={{ color: 'gray', margin: '0' }}>
                회원님을 팔로우합니다
              </p>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              팔로우
            </p>
          </div>
          <div className="suggestionFirstUser">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
              alt="suggestionFirstUser"
            />
            <div className="suggestionFirstUserText">
              <p style={{ fontWeight: 'bolder', margin: '0' }}>죠르디</p>
              <p style={{ color: 'gray', margin: '0' }}>
                회원님을 팔로우합니다
              </p>
            </div>
            <p
              style={{
                color: 'rgb(0, 174, 255)',
                fontSize: '13px',
                fontWeight: 'bolder',
              }}
            >
              팔로우
            </p>
          </div>
          <div className="introduce">
            <p
              style={{
                color: '#bfbfbf',
                wclassNameth: '200px',
                fontSize: '12px',
              }}
            >
              소개·도움말·홍보 센터·API·채용
              정보·개인정보처리방침·약관·위치·언어
            </p>
          </div>
          <div className="company">
            <p
              style={{
                color: '#bfbfbf',
                wclassNameth: '200px',
                fontSize: '12px',
              }}
            >
              © 2022 INSTAGRAM FROM META
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
