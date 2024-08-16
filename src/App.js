// // import logo from "./logo.svg";
// // import "./App.css";
// // import { useState } from "react";

// // function App() {
// //   const [tracks, setTracks] = useState([]);

// //   const getTracks = async () => {
// //     let data = await fetch(
// //       "https://v1.nocodeapi.com/shubhusguy/spotify/ebfsHnxXfenxGGHs/search?q=kk&type=track"
// //     );
// //     let convertData = await data.json();
// //     console.log(convertData.tracks.items);
// //     setTracks(convertData.tracks.items);
// //   };

// //   return (
// //     <>
// //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //         <div className="container-fluid">
// //           <a className="navbar-brand" href="#">
// //             Music App
// //           </a>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarSupportedContent"
// //             aria-controls="navbarSupportedContent"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon" />
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <input
// //               className="form-control me-2 w-75"
// //               type="search"
// //               placeholder="Search"
// //               aria-label="Search"
// //             />
// //             <button className="btn btn-outline-success" type="submit">
// //               Search
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container">
// //         <div className="row">
// //           <div className="col">
// //             <button onClick={getTracks} className="btn btn-sm btn-primary">
// //               get Data
// //             </button>
// //           </div>
// //           {tracks.maps((element) => {
// //             return (
// //               <div key={element.album.id} className="col">
// //                 <img src={element.album.images[1]} alt="" />
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// // import logo from "./logo.svg";
// // import "./App.css";
// // import { useState } from "react";

// // function App() {
// //   const [keyword, setKeyword] = useState("");
// //   const [tracks, setTracks] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const getTracks = async () => {
// //     setIsLoading(true);
// //     try {
// //       let data = await fetch(
// //         `https://v1.nocodeapi.com/shubhusguy/spotify/ebfsHnxXfenxGGHs/search?q=${
// //           keyword === "" ? "trending" : keyword
// //         }&type=track`
// //       );
// //       let convertData = await data.json();
// //       console.log(convertData.tracks.items);
// //       setTracks(convertData.tracks.items);
// //     } catch (error) {
// //       console.error("Error fetching the tracks:", error);
// //     }
// //     setIsLoading(false);
// //   };

// //   useEffect(() => {
// //     getTracks();
// //   }, []);

// //   return (
// //     <>
// //       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
// //         <div className="container-fluid">
// //           <a className="navbar-brand" href="#">
// //             Music App
// //           </a>

// //           <div
// //             className="collapse navbar-collapse d-flex justify-content-center"
// //             id="navbarSupportedContent"
// //           >
// //             <input
// //               value={keyword}
// //               onChange={(event) => {
// //                 setKeyword(event.target.value);
// //               }}
// //               className="form-control me-2 w-75"
// //               type="search"
// //               placeholder="Search"
// //               aria-label="Search"
// //             />
// //             <button onClick={getTracks} className="btn btn-outline-success">
// //               Search
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container">
// //         <div className={`row ${isLoading ? "" : "d-none"}`}>
// //           <div className="col-12 py-5 text-center">
// //             <>
// //               <div className="spinner-border text-primary" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-secondary" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-success" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-danger" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-warning" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-info" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-light" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //               <div className="spinner-border text-dark" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //               </div>
// //             </>
// //           </div>
// //         </div>
// //         <div className="row">
// //           {tracks.map((element) => {
// //             return (
// //               <div key={element.id} className="col-lg-3 col-md-6 py-2">
// //                 <div className="card">
// //                   <img
// //                     src={element.album.images[1].url}
// //                     className="card-img-top"
// //                     alt="..."
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">{element.name}</h5>
// //                     <p className="card-text">
// //                       Artist: {element.album.artists[0].name}
// //                     </p>
// //                     <p className="card-text">
// //                       Release Date: {element.album.release_date}
// //                     </p>

// //                     <audio
// //                       src={element.preview_url}
// //                       controls
// //                       className="w-100"
// //                     ></audio>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhusguy/spotify/ebfsHnxXfenxGGHs/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getTracks();
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Music App
//           </a>

//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button onClick={getTracks} className="btn btn-outline-success">
//               Search
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className="container">
//         <div className={`row ${isLoading ? "" : "d-none"}`}>
//           <div className="col-12 py-5 text-center">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-secondary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-success" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-danger" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-warning" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-info" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-light" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <div className="spinner-border text-dark" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {tracks.map((element) => {
//             return (
//               <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                 <div className="card">
//                   <img
//                     src={element.album.images[1].url}
//                     className="card-img-top"
//                     alt="..."
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{element.name}</h5>
//                     <p className="card-text">
//                       Artist: {element.album.artists[0].name}
//                     </p>
//                     <p className="card-text">
//                       Release Date: {element.album.release_date}
//                     </p>

//                     <audio
//                       src={element.preview_url}
//                       controls
//                       className="w-100"
//                     ></audio>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
// // App.js
// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";
// import Playlist from "./Playlist";

// function App() {
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks"); // Added state to manage views
//   const [selectedTrack, setSelectedTrack] = useState(null); // Track to be added to playlist

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhusguy/spotify/ebfsHnxXfenxGGHs/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     getTracks();
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button onClick={getTracks} className="btn btn-outline-success">
//               Search
//             </button>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{element.name}</h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <audio
//                         src={element.preview_url}
//                         controls
//                         className="w-100"
//                       ></audio>
//                       <button
//                         className="btn btn-secondary mt-2"
//                         onClick={() => setSelectedTrack(element)}
//                       >
//                         Select Track
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player"; // Import the Player component
// import { FaUser } from "react-icons/fa";

// function App() {
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null); // State for the currently playing track

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     getTracks();
//   }, []);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track); // Set the selected track to play in the bottom player
//   };

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button onClick={getTracks} className="btn btn-outline-success">
//               Search
//             </button>
//           </div>
//         </div>
//       </nav>
//       <FaUser className="profile-icon" /> {/* Profile Icon */}
//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div className="card border-primary">
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => handlePlay(fullscreenTrack)}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player
//         track={playingTrack}
//         onClose={() => setPlayingTrack(null)} // Clear the track when the player is closed
//       />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";

// function App() {
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     getTracks();
//   }, []);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             {" "}
//             {/* This div will push the profile icon to the right */}
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div className="card border-primary">
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => handlePlay(fullscreenTrack)}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             {" "}
//             {/* This div will push the profile icon to the right */}
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div className="card border-primary">
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => handlePlay(fullscreenTrack)}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             {" "}
//             {/* This div will push the profile icon to the right */}
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div className="card border-primary">
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => handlePlay(fullscreenTrack)}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";

// function App() {
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     getTracks();
//   }, []);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             {" "}
//             {/* This div will push the profile icon to the right */}
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div className="card border-primary">
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => handlePlay(fullscreenTrack)}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             {" "}
//             {/* This div will push the profile icon to the right */}
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div className="card border-primary">
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt={fullscreenTrack.name}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePlay(fullscreenTrack);
//                 }}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div
//             className="card border-primary"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt={fullscreenTrack.name}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePlay(fullscreenTrack);
//                 }}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       console.log(convertData.tracks.items);
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <div
//           className="fullscreen-card"
//           onClick={() => setFullscreenTrack(null)}
//         >
//           <div
//             className="card border-primary"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={fullscreenTrack.album.images[1].url}
//               className="card-img-top"
//               alt={fullscreenTrack.name}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{fullscreenTrack.name}</h5>
//               <p className="card-text">
//                 Artist: {fullscreenTrack.album.artists[0].name}
//               </p>
//               <p className="card-text">
//                 Release Date: {fullscreenTrack.album.release_date}
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handlePlay(fullscreenTrack);
//                 }}
//               >
//                 Play
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal"; // Import Modal component
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <a className="nav-link" href="#">
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <Modal
//           track={fullscreenTrack}
//           onClose={() => setFullscreenTrack(null)}
//         />
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal"; // Import Modal component
// import Profile from "./Profile"; // Import Profile component
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);
//   const [showProfile, setShowProfile] = useState(false);

//   // Mock user data
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     gender: "male",
//     musicType: "Rock",
//     details: "Music enthusiast",
//     profileImage: null,
//   });

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setShowProfile(true)}
//             >
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <Modal
//           track={fullscreenTrack}
//           onClose={() => setFullscreenTrack(null)}
//         />
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//       {showProfile && (
//         <Profile
//           user={user}
//           onClose={() => setShowProfile(false)}
//           onUpdateProfile={handleUpdateProfile}
//         />
//       )}
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal";
// import Profile from "./Profile";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);
//   const [showProfile, setShowProfile] = useState(false);

//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     gender: "male",
//     musicType: "Rock",
//     details: "Music enthusiast",
//     profileImage: null,
//   });

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <a
//             className="navbar-brand"
//             href="#"
//             onClick={() => window.location.reload()}
//           >
//             Music App
//           </a>
//           <div className="navbar-nav">
//             <a className="nav-link" href="#" onClick={() => setView("tracks")}>
//               Tracks
//             </a>
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setView("playlists")}
//             >
//               Playlists
//             </a>
//           </div>
//           <div
//             className="collapse navbar-collapse d-flex justify-content-center"
//             id="navbarSupportedContent"
//           >
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <a
//               className="nav-link"
//               href="#"
//               onClick={() => setShowProfile(true)}
//             >
//               <FaUser className="profile-icon" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {view === "tracks" && (
//         <div className="container">
//           <div className={`row ${isLoading ? "" : "d-none"}`}>
//             <div className="col-12 py-5 text-center">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {tracks.map((element) => {
//               return (
//                 <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                   <div className="card">
//                     <img
//                       src={element.album.images[1].url}
//                       className="card-img-top"
//                       alt="..."
//                       onClick={() => setFullscreenTrack(element)}
//                     />
//                     <div className="card-body">
//                       <h5
//                         className="card-title"
//                         onClick={() => setFullscreenTrack(element)}
//                       >
//                         {element.name}
//                       </h5>
//                       <p className="card-text">
//                         Artist: {element.album.artists[0].name}
//                       </p>
//                       <p className="card-text">
//                         Release Date: {element.album.release_date}
//                       </p>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handlePlay(element)}
//                       >
//                         Play
//                       </button>
//                       <div className="dropdown mt-2">
//                         <button
//                           className="btn btn-secondary dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ...
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby="dropdownMenuButton"
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() => setSelectedTrack(element)}
//                             >
//                               Select Track
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {view === "playlists" && (
//         <Playlist
//           playlists={playlists}
//           addTrackToPlaylist={addTrackToPlaylist}
//           createNewPlaylist={createNewPlaylist}
//         />
//       )}
//       {fullscreenTrack && (
//         <Modal
//           track={fullscreenTrack}
//           onClose={() => setFullscreenTrack(null)}
//         />
//       )}
//       <Player track={playingTrack} onClose={() => setPlayingTrack(null)} />
//       {showProfile && (
//         <Profile
//           user={user}
//           onClose={() => setShowProfile(false)}
//           onUpdateProfile={handleUpdateProfile}
//         />
//       )}
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal";
// import Profile from "./Profile";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [showProfile, setShowProfile] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   // Mock user data
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     gender: "male",
//     musicType: "Rock",
//     details: "Music enthusiast",
//     profileImage: null,
//   });

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <Router>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Music App
//           </Link>
//           <div className="navbar-nav">
//             <Link className="nav-link" to="/" onClick={() => setView("tracks")}>
//               TRACKS
//             </Link>
//             <Link
//               className="nav-link"
//               to="/"
//               onClick={() => setView("playlists")}
//             >
//               PLAYLISTS
//             </Link>
//           </div>
//           <div className="collapse navbar-collapse d-flex justify-content-center">
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <Link className="nav-link" to="/profile">
//               <FaUser className="profile-icon" />
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {view === "tracks" && (
//                 <div className="container">
//                   <div className={`row ${isLoading ? "" : "d-none"}`}>
//                     <div className="col-12 py-5 text-center">
//                       <div
//                         className="spinner-border text-primary"
//                         role="status"
//                       >
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     {tracks.map((element) => (
//                       <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                         <div className="card">
//                           <img
//                             src={element.album.images[1].url}
//                             className="card-img-top"
//                             alt="..."
//                             onClick={() => setFullscreenTrack(element)}
//                           />
//                           <div className="card-body">
//                             <h5
//                               className="card-title"
//                               onClick={() => setFullscreenTrack(element)}
//                             >
//                               {element.name}
//                             </h5>
//                             <p className="card-text">
//                               Artist: {element.album.artists[0].name}
//                             </p>
//                             <p className="card-text">
//                               Release Date: {element.album.release_date}
//                             </p>
//                             <button
//                               className="btn btn-primary"
//                               onClick={() => handlePlay(element)}
//                             >
//                               Play
//                             </button>
//                             <div className="dropdown mt-2">
//                               <button
//                                 className="btn btn-secondary dropdown-toggle"
//                                 type="button"
//                                 id="dropdownMenuButton"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 ...
//                               </button>
//                               <ul
//                                 className="dropdown-menu"
//                                 aria-labelledby="dropdownMenuButton"
//                               >
//                                 <li>
//                                   <button
//                                     className="dropdown-item"
//                                     onClick={() => setSelectedTrack(element)}
//                                   >
//                                     Select Track
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {view === "playlists" && (
//                 <Playlist
//                   playlists={playlists}
//                   addTrackToPlaylist={addTrackToPlaylist}
//                   createNewPlaylist={createNewPlaylist}
//                 />
//               )}
//               {fullscreenTrack && (
//                 <Modal
//                   track={fullscreenTrack}
//                   onClose={() => setFullscreenTrack(null)}
//                 />
//               )}
//               <Player
//                 track={playingTrack}
//                 onClose={() => setPlayingTrack(null)}
//               />
//             </>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <Profile
//               user={user}
//               onClose={() => setShowProfile(false)}
//               onUpdateProfile={handleUpdateProfile}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal";
// import Profile from "./Profile";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [showProfile, setShowProfile] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);

//   // Mock user data
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     musicType: "",
//     details: "",
//     profileImage: null,
//   });

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <Router>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Music App
//           </Link>
//           <div className="navbar-nav">
//             <Link className="nav-link" to="/" onClick={() => setView("tracks")}>
//               TRACKS
//             </Link>
//             <Link
//               className="nav-link"
//               to="/"
//               onClick={() => setView("playlists")}
//             >
//               PLAYLISTS
//             </Link>
//           </div>
//           <div className="collapse navbar-collapse d-flex justify-content-center">
//             <input
//               value={keyword}
//               onChange={(event) => {
//                 setKeyword(event.target.value);
//               }}
//               onKeyPress={handleSearchKeyPress}
//               className="form-control me-2 w-75"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               onClick={getTracks}
//               className="btn btn-outline-success me-2"
//             >
//               Search
//             </button>
//           </div>
//           <div className="navbar-nav ms-auto">
//             <Link className="nav-link" to="/profile">
//               <FaUser className="profile-icon" />
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {view === "tracks" && (
//                 <div className="container">
//                   <div className={`row ${isLoading ? "" : "d-none"}`}>
//                     <div className="col-12 py-5 text-center">
//                       <div
//                         className="spinner-border text-primary"
//                         role="status"
//                       >
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     {tracks.map((element) => (
//                       <div key={element.id} className="col-lg-3 col-md-6 py-2">
//                         <div className="card">
//                           <img
//                             src={element.album.images[1].url}
//                             className="card-img-top"
//                             alt="..."
//                             onClick={() => setFullscreenTrack(element)}
//                           />
//                           <div className="card-body">
//                             <h5
//                               className="card-title"
//                               onClick={() => setFullscreenTrack(element)}
//                             >
//                               {element.name}
//                             </h5>
//                             <p className="card-text">
//                               Artist: {element.album.artists[0].name}
//                             </p>
//                             <p className="card-text">
//                               Release Date: {element.album.release_date}
//                             </p>
//                             <button
//                               className="btn btn-primary"
//                               onClick={() => handlePlay(element)}
//                             >
//                               Play
//                             </button>
//                             <div className="dropdown mt-2">
//                               <button
//                                 className="btn btn-secondary dropdown-toggle"
//                                 type="button"
//                                 id="dropdownMenuButton"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 ...
//                               </button>
//                               <ul
//                                 className="dropdown-menu"
//                                 aria-labelledby="dropdownMenuButton"
//                               >
//                                 <li>
//                                   <button
//                                     className="dropdown-item"
//                                     onClick={() => setSelectedTrack(element)}
//                                   >
//                                     Select Track
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {view === "playlists" && (
//                 <Playlist
//                   playlists={playlists}
//                   addTrackToPlaylist={addTrackToPlaylist}
//                   createNewPlaylist={createNewPlaylist}
//                 />
//               )}
//               {fullscreenTrack && (
//                 <Modal
//                   track={fullscreenTrack}
//                   onClose={() => setFullscreenTrack(null)}
//                   onPlay={handlePlay}
//                 />
//               )}
//               <Player
//                 track={playingTrack}
//                 onClose={() => setPlayingTrack(null)}
//               />
//             </>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <Profile
//               user={user}
//               onClose={() => setShowProfile(false)}
//               onUpdateProfile={handleUpdateProfile}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal";
// import Profile from "./Profile";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";
// import Animation from "./Animation"; // Import the Animation component

// function App() {
//   const [showProfile, setShowProfile] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);
//   const [showAnimation, setShowAnimation] = useState(true);

//   // Mock user data
//   const [user, setUser] = useState({
//     name: null,
//     email: null,
//     gender: null,
//     musicType: null,
//     details: null,
//     profileImage: null,
//   });

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shubhuguy/spotify/MRIvSmPpQDjPuOzp/search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   const handleAnimationFinish = () => {
//     setShowAnimation(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <Router>
//       {showAnimation ? (
//         <Animation onFinish={handleAnimationFinish} />
//       ) : (
//         <>
//           <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/">
//                 VoDo Music
//               </Link>
//               <div className="navbar-nav">
//                 <Link
//                   className="nav-link"
//                   to="/"
//                   onClick={() => setView("tracks")}
//                 >
//                   TRACKS
//                 </Link>
//                 <Link
//                   className="nav-link"
//                   to="/"
//                   onClick={() => setView("playlists")}
//                 >
//                   PLAYLISTS
//                 </Link>
//               </div>
//               <div className="collapse navbar-collapse d-flex justify-content-center">
//                 <input
//                   value={keyword}
//                   onChange={(event) => {
//                     setKeyword(event.target.value);
//                   }}
//                   onKeyPress={handleSearchKeyPress}
//                   className="form-control me-2 w-75"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button
//                   onClick={getTracks}
//                   className="btn btn-outline-success me-2"
//                 >
//                   SEARCH
//                 </button>
//               </div>
//               <div className="navbar-nav ms-auto">
//                 <Link className="nav-link" to="/profile">
//                   <FaUser className="profile-icon" />
//                 </Link>
//               </div>
//             </div>
//           </nav>

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   {view === "tracks" && (
//                     <div className="container">
//                       <div className={`row ${isLoading ? "" : "d-none"}`}>
//                         <div className="col-12 py-5 text-center">
//                           <div
//                             className="spinner-border text-primary"
//                             role="status"
//                           >
//                             <span className="visually-hidden">Loading...</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         {tracks.map((element) => (
//                           <div
//                             key={element.id}
//                             className="col-lg-3 col-md-6 py-2"
//                           >
//                             <div className="card">
//                               <img
//                                 src={element.album.images[1].url}
//                                 className="card-img-top"
//                                 alt="..."
//                                 onClick={() => setFullscreenTrack(element)}
//                               />
//                               <div className="card-body">
//                                 <h5
//                                   className="card-title"
//                                   onClick={() => setFullscreenTrack(element)}
//                                 >
//                                   {element.name}
//                                 </h5>
//                                 <p className="card-text">
//                                   Artist: {element.album.artists[0].name}
//                                 </p>
//                                 <p className="card-text">
//                                   Release Date: {element.album.release_date}
//                                 </p>
//                                 <button
//                                   className="btn btn-primary"
//                                   onClick={() => handlePlay(element)}
//                                 >
//                                   Play
//                                 </button>
//                                 <div className="dropdown mt-2">
//                                   <button
//                                     className="btn btn-secondary dropdown-toggle"
//                                     type="button"
//                                     id="dropdownMenuButton"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                   >
//                                     ...
//                                   </button>
//                                   <ul
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton"
//                                   >
//                                     <li>
//                                       <button
//                                         className="dropdown-item"
//                                         onClick={() =>
//                                           setSelectedTrack(element)
//                                         }
//                                       >
//                                         Select Track
//                                       </button>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                   {view === "playlists" && (
//                     <Playlist
//                       playlists={playlists}
//                       addTrackToPlaylist={addTrackToPlaylist}
//                       createNewPlaylist={createNewPlaylist}
//                     />
//                   )}
//                   {fullscreenTrack && (
//                     <Modal
//                       track={fullscreenTrack}
//                       onClose={() => setFullscreenTrack(null)}
//                       onPlay={handlePlay}
//                     />
//                   )}
//                   <Player
//                     track={playingTrack}
//                     onClose={() => setPlayingTrack(null)}
//                   />
//                 </>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <Profile
//                   user={user}
//                   onClose={() => setShowProfile(false)}
//                   onUpdateProfile={handleUpdateProfile}
//                 />
//               }
//             />
//           </Routes>
//         </>
//       )}
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Playlist from "./Playlist";
// import Player from "./Player";
// import Modal from "./Modal";
// import Profile from "./Profile";
// import { FaUser } from "react-icons/fa";
// import Login from "./Login";
// import Signup from "./Signup";
// import Animation from "./Animation"; // Import the Animation component

// function App() {
//   const [showProfile, setShowProfile] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [tracks, setTracks] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [view, setView] = useState("tracks");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [fullscreenTrack, setFullscreenTrack] = useState(null);
//   const [playingTrack, setPlayingTrack] = useState(null);
//   const [showAnimation, setShowAnimation] = useState(true);

//   // Mock user data
//   const [user, setUser] = useState({
//     name: null,
//     email: null,
//     gender: null,
//     musicType: null,
//     details: null,
//     profileImage: null,
//   });

//   const getTracks = async () => {
//     setIsLoading(true);
//     try {
//       let data = await fetch(
//         `https://v1.nocodeapi.com/shreyash26/spotify/WHpCIFxlVNIpqDyH
// /search?q=${
//           keyword === "" ? "trending" : keyword
//         }&type=track`
//       );
//       let convertData = await data.json();
//       setTracks(convertData.tracks.items);
//     } catch (error) {
//       console.error("Error fetching the tracks:", error);
//     }
//     setIsLoading(false);
//   };

//   const createNewPlaylist = (name) => {
//     if (name.trim() === "") return;
//     const newPlaylist = {
//       id: Date.now(),
//       name: name,
//       tracks: [],
//     };
//     setPlaylists([...playlists, newPlaylist]);
//   };

//   const addTrackToPlaylist = (playlistId) => {
//     if (!selectedTrack) return;
//     setPlaylists((prevPlaylists) =>
//       prevPlaylists.map((playlist) =>
//         playlist.id === playlistId
//           ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
//           : playlist
//       )
//     );
//     setSelectedTrack(null);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       getTracks();
//     }
//   }, [isAuthenticated]);

//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       getTracks();
//     }
//   };

//   const handlePlay = (track) => {
//     setPlayingTrack(track);
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleSignup = () => {
//     setIsSigningUp(false);
//   };

//   const switchToSignup = () => {
//     setIsSigningUp(true);
//   };

//   const switchToLogin = () => {
//     setIsSigningUp(false);
//   };

//   const handleUpdateProfile = (updatedUser) => {
//     setUser(updatedUser);
//   };

//   const handleAnimationFinish = () => {
//     setShowAnimation(false);
//   };

//   if (!isAuthenticated) {
//     return isSigningUp ? (
//       <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
//     ) : (
//       <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
//     );
//   }

//   return (
//     <Router>
//       {showAnimation ? (
//         <Animation onFinish={handleAnimationFinish} />
//       ) : (
//         <>
//           <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/">
//                 VoDo Music
//               </Link>
//               <div className="navbar-nav">
//                 <Link
//                   className="nav-link"
//                   to="/"
//                   onClick={() => setView("tracks")}
//                 >
//                   TRACKS
//                 </Link>
//                 <Link
//                   className="nav-link"
//                   to="/"
//                   onClick={() => setView("playlists")}
//                 >
//                   PLAYLISTS
//                 </Link>
//               </div>
//               <div className="collapse navbar-collapse d-flex justify-content-center">
//                 <input
//                   value={keyword}
//                   onChange={(event) => {
//                     setKeyword(event.target.value);
//                   }}
//                   onKeyPress={handleSearchKeyPress}
//                   className="form-control me-2 w-75"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button
//                   onClick={getTracks}
//                   className="btn btn-outline-success me-2"
//                 >
//                   SEARCH
//                 </button>
//               </div>
//               <div className="navbar-nav ms-auto">
//                 <Link className="nav-link" to="/profile">
//                   <FaUser className="profile-icon" />
//                 </Link>
//               </div>
//             </div>
//           </nav>

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   {view === "tracks" && (
//                     <div className="container">
//                       <div className={`row ${isLoading ? "" : "d-none"}`}>
//                         <div className="col-12 py-5 text-center">
//                           <div
//                             className="spinner-border text-primary"
//                             role="status"
//                           >
//                             <span className="visually-hidden">Loading...</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         {tracks.map((element) => (
//                           <div
//                             key={element.id}
//                             className="col-lg-3 col-md-6 py-2"
//                           >
//                             <div className="card">
//                               <img
//                                 src={element.album.images[1].url}
//                                 className="card-img-top"
//                                 alt="..."
//                                 onClick={() => setFullscreenTrack(element)}
//                               />
//                               <div className="card-body">
//                                 <h5
//                                   className="card-title"
//                                   onClick={() => setFullscreenTrack(element)}
//                                 >
//                                   {element.name}
//                                 </h5>
//                                 <p className="card-text">
//                                   Artist: {element.album.artists[0].name}
//                                 </p>
//                                 <p className="card-text">
//                                   Release Date: {element.album.release_date}
//                                 </p>
//                                 <button
//                                   className="btn btn-primary"
//                                   onClick={() => handlePlay(element)}
//                                 >
//                                   Play
//                                 </button>
//                                 <div className="dropdown mt-2">
//                                   <button
//                                     className="btn btn-secondary dropdown-toggle"
//                                     type="button"
//                                     id="dropdownMenuButton"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                   >
//                                     ...
//                                   </button>
//                                   <ul
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton"
//                                   >
//                                     <li>
//                                       <button
//                                         className="dropdown-item"
//                                         onClick={() =>
//                                           setSelectedTrack(element)
//                                         }
//                                       >
//                                         Select Track
//                                       </button>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                   {view === "playlists" && (
//                     <Playlist
//                       playlists={playlists}
//                       addTrackToPlaylist={addTrackToPlaylist}
//                       createNewPlaylist={createNewPlaylist}
//                       onPlay={handlePlay} // Pass handlePlay function
//                     />
//                   )}
//                   {fullscreenTrack && (
//                     <Modal
//                       track={fullscreenTrack}
//                       onClose={() => setFullscreenTrack(null)}
//                       onPlay={handlePlay}
//                     />
//                   )}
//                   <Player
//                     track={playingTrack}
//                     onClose={() => setPlayingTrack(null)}
//                   />
//                 </>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <Profile
//                   user={user}
//                   onClose={() => setShowProfile(false)}
//                   onUpdateProfile={handleUpdateProfile}
//                 />
//               }
//             />
//           </Routes>
//         </>
//       )}
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Playlist from "./Playlist";
import Player from "./Player";
import Modal from "./Modal";
import Profile from "./Profile";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import Login from "./Login";
import Signup from "./Signup";
import Animation from "./Animation"; // Import the Animation component

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("tracks");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [fullscreenTrack, setFullscreenTrack] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [showAnimation, setShowAnimation] = useState(true);

  // Mock user data
  const [user, setUser] = useState({
    name: null,
    email: null,
    gender: null,
    musicType: null,
    details: null,
    profileImage: null,
  });

  const getTracks = async () => {
    setIsLoading(true);
    try {
      let data = await fetch(
        `https://v1.nocodeapi.com/shreyash26/spotify/WHpCIFxlVNIpqDyH
/search?q=${
          keyword === "" ? "trending" : keyword
        }&type=track`
      );
      let convertData = await data.json();
      setTracks(convertData.tracks.items);
    } catch (error) {
      console.error("Error fetching the tracks:", error);
    }
    setIsLoading(false);
  };

  const createNewPlaylist = (name) => {
    if (name.trim() === "") return;
    const newPlaylist = {
      id: Date.now(),
      name: name,
      tracks: [],
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const addTrackToPlaylist = (playlistId) => {
    if (!selectedTrack) return;
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, tracks: [...playlist.tracks, selectedTrack] }
          : playlist
      )
    );
    setSelectedTrack(null);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getTracks();
    }
  }, [isAuthenticated]);

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      getTracks();
    }
  };

  const handlePlay = (track) => {
    setPlayingTrack(track);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsSigningUp(false);
  };

  const switchToSignup = () => {
    setIsSigningUp(true);
  };

  const switchToLogin = () => {
    setIsSigningUp(false);
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  const handleAnimationFinish = () => {
    setShowAnimation(false);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({
      name: null,
      email: null,
      gender: null,
      musicType: null,
      details: null,
      profileImage: null,
    });
  };

  if (!isAuthenticated) {
    return isSigningUp ? (
      <Signup onSignup={handleSignup} switchToLogin={switchToLogin} />
    ) : (
      <Login onLogin={handleLogin} switchToSignup={switchToSignup} />
    );
  }

  return (
    <Router>
      {showAnimation ? (
        <Animation onFinish={handleAnimationFinish} />
      ) : (
        <>
          <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                VoDo Music
              </Link>
              <div className="navbar-nav">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setView("tracks")}
                >
                  TRACKS
                </Link>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setView("playlists")}
                >
                  PLAYLISTS
                </Link>
              </div>
              <div className="collapse navbar-collapse d-flex justify-content-center">
                <input
                  value={keyword}
                  onChange={(event) => {
                    setKeyword(event.target.value);
                  }}
                  onKeyPress={handleSearchKeyPress}
                  className="form-control me-2 w-75"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  onClick={getTracks}
                  className="btn btn-outline-success me-2"
                >
                  SEARCH
                </button>
              </div>
              <div className="navbar-nav ms-auto d-flex align-items-center">
                <Link className="nav-link" to="/profile">
                  <FaUser className="profile-icon" />
                </Link>
                <FaSignOutAlt
                  className="logout-icon ms-3"
                  onClick={handleLogout}
                  style={{ cursor: "pointer", color: "white" }}
                  title="Logout"
                />
              </div>
            </div>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {view === "tracks" && (
                    <div className="container">
                      <div className={`row ${isLoading ? "" : "d-none"}`}>
                        <div className="col-12 py-5 text-center">
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {tracks.map((element) => (
                          <div
                            key={element.id}
                            className="col-lg-3 col-md-6 py-2"
                          >
                            <div className="card">
                              <img
                                src={element.album.images[1].url}
                                className="card-img-top"
                                alt="..."
                                onClick={() => setFullscreenTrack(element)}
                              />
                              <div className="card-body">
                                <h5
                                  className="card-title"
                                  onClick={() => setFullscreenTrack(element)}
                                >
                                  {element.name}
                                </h5>
                                <p className="card-text">
                                  Artist: {element.album.artists[0].name}
                                </p>
                                <p className="card-text">
                                  Release Date: {element.album.release_date}
                                </p>
                                <button
                                  className="btn btn-primary"
                                  onClick={() => handlePlay(element)}
                                >
                                  Play
                                </button>
                                <div className="dropdown mt-2">
                                  <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    ...
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() =>
                                          setSelectedTrack(element)
                                        }
                                      >
                                        Select Track
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {view === "playlists" && (
                    <Playlist
                      playlists={playlists}
                      addTrackToPlaylist={addTrackToPlaylist}
                      createNewPlaylist={createNewPlaylist}
                      onPlay={handlePlay} // Pass handlePlay function
                    />
                  )}
                  {fullscreenTrack && (
                    <Modal
                      track={fullscreenTrack}
                      onClose={() => setFullscreenTrack(null)}
                      onPlay={handlePlay}
                    />
                  )}
                  <Player
                    track={playingTrack}
                    onClose={() => setPlayingTrack(null)}
                  />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  user={user}
                  onClose={() => setShowProfile(false)}
                  onUpdateProfile={handleUpdateProfile}
                />
              }
            />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;

