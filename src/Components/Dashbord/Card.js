import React from "react";

const Card = ({ course }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card shadow-lg border-0"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          borderRadius: "15px",
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Course Image */}
        <img
          src={course.image || "https://via.placeholder.com/300"}
          alt={course.courseName || "Course Image"}
          className="card-img-top"
          style={{
            height: "180px",
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        />

        {/* Card Body */}
        <div className="card-body text-center">
          <h5
            className="card-title fw-bold"
            style={{
              color: "#F4A261",
              minHeight: "50px",
              fontSize: "1.1rem",
              wordWrap: "break-word",
            }}
          >
            {course.courseName || "Untitled Course"}
          </h5>

          <a href="#" className="btn btn-outline-warning btn-sm">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
