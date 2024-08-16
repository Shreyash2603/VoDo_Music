import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css"; // Import the CSS file

function Profile({ userId, onClose }) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Email is read-only
  const [gender, setGender] = useState("");
  const [musicType, setMusicType] = useState("");
  const [details, setDetails] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    // Fetch user data from the backend
    axios.get(`/api/auth/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token to the headers
      },
    })
      .then(response => {
        const user = response.data;
        setName(user.name || "");
        setEmail(user.email || "");
        setGender(user.gender || "");
        setMusicType(user.musicType || "");
        setDetails(user.details || "");
        setProfileImage(user.profileImage || "");
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  const handleUpdate = () => {
    const updatedProfile = { name, gender, musicType, details, profileImage };

    axios.put(`/api/auth/profile/${userId}`, updatedProfile, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token to the headers
      },
    })
      .then(response => {
        setEditing(false);
        // Optionally, show a success message or perform other actions
      })
      .catch(error => {
        console.error("Error updating profile:", error);
      });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    navigate("/");
    onClose();
  };

  return (
    <div className="profile-modal-overlay" onClick={handleClose}>
      <div
        className="profile-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {editing ? (
          <div>
            <h2>Edit Profile</h2>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                id="profileImage"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image-preview"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                readOnly // Make email field read-only
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="musicType" className="form-label">
                Music Type
              </label>
              <input
                type="text"
                id="musicType"
                className="form-control"
                value={musicType}
                onChange={(e) => setMusicType(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                id="details"
                className="form-control"
                rows="3"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpdate}>
              Save Changes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h2>Profile</h2>
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image-preview"
              />
            )}
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
            <p>
              <strong>Music Type:</strong> {musicType}
            </p>
            <p>
              <strong>Details:</strong> {details}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
            <button className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
