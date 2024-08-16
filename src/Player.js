import React, { useRef, useEffect } from "react";

const Player = ({ track, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (track) {
      audioRef.current.play();
    }
  }, [track]);

  if (!track) {
    return null;
  }

  return (
    <div className="player-strip fixed-bottom bg-dark text-white p-3 d-flex align-items-center">
      <img
        src={track.album.images[2].url}
        alt={track.name}
        className="me-3"
        style={{ width: "50px", height: "50px" }}
      />
      <div className="me-auto">
        <div>{track.name}</div>
        <div className="text-muted">{track.album.artists[0].name}</div>
      </div>
      <audio
        src={track.preview_url}
        controls
        ref={audioRef}
        className="me-3"
        style={{ maxWidth: "300px" }}
        onPlay={() => audioRef.current.play()}
      />
      <button className="btn btn-outline-light" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Player;
