import "./styles.css";
import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {
  let [likes, setLikes] = useState(0);
  let [dislikes, setDislikes] = useState(0);

  const onLike = () => {
    setLikes((likes) => likes + 1);
  };

  const onDislike = () => {
    setDislikes((dislikes) => dislikes + 1);
  };

  const onReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{likes}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislikes}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={onReset} />
    </div>
  );
}

export default Feedback;
