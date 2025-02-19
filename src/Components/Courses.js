import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Dashbord/Card";

const Courses = () => {
  const [data, setData] = useState([]);
  const courseUrl = "https://hit-backend.onrender.com/courses";

  useEffect(() => {
    axios
      .get(courseUrl)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [ ]);

  return (
    <>
      <div className="container mt-5 pt-5 ">
        <h1>
          Our <span className="text-danger">Courses</span>
        </h1>
        <hr></hr>
        {/* <div className="row"></div> */}
        <div className="row">
          {data.map((q) => (
            <Card course={q} />
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Courses;
