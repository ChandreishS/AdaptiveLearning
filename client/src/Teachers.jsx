import React from "react";

function Grades() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div
        className="bg-white p-4 rounded shadow"
        style={{
          width: "90%",
          maxWidth: "700px",
          minHeight: "350px",
          border: "2px solid #ccc",
        }}
      >
        <div className="text-center mb-3">
          <img
            src="src/assets/grades_icon.png"
            alt="Grades"
            style={{ width: "64px", height: "64px", objectFit: "contain" }}
          />
        </div>
        <h2 className="text-center mb-4">My Grades</h2>
        <p className="text-center mb-3">
          Here you can see your grade breakdown and performance details.
        </p>
        {/* Add your grade results or charts here */}
      </div>
    </div>
  );
}

export default Grades;
