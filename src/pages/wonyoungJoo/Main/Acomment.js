import { useState } from 'react';
import love from '../../../assets/images/love.png';
import liked from '../../../assets/images/liked.png';

const Acomment = ({ cmntList, key, deleteCmnt }) => {
  const [likeState, setlikeState] = useState(love);
  const likeComment = () => {
    likeState === love ? setlikeState(liked) : setlikeState(love);
  };
  return (
    <div className="comment-container">
      <span className="userOfComment">ore.zeno</span>
      <span className="commentOfUser">{cmntList.contents}</span>
      <span
        className="comment-like"
        onClick={() => {
          likeComment();
        }}
        style={{
          backgroundImage: `url(${likeState})`,
        }}
      />
      <span
        className="comment-delete"
        onClick={() => {
          deleteCmnt(cmntList.id);
        }}
      />
    </div>
  );
};

export default Acomment;
