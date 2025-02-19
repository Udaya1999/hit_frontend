import axios from "axios";
import React, { useEffect, useState } from "react";

const AddCourses = () => {
  const [image, setImage] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [trainer, setTrainer] = useState("");
  // const[details,setDetails]=useState([])
  //http://localhost:4000/courses

  const uploadCourseData = (e) => {
    e.preventDefault();
    axios
      .post("https://hit-backend.onrender.com/courses/", {
        image,
        courseName,
        description,
        trainer,
      })
      .then((res) => {
        console.log(" Courses Data Added");
        setCourseName("");
        setDescription("");
        setImage("");
        setTrainer("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-5">
      <form onSubmit={uploadCourseData}>
        <h3 style={{ color: "orange" }}>Add Course Details</h3>
        <input
          style={{
            width: "250px",
            height: "50px",
            border: "3px solid green",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Enter name of course"
          value={courseName}
          onChange={(q) => setCourseName(q.target.value)}
        ></input>
        <br></br>
        <br />
        <input
          style={{
            width: "250px",
            height: "50px",
            border: "3px solid green",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Enter Url here"
          value={image}
          onChange={(q) => setImage(q.target.value)}
        ></input>
        <br></br>
        <br />
        <input
          style={{
            width: "250px",
            height: "50px",
            border: "3px solid green",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="describe"
          value={description}
          onChange={(q) => setDescription(q.target.value)}
        ></input>
        <br></br>
        <br />
        <input
          style={{
            width: "250px",
            height: "50px",
            border: "3px solid green",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="name of trainer"
          value={trainer}
          onChange={(q) => setTrainer(q.target.value)}
        ></input>
        <br></br>
        <br />
        <input
          style={{
            width: "150px",
            height: "50px",
            border: "3px solid green",
            borderRadius: "5px",
          }}
          type="submit"
          placeholder="submit"
        ></input>
      </form>
    </div>
  );
};

export default AddCourses;
