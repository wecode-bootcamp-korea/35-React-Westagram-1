import { useState } from 'react';

const Acomment = ({ cmnt, deleteCmnt }) => {
  const [isClicked, setIsClicked] = useState(true);
  const handleCommentLikeButton = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="comment-container">
      <span className="userOfComment">{cmnt.user}</span>
      <span className="commentOfUser">{cmnt.contents}</span>
      <span
        className={isClicked ? 'comment-like' : 'comment-liked'}
        onClick={() => {
          handleCommentLikeButton();
        }}
      />
      <span
        className="comment-delete"
        onClick={() => {
          deleteCmnt(cmnt.id);
        }}
      />
    </div>
  );
};

export default Acomment;
