import React from 'react';
import { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

function MainMinjee() {
  const [comments, setComments] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const isValidComments = e => {
    return comments ? setIsValid(true) : setIsValid(false);
  };
  const commentsInput = e => {
    setComments(e.target.value);
  };

  const commentsSubmit = e => {
    e.preventDefault();

    setCommentsList(prevList => {
      return [...prevList, comments];
    });
    setComments('');
  };

  return (
    <div className="main-minjee">
      <Nav />
      <main>
        <div className="feeds">
          <article className="article">
            <div className="top">
              <div className="user-img">
                <img alt="profile" src="/images/profile.JPG" />
              </div>
              <div className="user-id">m.minzzy</div>
              <button className="more">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </button>
            </div>
            <div className="middle">
              <img
                alt="by mj, on Nov 17, 2021. Standing in front of brick wall. Feed sample 1."
                src="/images/feed-image.jpg"
              />
            </div>
            <div className="bottom">
              <div className="img-bottom-icons">
                <div className="left-icons">
                  <img alt="likes-heart" src="/images/like.png" />
                  <img alt="comments" src="/images/chat.png" />
                  <img alt="share" src="/images/send.png" />
                </div>
                <div className="right-icons">
                  <img alt="bookmark" src="/images/bookmark.png" />
                </div>
              </div>
              <div className="likes">
                <div className="profile">
                  <img alt="user of likes" src="/images/profile.JPG" />
                </div>
                <div className="who-likes">
                  <b>m.minzzy</b>님 외 <b>100명</b>이 좋아합니다.
                </div>
              </div>
              <div className="contents">
                <span className="user-id">m.minzzy</span>
                <span className="details">저때가 좋았지.....^___^</span>
              </div>
              {commentsList.map((oneComment, id) => {
                return (
                  <div key={id} className="comments">
                    <span className="user-id">m.minzzy</span>
                    <span className="details">{oneComment}</span>
                  </div>
                );
              })}
              <div className="time-ago">1분 전</div>
              <form
                className="input-comments"
                onSubmit={commentsSubmit}
                onKeyUp={isValidComments}
              >
                <img alt="comments imoji" src="/images/smile.png" />
                <input
                  className="do-input"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comments}
                  onChange={commentsInput}
                />
                <button
                  className={'input-button' + (isValid ? ' active' : '')}
                  disabled={isValid ? false : true}
                >
                  게시
                </button>
              </form>
            </div>
          </article>
          <article className="article">
            <div className="top">
              <div className="user-img">
                <img alt="profile" src="/images/profile.JPG" />
              </div>
              <div className="user-id">m.minzzy</div>
              <button className="more">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </button>
            </div>
            <div className="middle">
              <img
                alt="by mj, on Oct 18, 2019. In Proto, Portugal. Feed sample 2."
                src="/images/feed-image2.jpg"
              />
            </div>
            <div className="bottom">
              <div className="img-bottom-icons">
                <div className="left-icons">
                  <img alt="likes-heart" src="/images/like.png" />
                  <img alt="comments" src="/images/chat.png" />
                  <img alt="share" src="/images/send.png" />
                </div>
                <div className="right-icons">
                  <img alt="bookmark" src="/images/bookmark.png" />
                </div>
              </div>
              <div className="likes">
                <div className="profile">
                  <img alt="user of likes" src="/images/profile.JPG" />
                </div>
                <div className="who-likes">
                  <b>m.minzzy</b>님 외 <b>7,339,495명</b>이 좋아합니다.
                </div>
              </div>
              <div className="contents">
                <span className="user-id">m.minzzy</span>
                <span className="details">
                  저때가 좋았지.....^___^22222
                  <br />
                  코로나 직전 문 닫고 다녀온 포르투갈 & 스페인 여행ㅠ_ㅠ 그
                  이후로 3년 동안 한국에 갇히게 될 줄은 몰랐다.
                </span>
              </div>
              <div className="comments">
                <span className="user-id">Yelihi</span>
                <span className="details">정말 대박이군요~!</span>
              </div>
              <div className="time-ago">10일 전</div>
              <form className="input-comments">
                <img alt="comments imoji" src="/images/smile.png" />
                <input
                  className="do-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="input-button">게시</button>
              </form>
            </div>
          </article>
          <article className="article">
            <div className="top">
              <div className="user-img">
                <img alt="profile" src="/images/profile.JPG" />
              </div>
              <div className="user-id">m.minzzy</div>
              <button className="more">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </button>
            </div>
            <div className="middle">
              <img
                alt="by mj, on Apr 26, 2021. One fine day in spring. Feed sample 3."
                src="/images/feed-image3.jpeg"
              />
            </div>
            <div className="bottom">
              <div className="img-bottom-icons">
                <div className="left-icons">
                  <img alt="likes-heart" src="/images/like.png" />
                  <img alt="comments" src="/images/chat.png" />
                  <img alt="share" src="/images/send.png" />
                </div>
                <div className="right-icons">
                  <img alt="bookmark" src="/images/bookmark.png" />
                </div>
              </div>
              <div className="likes">
                <div className="profile">
                  <img
                    alt="user of likes"
                    src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdqIWhH%2FbtrqmNPqhOR%2FUYNglFKHj2Jz2lJxnDUIyk%2Fimg.jpg"
                  />
                </div>
                <div className="who-likes">
                  <b>iiiindigggggo</b>님 외 <b>1004명</b>이 좋아합니다.
                </div>
              </div>
              <div className="contents">
                <span className="user-id">m.minzzy</span>
                <span className="details">One Fine Day 💛</span>
              </div>
              <div className="comments">
                <span className="user-id">iiiindigggggo</span>
                <span className="details">화창하군요~!</span>
              </div>
              <div className="time-ago">1분 전</div>
              <form className="input-comments">
                <img alt="comments imoji" src="/images/smile.png" />
                <input
                  className="do-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="input-button">게시</button>
              </form>
            </div>
          </article>
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
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
                <div>
                  <div className="user-id">wecode_bootcamp</div>
                  <div className="user-details">
                    m.minzzy님 외 40명이 팔로우 합니다
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="https://ca.slack-edge.com/TH0U6FBTN-U03F92K7R40-59d1d9773516-512"
                  />
                </div>
                <div>
                  <div className="user-id">hjlee</div>
                  <div className="user-details">m.minzzy님이 팔로우 합니다</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="https://ca.slack-edge.com/TH0U6FBTN-U03F92KNXDE-59fc0646eecc-512"
                  />
                </div>
                <div>
                  <div className="user-id">junghoon_lee</div>
                  <div className="user-details">instagram 신규 가입</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="https://ca.slack-edge.com/TH0U6FBTN-U03HZLPCRPV-35fcd4ce5529-512"
                  />
                </div>
                <div>
                  <div className="user-id">w_wonjae</div>
                  <div className="user-details">
                    m.minzzy님 외 2명이 팔로우 합니다
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="https://ca.slack-edge.com/TH0U6FBTN-U03EK9P9MJ7-ced91847c1b6-512"
                  />
                </div>
                <div>
                  <div className="user-id">gyu_chanback</div>
                  <div className="user-details">알 수도 있는 친구</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="https://ca.slack-edge.com/TH0U6FBTN-U03EK9PAMA7-eac6ec59ed4a-512"
                  />
                </div>
                <div>
                  <div className="user-id">Yelihi</div>
                  <div className="user-details">instagram 신규 가입</div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="users">
                <div className="user-img">
                  <img
                    alt="profile"
                    src="https://ca.slack-edge.com/TH0U6FBTN-U03EGCJJLLD-b5b4c659a1f8-512"
                  />
                </div>
                <div>
                  <div className="user-id">i.iiiikhyeon</div>
                  <div className="user-details">
                    gyu_chanback님 외 5명이 팔로우 합니다
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
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
