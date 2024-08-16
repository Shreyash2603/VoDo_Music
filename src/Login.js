import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin, switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: !validateEmail(email) ? "Invalid email format" : "",
      password: !password ? "Password is required" : "",
    };

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    try {
      const checkEmailResponse = await axios.post("http://localhost:5000/api/auth/check-email", { email });

      if (checkEmailResponse && !checkEmailResponse.data.exists) {
        setErrors({ email: "Email not registered. ", password: "" });
        return;
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response && response.data) {
        onLogin(response.data.token);
      } else {
        setErrors({ ...errors, password: "Invalid email or password" });
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        setErrors({ ...errors, password: err.response.data.msg || "Invalid email or password" });
      } else {
        setErrors({ ...errors, password: "Network or server error" });
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
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
          {errors.email && <div className="text-danger">{errors.email} <a href="#" onClick={switchToSignup}>Register here</a></div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
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
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Don't have an account? <a href="#" onClick={switchToSignup}>Register here</a>
      </p>
    </div>
  );
}

export default Login;
