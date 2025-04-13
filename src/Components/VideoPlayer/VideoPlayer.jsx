import React, { useRef } from "react";
import "./VideoPlayer.css";

import video from "../../assets/video.mp4";

const VideoPlayer = ({ playerState, setPlayerState }) => {
  const player = useRef(null);

  function closePlayer(e) {
    if (e.target === player.current) {
      setPlayerState(false);
    }
  }
  return (
    <div
      className={`video-player ${playerState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
