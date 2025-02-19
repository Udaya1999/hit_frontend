import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Dashbord/Card";

const Courses = () => {
  const [data, setData] = useState([]);
  const courseUrl = "https://hit-backend.onrender.com/courses";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(courseUrl);
        setData(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        background: "#121212",
        minHeight: "100vh",
        padding: "100px 20px 50px", // Increased top padding to prevent overlap
      }}
    >
      {/* Title Section */}
      <h2
        className="text-uppercase fw-bold text-center mb-4"
        style={{
          color: "#F4A261",
          textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
          letterSpacing: "2px",
          marginBottom: "20px", // Added margin to separate from content
        }}
      >
        Our <span style={{ color: "#E9C46A" }}>Courses</span>
      </h2>

      <hr
        className="border-3"
        style={{
          borderColor: "#F4A261",
          width: "60%",
          marginBottom: "30px", // More space between title and cards
        }}
      />

      {/* Courses Grid */}
      <div className="container">
        <div className="row justify-content-center">
          {data.length > 0 ? (
            data.map((course) => <Card key={course.id} course={course} />)
          ) : (
            <p className="text-muted text-center fs-5">Loading courses...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
