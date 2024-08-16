// Animation.js
import React, { useEffect, useState } from "react";
import "./Animation.css"; // Create this CSS file for animation styles

const Animation = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000); // Duration of the animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    show && (
      <div className="animation">
        <h1>VoDo Music</h1>
      </div>
    )
  );
};

export default Animation;
