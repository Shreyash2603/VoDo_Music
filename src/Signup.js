import React, { useState } from "react";
import axios from "axios";

function Signup({ onSignup, switchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [musicType, setMusicType] = useState("");
  const [details, setDetails] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: !validateEmail(email) ? "Invalid email format" : "",
      password: !validatePassword(password)
        ? "Password must be at least 6 characters long"
        : "",
    };

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    try {
      const checkEmailResponse = await axios.post("http://localhost:5000/api/auth/check-email", { email });

      if (checkEmailResponse.data.exists) {
        setErrors({ ...errors, email: "Email already in use" });
        return;
      }

      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
        gender,
        musicType,
        details,
      });

      onSignup();
      switchToLogin();
    } catch (err) {
      console.error(err);
      setErrors({ ...errors, email: "Server error" });
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            required
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="musicType" className="form-label">
            Favorite Music Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="musicType"
            value={musicType}
            onChange={(e) => setMusicType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Additional Details
          </label>
          <textarea
            className="form-control"
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <p className="mt-3">
        Already have an account?{" "}
        <a href="#" onClick={switchToLogin}>
          Login here
        </a>
      </p>
    </div>
  );
}

export default Signup;
