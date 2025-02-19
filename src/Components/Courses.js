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
    <div className="container mt-5 pt-5">
      <h1>
        Our <span className="text-danger">Courses</span>
      </h1>
      <hr />
      <div className="row">
        {data.length > 0 ? (
          data.map((course) => <Card key={course.id} course={course} />)
        ) : (
          <p className="text-muted">Loading courses...</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
