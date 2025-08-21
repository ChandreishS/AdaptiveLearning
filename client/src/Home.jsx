// Home.jsx
import React, { useState } from "react";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: white;
        }
        #sidebar {
          min-width: 250px;
          max-width: 250px;
          min-height: 100vh;
          background: #1f2937;
          color: white;
          transition: all 0.3s;
        }
        #sidebar.collapsed {
          min-width: 60px;
          max-width: 60px;
          overflow-x: hidden;
        }
        #sidebar .nav-link {
          color: #d1d5db;
        }
        #sidebar .nav-link:hover {
          background-color: #4b5563;
          color: white;
        }
        #sidebar .nav-link svg {
          margin-right: 10px;
          vertical-align: middle;
        }
        #sidebar.collapsed .nav-link span {
          display: none;
        }
        #content {
          transition: margin-left 0.3s;
          margin-left: 250px;
        }
        #content.collapsed {
          margin-left: 60px;
        }
        .calendar-day {
          cursor: pointer;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
        }
        .calendar-day:hover {
          background-color: #e5e7eb;
        }
        .calendar-day.today {
          background-color: #0d6efd;
          color: white;
        }
        .calendar-day.event {
          position: relative;
        }
        .calendar-day.event::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background-color: #0d6efd;
          border-radius: 50%;
        }
      `}</style>

      <div className="d-flex">
        {/* Sidebar */}
        <nav
          id="sidebar"
          className={`d-flex flex-column p-3 ${collapsed ? "collapsed" : ""}`}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0" id="sidebar-title">
              ConnectedX
            </h3>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setCollapsed(!collapsed)}
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
          </div>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-speedometer2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v4.793l3.146 3.147a.5.5 0 0 1-.708.708L8 9.707V4.5A.5.5 0 0 1 8 4z" />
                  <path
                    fillRule="evenodd"
                    d="M4.934 1.292a.5.5 0 0 1 .372.615A7 7 0 1 1 2 8a.5.5 0 0 1-1 0 8 8 0 1 0 3.306-6.934.5.5 0 0 1 .372-.615z"
                  />
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                  />
                </svg>
                <span>Teachers</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-journal-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 6.146a.5.5 0 0 0-.708 0L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z"
                  />
                  <path d="M3 1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
                <span>My Grades</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-left-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 3h10v8H4.414L3 12.414V3z" />
                  <path
                    fillRule="evenodd"
                    d="M2 2a1 1 0 0 0-1 1v11.793l2.853-2.853H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                  />
                </svg>
                <span>Messages</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                  <path d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5h-1A5.5 5.5 0 0 0 8 2.5v-1z" />
                </svg>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div
          id="content"
          className={`flex-grow-1 p-4 ${collapsed ? "collapsed" : ""}`}
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              {/* Replace with your logo image path */}
              <img
                src="src/assets/connected.png"
                alt="Logo"
                width="40"
                height="40"
                className="rounded-circle me-3"
              />
              <h1 className="h4 mb-0">
                Welcome to <strong>ConnectedX</strong>
              </h1>
            </div>
            <div className="d-flex align-items-center gap-3">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search"
                style={{ width: "200px" }}
              />
              <button className="btn btn-outline-secondary btn-sm" aria-label="Notifications">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bell"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 1.985-1.75H6.015A2 2 0 0 0 8 16zm.104-14.11a5.002 5.002 0 0 0-4.384 6.1c-.126.5-.223 1-.223 1.746v1l-1.35 1.35a.5.5 0 0 0 .707.707l1.343-1.343c.23.365.53.635.842.794.205.105.413.173.623.206a.5.5 0 0 0 .32.023.75.75 0 0 0 .31-.147c.48-.317.88-.89 1.137-1.659a.5.5 0 0 0-.25-.587l-1.5-1.5a2 2 0 0 1-.75-1.17z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="card border-primary">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 bg-primary text-white rounded-circle p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="card-title mb-0">Teachers</h5>
                    <p className="card-text display-6 fw-bold mb-0">10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-success">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 bg-success text-white rounded-circle p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-journal-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 6.146a.5.5 0 0 0-.708 0L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z"
                      />
                      <path d="M3 1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="card-title mb-0">My Grades</h5>
                    <p className="card-text display-6 fw-bold mb-0">A+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-warning">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 bg-warning text-white rounded-circle p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1l-8 5-8-5V4z" />
                      <path d="M0 5.5v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6l-8 5-8-5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="card-title mb-0">Messages</h5>
                    <p className="card-text display-6 fw-bold mb-0">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two columns below summary cards */}
          <div className="row g-4">
            {/* Left: Calendar + Connections */}
            <div className="col-lg-7">
              {/* Calendar */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Calendar</h5>
                </div>
                <div className="card-body">
                  <div className="row text-center gy-2">
                    <div className="col calendar-day">Sun</div>
                    <div className="col calendar-day">Mon</div>
                    <div className="col calendar-day">Tue</div>
                    <div className="col calendar-day">Wed</div>
                    <div className="col calendar-day">Thu</div>
                    <div className="col calendar-day">Fri</div>
                    <div className="col calendar-day">Sat</div>
                  </div>
                  <div className="row text-center gy-2 mt-1">
                    <div className="col calendar-day text-muted">28</div>
                    <div className="col calendar-day text-muted">29</div>
                    <div className="col calendar-day text-muted">30</div>
                    <div className="col calendar-day">1</div>
                    <div className="col calendar-day event">2</div>
                    <div className="col calendar-day">3</div>
                    <div className="col calendar-day">4</div>
                  </div>
                  <div className="row text-center gy-2 mt-1">
                    <div className="col calendar-day">5</div>
                    <div className="col calendar-day today">6</div>
                    <div className="col calendar-day">7</div>
                    <div className="col calendar-day">8</div>
                    <div className="col calendar-day event">9</div>
                    <div className="col calendar-day">10</div>
                    <div className="col calendar-day">11</div>
                  </div>
                  {/* Add more weeks if needed */}
                </div>
              </div>

              {/* Connections */}
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Connections</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Anna"
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                      <div className="flex-grow-1">
                        <div>
                          <strong>Anna Johnson</strong>
                        </div>
                        <small className="text-muted">Online</small>
                      </div>
                      <button className="btn btn-sm btn-primary">Message</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Mark"
                        className="rounded-circle me-3"
                        width="40"
                        height="40"
                      />
                      <div className="flex-grow-1">
                        <div>
                          <strong>Mark Williams</strong>
                        </div>
                        <small className="text-muted">Offline</small>
                      </div>
                      <button className="btn btn-sm btn-secondary" disabled>
                        Message
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Chat & To Do List */}
            <div className="col-lg-5">
              {/* Chat */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Chat</h5>
                </div>
                <div className="card-body" style={{ height: "250px", overflowY: "auto" }}>
                  <div className="mb-3">
                    <div><strong>Anna Johnson</strong> <small className="text-muted">10:15 AM</small></div>
                    <p className="mb-1">Hey! How are you doing?</p>
                  </div>
                  <div className="mb-3 text-end">
                    <div><strong>You</strong> <small className="text-muted">10:17 AM</small></div>
                    <p className="mb-1 bg-primary text-white d-inline-block p-2 rounded">I'm good, thanks!</p>
                  </div>
                </div>
                <div className="card-footer">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Type a message..."
                    aria-label="Chat message input"
                  />
                </div>
              </div>

              {/* To Do List */}
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">To Do List</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Finish React project
                    <span className="badge bg-primary rounded-pill">High</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Email teacher
                    <span className="badge bg-secondary rounded-pill">Medium</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Prepare presentation
                    <span className="badge bg-success rounded-pill">Low</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
