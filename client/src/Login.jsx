import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "1000px",
          overflow: "hidden",
        }}
      >
        {/* Left Side Image */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            borderRight: "2px solid #eee",
          }}
        >
          <img
            src="src/assets/login.jpg"
            alt="Login"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRight: "2px solid #ccc",
            }}
          />
        </div>

        {/* Right Side Form */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "30px 25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src="src/assets/connected.png"
              alt="Logo"
              style={{ width: "70px", height: "70px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "26px", color: "#222", marginBottom: "20px" }}>
              Login
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#0366ff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Login
            </button>
          </form>

          <p style={{ margin: "20px 0 10px", fontSize: "14px", textAlign: "center" }}>
            Don't have an account?
          </p>
          <Link
            to="/register"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              textDecoration: "none",
              color: "#333",
              borderRadius: "6px",
              fontSize: "16px",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
