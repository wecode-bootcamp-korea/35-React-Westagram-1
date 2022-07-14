import { Link } from 'react-router-dom';
import Comments from './Comments';

const Feed = ({ feed }) => {
  return (
    <div className="feed-main-container">
      <div className="feed-header">
        <div className="profile-feed-section">
          <img src={feed.profile} id="profile-icon-feed" alt="프로필사진" />
        </div>
        <div className="id-location-section">
          <div className="id-in-feed">{feed.user}</div>
          <div className="location-in-feed">{feed.location}</div>
        </div>
        <div className="more-section">
          <img src="images/wonyoungJoo/more.png" alt="더보기" id="more-icon" />
        </div>
      </div>
      <div className="feed-main">
        <div className="feed-container">
          <img src={feed.feedImage} alt="피드이미지" id="feed-image" />
        </div>
      </div>
      <div className="feed-icon">
        <div className="first-icon-section">
          <span className="like" />
          <span className="reply" />
          <span className="dm" />
        </div>
        <div className="second-icon-section">
          <span id="save" />
        </div>
      </div>
      <div className="feed-like">
        <img
          className="feed-like-user-profile"
          src={feed.likeUserProfile}
          alt="프로필"
        />
        <div className="feed-like-text">
          <Link to="/main-wonyoung" className="userOfFeed" id="inlike">
            {feed.likeUser}
          </Link>
          님 <span className="userInLikeOfFeed">외 {feed.numOfLike}명</span>이
          좋아합니다
        </div>
      </div>
      <div className="feed-contents-section">
        <Link to="/main-wonyoung" className="userOfFeed">
          {feed.user}
        </Link>
        {feed.contents}
        <span id="more" />
      </div>
      <Comments time={feed.time} />
    </div>
  );
};

export default Feed;
