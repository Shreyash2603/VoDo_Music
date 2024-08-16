
// Playlist.js
// import React, { useState } from "react";
// import "./Playlist.css";

// function Playlist({ playlists, addTrackToPlaylist, createNewPlaylist }) {
//   const [newPlaylistName, setNewPlaylistName] = useState("");

//   return (
//     <div className="container">
//       <h2>Playlists</h2>
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="New Playlist Name"
//           value={newPlaylistName}
//           onChange={(e) => setNewPlaylistName(e.target.value)}
//         />
//         <button
//           className="btn btn-primary mt-2"
//           onClick={() => {
//             createNewPlaylist(newPlaylistName);
//             setNewPlaylistName("");
//           }}
//         >
//           Create Playlist
//         </button>
//       </div>
//       <div className="row">
//         {playlists.map((playlist) => (
//           <div key={playlist.id} className="col-lg-3 col-md-6 py-2">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{playlist.name}</h5>
//                 <ul className="list-group list-group-flush">
//                   {playlist.tracks.map((track) => (
//                     <li key={track.id} className="list-group-item">
//                       {track.name}
//                       <audio
//                         src={track.preview_url}
//                         controls
//                         className="w-100 mt-2"
//                       ></audio>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className="btn btn-secondary mt-2"
//                   onClick={() => addTrackToPlaylist(playlist.id)}
//                 >
//                   Add Track
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Playlist;

import React, { useState } from "react";
import "./Playlist.css";

function Playlist({
  playlists,
  addTrackToPlaylist,
  createNewPlaylist,
  onPlay,
}) {
  const [newPlaylistName, setNewPlaylistName] = useState("");

  return (
    <div className="container">
      <h2>Playlists</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Playlist Name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            createNewPlaylist(newPlaylistName);
            setNewPlaylistName("");
          }}
        >
          Create Playlist
        </button>
      </div>
      <div className="row">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="col-lg-3 col-md-6 py-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{playlist.name}</h5>
                <ul className="list-group list-group-flush">
                  {playlist.tracks.map((track) => (
                    <li
                      key={track.id}
                      className="list-group-item"
                      onClick={() => onPlay(track)} // Trigger play function
                    >
                      {track.name}
                      <audio
                        src={track.preview_url}
                        controls
                        className="w-100 mt-2"
                      ></audio>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-secondary mt-2"
                  onClick={() => addTrackToPlaylist(playlist.id)}
                >
                  Add Track
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
