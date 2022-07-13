import Feed from './Feed';
import { useState, useEffect } from 'react';
import './Main.scss';

const Story = () => {
  return (
    <div className="user-container-story">
      <img
        src="images/wonyoungJoo/default profile.jpg"
        className="profile-story"
        alt="프로필"
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

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="main-wonyoung">
      <main>
        <div className="total-container">
          <div className="main-container">
            <Stories />
            {feedList.map(feed => (
              <Feed key={feed.id} feed={feed} />
            ))}
          </div>
          <Aside />
        </div>
      </main>
    </div>
  );
};

export default Main;
