import axios from "axios";
import React, { useState } from "react";

const AddCourses = () => {
  const [image, setImage] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [trainer, setTrainer] = useState("");

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
        console.log("Courses Data Added");
        setCourseName("");
        setDescription("");
        setImage("");
        setTrainer("");
        alert("Course Added Successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center text-warning">Add Course Details</h2>
            <form onSubmit={uploadCourseData}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Course Name"
                value={courseName}
                onChange={(q) => setCourseName(q.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Image URL"
                value={image}
                onChange={(q) => setImage(q.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Course Description"
                value={description}
                onChange={(q) => setDescription(q.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Trainer Name"
                value={trainer}
                onChange={(q) => setTrainer(q.target.value)}
                required
              />
              <button type="submit" className="btn btn-success w-100">
                Add Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
