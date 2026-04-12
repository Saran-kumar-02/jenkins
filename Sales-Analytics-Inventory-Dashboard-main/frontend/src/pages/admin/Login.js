import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@srikannantraders.com" && password === "admin123") {
      alert("Login Successfull");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">SRI KANNAN TRADERS</h1>
      <p className="subtitle">Login Admin</p>

      <form onSubmit={handleLogin} className="login-form">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Admin Login</button>
      </form>

      <div className="links">
        <p>Customer Login</p>
        <p>Create Customer Account</p>
      </div>

      <div className="default">
        <p><strong>Default Admin Credentials:</strong></p>
        <p>Email: admin@srikannantraders.com</p>
        <p>Password: admin123</p>
      </div>
    </div>
  );
};

export default Login;
