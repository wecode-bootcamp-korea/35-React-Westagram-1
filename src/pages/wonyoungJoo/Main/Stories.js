import { useState, useEffect } from 'react';

const Story = ({ story }) => {
  return (
    <div className="user-container-story">
      <img src={story.profile} className="profile-story" alt="프로필" />
      <span className="user-name-story">{story.user}</span>
    </div>
  );
};

const Stories = () => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetch('/data/storyData.json')
      .then(res => res.json())
      .then(res => {
        setStoryList(res);
      });
  }, []);

  return (
    <div className="story-container">
      {storyList.map(story => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
