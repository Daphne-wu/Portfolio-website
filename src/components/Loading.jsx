import React from "react";
import "./styles/Loading.css"; // Your custom styles for loading
import loadingVideo from "./assets/images/loading-video.mp4";

const Loading = () => {
  const handleVideoEnd = (event) => {
    event.target.style.objectFit = "cover"; // Ensure the last frame fits nicely
    event.target.pause(); // Stop any accidental replay
  };

  return (
    <div className="loading-screen">
      <video
        className="loading-video"
        src={loadingVideo}
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnd} // Trigger when the video ends
      />
    </div>
  );
};

export default Loading;
