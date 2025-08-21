import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', {
        name,
        email,
        studentId,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div
        className="bg-white p-4 rounded shadow d-flex flex-wrap"
        style={{
          width: '90%',
          maxWidth: '1000px',
          minHeight: '550px',
          border: '2px solid #ccc',
        }}
      >
        {/* Left side image */}
        <div
          style={{
            flex: 1,
            marginRight: '20px',
            border: '3px solidrgb(7, 7, 7)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(126, 124, 124, 0.2)',
          }}
        >
          <img
            src="src/assets/sign_up.jpg"
            alt="Signup"
            style={{
              width: '90%',
              height: '90%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Right side form */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div className="text-center mb-3">
            <img
              src="src/assets/connected.png"
              alt="Logo"
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
          </div>

          <h2 className="text-center mb-4">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                autoComplete="off"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                autoComplete="off"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="studentId" className="form-label">
                <strong>Student ID</strong>
              </label>
              <input
                type="text"
                id="studentId"
                placeholder="Enter Student ID"
                className="form-control"
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-3 mb-0">Already have an account?</p>
          <Link
            to="/login"
            className="btn btn-outline-secondary w-100 mt-2 text-decoration-none"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
