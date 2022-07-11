import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../../../components/Feed/Feed';
import Follow from '../../../components/Follow/Follow';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

function MainMinjee() {
  return (
    <div className="main-minjee">
      <Nav />
      <main>
        <div className="feeds">
          <Feed
            imgUrl="/images/feed-image.jpg"
            imgAlt="by mj, on Nov 17, 2021. Standing in front of brick wall. Feed sample 1."
            details="저때가 좋았지.....^___^"
          />
          <Feed
            imgUrl="/images/feed-image2.jpg"
            imgAlt="by mj, on Oct 18, 2019. In Proto, Portugal. Feed sample 2."
            details="코로나 직전 문 닫고 다녀온 포르투갈 & 스페인 여행ㅠ_ㅠ 그
            이후로 3년 동안 한국에 갇히게 될 줄은 몰랐다. 여 행 가 고 ㅍ r ...⭐️"
          />
          <Feed
            imgUrl="/images/feed-image3.jpeg"
            imgAlt="by mj, on Apr 26, 2021. One fine day in spring. Feed sample 3."
            details="One Fine Day 💛"
          />
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
              <Follow
                imgUrl="data:image/jpeg;base64,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"
                userId="wecode_bootcamp"
                userDetails="m.minzzy님 외 40명이 팔로우 합니다"
              />
              <Follow
                imgUrl="https://ca.slack-edge.com/TH0U6FBTN-U03F92K7R40-59d1d9773516-512"
                userId="hjlee"
                userDetails="m.minzzy님이 팔로우 합니다"
              />
              <Follow
                imgUrl="https://ca.slack-edge.com/TH0U6FBTN-U03F92KNXDE-59fc0646eecc-512"
                userId="junghoon_lee"
                userDetails="instagram 신규 가입"
              />
              <Follow
                imgUrl="https://ca.slack-edge.com/TH0U6FBTN-U03HZLPCRPV-35fcd4ce5529-512"
                userId="w_wonjae"
                userDetails="m.minzzy님 외 2명이 팔로우 합니다"
              />
              <Follow
                imgUrl="https://ca.slack-edge.com/TH0U6FBTN-U03EK9P9MJ7-ced91847c1b6-512"
                userId="gyu_chanback"
                userDetails="알 수도 있는 친구"
              />
              <Follow
                imgUrl="https://ca.slack-edge.com/TH0U6FBTN-U03EK9PAMA7-eac6ec59ed4a-512"
                userId="Yelihi"
                userDetails="instagram 신규 가입"
              />
              <Follow
                imgUrl="https://ca.slack-edge.com/TH0U6FBTN-U03EGCJJLLD-b5b4c659a1f8-512"
                userId="i.iiiikhyeon"
                userDetails="gyu_chanback님 외 5명이 팔로우 합니다"
              />
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
