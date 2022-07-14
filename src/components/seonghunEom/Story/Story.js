import React from 'react';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <div className="story-section">
      <div className="profiles">
        <Link to="/" className="profiles-img">
          <img
            src="../../../../images/seonghunEom/people10.jpg"
            alt="profile01"
          />
        </Link>
        <div className="id-text">
          <div className="article-bold">Wecode_bootcamp</div>
          <div className="article-normal"> Wecode | 위코드</div>
        </div>
        <button>전환</button>
      </div>
      <div className="story">
        <div className="story-header">
          <div className="story-header-title">
            <span>스토리</span>
          </div>
          <button>모두 보기</button>
        </div>
        <div className="story-profiles">
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people03.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">_ims_ee</span>
              <span className="story-profiles-time">12시간 전</span>
            </div>
          </div>
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people04.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">_qwe_ee</span>
              <span className="story-profiles-time">3시간 전</span>
            </div>
          </div>
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people05.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">_vwv_ee</span>
              <span className="story-profiles-time">12분 전</span>
            </div>
          </div>
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="">
                <img
                  src="../../../../images/seonghunEom/people06.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">_grg_ee</span>
              <span className="story-profiles-time">40분 전</span>
            </div>
          </div>
        </div>
      </div>
      <div className="story-recommand">
        <div className="story-header">
          <div className="story-header-title">
            <span>회원님을 위한 추천</span>
          </div>
          <button>모두 보기</button>
        </div>
        <div className="story-profiles">
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people07.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">ironman</span>
              <span className="story-profiles-time">
                mastang님 외 2명이 좋아합니다.
              </span>
            </div>
            <button>팔로우</button>
          </div>
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people08.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">kulale</span>
              <span className="story-profiles-time">
                {' '}
                rokri님 외 2명이 좋아합니다.
              </span>
            </div>
            <button>팔로우</button>
          </div>
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people09.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">spaitheman</span>
              <span className="story-profiles-time">
                lee-sunsin님 외 2명이 좋아합니다.
              </span>
            </div>
            <button>팔로우</button>
          </div>
          <div className="story-profiles-inner">
            <div className="story-profiles-img">
              <Link to="/">
                <img
                  src="../../../../images/seonghunEom/people10.jpg"
                  alt="profile01"
                />
              </Link>
            </div>
            <div className="story-profiles-text">
              <span className="story-profiles-id">joaaahye</span>
              <span className="story-profiles-time">
                lende_a님 외 2명이 좋아합니다.
              </span>
            </div>
            <button>팔로우</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
