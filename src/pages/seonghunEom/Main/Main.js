import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import CommentBox from '../../../components/seonghunEom/CommentBox';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([
    {
      id: 0,
      userName: 'Lvoeon_mj',
      content: '',
      text: ' 댓글을 달아보고 싶었어!',
    },
    {
      id: 1,
      userName: 'picemake_p',
      content: ' ',
      text: ' 위코드 만한게 없지!',
    },
    {
      id: 2,
      userName: 'nindendo_do',
      content: '',
      text: ' 빨간색줄 수정좀...',
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
                <input type="text" placeholder="아이디 검색" />
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
                  <span>Wecode_bootcamp</span>
                  <span>Wecode - 위코드</span>
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
                  <span className="article-bold">wecoedworld님</span>
                  <span>외 10명이 좋아합니다.</span>
                </div>
              </div>
              <div className="article-bottom-texts">
                <div>
                  <span className="article-bold">canon_mj</span>
                  <span> 위워크에서 진행한 베이킹 클래스...</span>
                </div>
                <div>
                  <span className="article-bold">nececsoeis</span>
                  <span> 거봐 좋았잖아~~</span>
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
                  src="../../../../images/seonghunEom/people01.jpg"
                  alt="profile01"
                />
              </Link>
              <div className="id-text">
                <span className="article-bold">Wecode_bootcamp</span>
                <span className="article-bold"> Wecode - 위코드</span>
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
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_ims_ee</span>
                    <span className="story-profiles-time">2시간 전</span>
                  </div>
                </div>
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_qwe_ee</span>
                    <span className="story-profiles-time">3시간 전</span>
                  </div>
                </div>
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_vwv_ee</span>
                    <span className="story-profiles-time">4시간 전</span>
                  </div>
                </div>
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_grg_ee</span>
                    <span className="story-profiles-time">6시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-recommand">
              <div className="story-header">
                <div className="story-header-title">
                  <span>스토리</span>
                </div>
                <button>모두 보기</button>
              </div>
              <div className="story-profiles">
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_ims_ee</span>
                    <span className="story-profiles-time">2시간 전</span>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_qwe_ee</span>
                    <span className="story-profiles-time">3시간 전</span>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_vwv_ee</span>
                    <span className="story-profiles-time">4시간 전</span>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="sotry-profiles-inner">
                  <div className="story-profiles-img">
                    <Link to="/">
                      <img
                        src="../../../../images/seonghunEom/people01.jpg"
                        alt="profile01"
                      />
                    </Link>
                  </div>
                  <div className="story-profiles-text">
                    <span className="story-profiles-id">_grg_ee</span>
                    <span className="story-profiles-time">6시간 전</span>
                  </div>
                  <button>팔로우</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Main;
