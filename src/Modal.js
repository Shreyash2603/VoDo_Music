// // Modal.js
// import React from "react";
// import "./Modal.css"; // Add custom styles for modal here

// const Modal = ({ track, onClose }) => {
//   if (!track) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <img
//           src={track.album.images[1].url}
//           alt={track.name}
//           className="modal-image"
//         />
//         <div className="modal-body">
//           <h5 className="modal-title">{track.name}</h5>
//           <p className="modal-text">Artist: {track.album.artists[0].name}</p>
//           <p className="modal-text">Release Date: {track.album.release_date}</p>
//           <button className="btn btn-primary" onClick={() => onClose(track)}>
//             Play
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import "./Modal.css"; // Add custom styles for modal here

const Modal = ({ track, onClose, onPlay }) => {
  if (!track) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={track.album.images[1].url}
          alt={track.name}
          className="modal-image"
        />
        <div className="modal-body">
          <h5 className="modal-title">{track.name}</h5>
          <p className="modal-text">Artist: {track.album.artists[0].name}</p>
          <p className="modal-text">Release Date: {track.album.release_date}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              onPlay(track); // Trigger playback
              onClose(); // Close the modal after starting playback
            }}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
