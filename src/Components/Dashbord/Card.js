import React from "react";

const Card = ({ course }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card text-white shadow-lg border-0"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
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
            className="card-title text-danger fw-bold"
            style={{
              minHeight: "50px",
              wordWrap: "break-word",
              fontSize: "1.1rem",
            }}
          >
            {course.courseName || "Untitled Course"}
          </h5>
          {/* <p
            className="card-text text-light"
            style={{
              minHeight: "60px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              fontSize: "0.9rem",
            }}
          >
            {course.description || "No description available."}
          </p> */}
          <a href="#" className="btn btn-outline-danger btn-sm">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
