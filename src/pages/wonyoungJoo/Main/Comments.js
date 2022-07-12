import { useState, useEffect } from 'react';
import Acomment from './Acomment';
let id = 4;
let user = 'ore.zeno';

const Comments = () => {
  const [onButton, setOnbutton] = useState(true);
  const [cmntList, setCmntList] = useState([]);
  let cmnt = '';

  const checkItIsBlank = e => {
    let thisCmnt = e.target.value;
    thisCmnt.length > 0 && !!thisCmnt.trim()
      ? setOnbutton(false)
      : setOnbutton(true);
  };

  const createCmnt = e => {
    e.preventDefault();
    cmnt = e.target.text.value;
    setCmntList([...cmntList, { id: id, user: user, contents: cmnt }]);
    e.target.text.value = '';
    setOnbutton(true);
    id++;
  };

  const deleteCmnt = i => {
    setCmntList(
      cmntList.filter(object => {
        return object.id !== i;
      })
    );
  };

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCmntList(data);
      });
  }, []);

  return (
    <>
      <div className="feed-comment">
        {cmntList.map(cmnt => (
          <Acomment cmnt={cmnt} deleteCmnt={deleteCmnt} key={cmnt.id} />
        ))}
      </div>
      <div className="feed-time">30분 전</div>
      <form
        className="feed-comment-box-section"
        onSubmit={e => {
          createCmnt(e);
        }}
        onChange={e => {
          checkItIsBlank(e);
        }}
      >
        <div className="emoji-icon-container">
          <img src="images/smile.png" alt="emoji" className="emoji-icon" />
        </div>
        <input
          type="text"
          name="text"
          placeholder="댓글 달기..."
          className="comment-box"
        />
        <button
          className="comment-enter-button"
          name="button"
          disabled={onButton}
        >
          게시
        </button>
      </form>
    </>
  );
};

export default Comments;