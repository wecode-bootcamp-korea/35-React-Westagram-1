import './Main.scss';
import { useState } from 'react';
import Comments from './Comments';

const Story = () => {
  return (
    <div className="user-container-story">
      <img
        src="images/wonyoungJoo/default profile.jpg"
        className="profile-story"
      />
      <span className="user-name-story">_j0010</span>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="story-container">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

const Feed = () => {
  return (
    <div className="feed-main-container">
      <div className="feed-header">
        <div className="profile-feed-section">
          <img
            src="images/wonyoungJoo/profile.jpg"
            id="profile-icon-feed"
            alt="프로필사진"
          />
        </div>
        <div className="id-location-section">
          <div className="id-in-feed">ore.zeno</div>
          <div className="location-in-feed">카페 공유</div>
        </div>
        <div className="more-section">
          <img src="images/wonyoungJoo/more.png" alt="더보기" id="more-icon" />
        </div>
      </div>
      <div className="feed-main">
        <div className="feed-container">
          <img
            src="images/wonyoungJoo/feed.JPG"
            alt="피드이미지"
            id="feed-image"
          />
        </div>
      </div>
      <div className="feed-icon">
        <div className="first-icon-section">
          <span id="like" />
          <span id="reply" />
          <span id="dm" />
        </div>
        <div className="second-icon-section">
          <span id="save" />
        </div>
      </div>
      <div className="feed-like">
        <img
          className="feed-like-user-profile"
          src="images/wonyoungJoo/default profile.jpg"
        />
        <div className="feed-like-text">
          <a className="userOfFeed" id="inlike">
            __j0010
          </a>
          님 외 <a className="userInLikeOfFeed">302명</a>이 좋아합니다
        </div>
      </div>
      <div className="feed-contents-section">
        <a className="userOfFeed">ore.zeno</a>보문역에 위치한 카페 공유...{' '}
        <a id="more">더 보기</a>
      </div>
      <Comments />
    </div>
  );
};

const Aside = () => {
  return (
    <div className="aside-container">
      <div className="aside-header">
        <div className="aside-profile-container">
          <img
            className="aside-profile"
            src="./images/wonyoungJoo/profile.jpg"
            alt="aside profile"
          />
        </div>
        <div className="aside-id-container">
          <div className="aside-id">ore.zeno</div>
        </div>
        <div className="aside-change-button-container">
          <button className="aside-change-button">전환</button>
        </div>
      </div>
      <div className="aside-main">
        <div className="aside-recommend">
          <div className="aside-reco-forme">회원님을 위한 추천</div>
          <div className="aside-reco-viewAll">
            <button className="aside-viewAll-button">모두 보기</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/wonyoungJoo/default profile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              _j0010
            </div>
            <div className="reco-user" id="follower">
              zzirongt님 외 2명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/wonyoungJoo/default profile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              _j0010
            </div>
            <div className="reco-user" id="follower">
              zzirongt님 외 2명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/wonyoungJoo/default profile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              _j0010
            </div>
            <div className="reco-user" id="follower">
              zzirongt님 외 2명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/wonyoungJoo/default profile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              _j0010
            </div>
            <div className="reco-user" id="follower">
              zzirongt님 외 2명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
        <div className="aside-reco-user">
          <div className="reco-user-profile-container">
            <img
              src="/images/wonyoungJoo/default profile.jpg"
              alt="profile"
              className="reco-user-profile"
            />
          </div>
          <div className="reco-user-container">
            <div className="reco-user" id="id">
              _j0010
            </div>
            <div className="reco-user" id="follower">
              zzirongt님 외 2명이 팔로우합니다.
            </div>
          </div>
          <div className="reco-follow-button-container">
            <button className="aside-follow-button">팔로우</button>
          </div>
        </div>
      </div>
      <div className="aside-footer">
        <span>
          소개&nbsp;&middot;&nbsp;도움말&nbsp;&middot;&nbsp;홍보
          센터&nbsp;&middot;API&middot;&nbsp;채용
          정보&nbsp;&middot;&nbsp;개인정보처리방침&nbsp;&middot;&nbsp;
          <br />
          약관&nbsp;&middot;&nbsp;위치&nbsp;&middot;&nbsp;언어
          <br />
          <br />© 2022 WESTAGRAM FROM META
        </span>
      </div>
    </div>
  );
};

function Main() {
  return (
    <div className="main">
      <main>
        <div className="total-container">
          <div className="main-container">
            <Stories />
            <Feed />
            <Feed />
          </div>
          <Aside />
        </div>
      </main>
    </div>
  );
}

export default Main;
