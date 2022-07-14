import Feed from './Feed';
import Stories from './Stories';
import Aside from './Aside';
import { useState, useEffect } from 'react';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="main-wonyoung">
      <main>
        <div className="total-container">
          <div className="main-container">
            <Stories />
            {feedList.map(feed => (
              <Feed key={feed.id} feed={feed} />
            ))}
          </div>
          <Aside />
        </div>
      </main>
    </div>
  );
};

export default Main;
