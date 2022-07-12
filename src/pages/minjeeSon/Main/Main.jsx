import React from 'react';
import { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../../../components/Feed/Feed';
import Follow from '../../../components/Follow/Follow';
import { FOLLOW_LIST } from './follow';
import './Main.scss';

function MainMinjee() {
  /* feed - mock data */
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);
  return (
    <div className="main-minjee">
      <Nav />
      <main>
        <div className="feeds">
          {feed.map(feed => {
            return (
              <Feed
                key={feed.id}
                imgAlt={feed.imgAlt}
                imgUrl={feed.imgUrl}
                details={feed.details}
              />
            );
          })}
        </div>
        <div className="main-right">
          <div className="user">
            <div className="user-img-big">
              <img alt="profile" src="/images/profile.JPG" />
            </div>
            <div className="user-info">
              <div className="user-id">m.minzzy</div>
              <div className="location">WeCode | 위코드</div>
            </div>
          </div>
          <div className="right-container">
            <div className="header">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <div className="followlist">
              {FOLLOW_LIST.map(follow => {
                return (
                  <Follow
                    key={follow.id}
                    imgUrl={follow.imgUrl}
                    userId={follow.userId}
                    userDetails={follow.userDetails}
                  />
                );
              })}
            </div>
          </div>
          <div className="footer">
            <ul className="gray-text">
              <li>소개 · </li>
              <li>도움말 · </li>
              <li>홍보센터 · </li>
              <li>API · </li>
              <li>채용 정보 · </li>
              <li>개인정보처리방침 · </li>
              <li>약관 · </li>
              <li>위치 · </li>
              <li>언어</li>
            </ul>
            <div>ⓒ 2022 INSTAGRAM FROM META</div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainMinjee;
