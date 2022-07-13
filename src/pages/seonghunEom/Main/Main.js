import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import CommentBox from '../../../components/seonghunEom/CommentBox';
import { INFO_LIST } from './FooterData';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([
    {
      id: 0,
      userName: 'Lvoeon_mj',
      content: '',
      text: ' 보고싶어요 사쿠라!❣️❣️',
    },
    {
      id: 1,
      userName: 'picemake_p',
      content: ' ',
      text: ' 르세라핌 화이팅!!!!💙',
    },
    {
      id: 2,
      userName: 'nindendo_do',
      content: '',
      text: ' 오늘도 💘🤎💛',
    },
  ]);
  const [nextId, setNextId] = useState(3);
  const onChange = e => {
    setInputValue(e.target.value);
  };
  const onClick = e => {
    e.preventDefault();
    const nextNames = commentList.concat({
      id: nextId,
      userName: 'mylove_jin ',
      text: inputValue,
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
    <div className="main">
      <nav className="main-navigation">
        <Link to="/login-seonghun" className="toLogin">
          - 테스트 Main화면 입니다 로그인 누르면 Login페이지로 이동 페이지 -
        </Link>
        <div className="nav-box">
          <div className="logo">
            <i className="fab fa-instagram" />
            <h1>Westagram</h1>
          </div>
          <div className="search-box">
            <form action="/">
              <label htmlFor="">
                <input type="text" placeholder="검색" />
              </label>
            </form>
          </div>
          <div className="nav-icons">
            <Link to="/">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="compass"
                className="nav-imgs"
              />
            </Link>
            <Link to="/">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
                className="nav-imgs"
              />
            </Link>
            <Link to="/">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="my-page"
                className="nav-imgs"
              />
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <section className="feeds">
          <article>
            <div className="article-header">
              <div className="profiles">
                <div className="profiles-img">
                  <Link to="">
                    <img
                      src="../../../../images/seonghunEom/people01.jpg"
                      alt="feedsimg"
                    />
                  </Link>
                </div>
                <div className="id-text">
                  <span>Sakura Miyawaki</span>
                </div>
                <div className="article-header-menu">
                  <Link to="">
                    <i className="fas fa-ellipsis-h" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="contents">
              <img
                src="../../../../images/seonghunEom/feed01.jpg"
                alt="feedsimg"
              />
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
                  <span> 桜さんめっちゃやば！❤️</span>
                </div>
                <div>
                  <span className="article-bold">nececsoeis</span>
                  <span> IZONいつも応援してますよ！🇯🇵</span>
                </div>
                <div className="upload-time">
                  <span>42분 전</span>
                </div>
                <CommentBox
                  commentList={commentList}
                  onClick={onClick}
                  onRemove={onRemove}
                />
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
        </section>
        <aside>
          <div className="story-section">
            <div className="profiles">
              <Link to="/" className="profiles-img">
                <img
                  src="../../../../images/seonghunEom/people02.jpg"
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
          <footer>
            <ul>
              {INFO_LIST.map(info => {
                return <li key={info.id}>{info.content}</li>;
              })}
            </ul>
            <div className="copy">© 2022 INSTAGRAM FROM FACEBOOK</div>
          </footer>
        </aside>
      </main>
    </div>
  );
};

export default Main;
