import React, { useState, useEffect } from 'react';
import { movies$ } from '../Utils/movies';

// import DeleteBtn from './Button';
import ProgressBar from './progressBar';

const Card = ({ onDelete, category, title, like, dislike }) => {
  const [likes, setLikes] = useState(like);
  const [dislikes, setDisLikes] = useState(dislike);

  const handleLike = (value) => {
    setLikes((prev) => prev + 1);
    setCompleted((prev) => prev + 1);
  };

  const handleDislike = (value) => {
    setDisLikes((prev) => prev + 1);
    setUnCompleted((prev) => prev + 1);
  };

  const [completed, setCompleted] = useState(like);
  const [unCompleted, setUnCompleted] = useState(dislike);

  useEffect(() => {
    setCompleted(like);
    setUnCompleted(dislike);
  }, []);

  const testData = [{ bgcolor: '#6a1b9a', completed: like }];

  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__subtitle">{category}</p>
      <div className="card__footer">
        <div>
          {likes} <button onClick={() => handleLike()}>Likes</button>
        </div>
        <div>
          {dislikes} <button onClick={() => handleDislike()}>disLikes</button>
        </div>
        <div>
          <button onClick={onDelete}>X</button>
        </div>
      </div>
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={completed}
          unCompleted={unCompleted}
        />
      ))}
    </div>
  );
};

export default Card;
