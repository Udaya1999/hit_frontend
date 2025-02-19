import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editedCourse, setEditedCourse] = useState({});
  const coursesUrl = "https://hit-backend.onrender.com/courses";

  const fetchCourses = () => {
    axios
      .get(coursesUrl)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const updateCourseDetails = (e) => {
    e.preventDefault();
    axios
      .put(`${coursesUrl}/${editedCourse.id}`, editedCourse)
      .then(() => {
        toast.success(`"${editedCourse.courseName}" edited successfully!`, {
          position: "top-right",
          autoClose: 3000,
        });

        fetchCourses();
      })
      .catch((err) => console.log(err));
  };

  const deleteCourseDetails = (id, courseName) => {
    axios
      .delete(`${coursesUrl}/${id}`)
      .then(() => {
        toast.error(`"${courseName}" deleted successfully!`, {
          position: "top-right",
          autoClose: 3000,
        });

        fetchCourses();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center text-white p-3 rounded" style={{ background: "linear-gradient(90deg, #007bff, #6610f2)" }}>
        Course List
      </h2>
      <div className="table-responsive">
        <table className="table table-hover text-center shadow-sm">
          <thead className="text-white" style={{ background: "#343a40" }}>
            <tr>
              <th>Course Name</th>
              <th>Trainer</th>
              <th>Image</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((a, index) => (
              <tr key={a.id} style={{ background: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}>
                <td className="fw-bold">{a.courseName}</td>
                <td>{a.trainer}</td>
                <td>
                  <img src={a.image} alt="Course" width="80" className="rounded shadow-sm" />
                </td>
                <td>{a.description}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => deleteCourseDetails(a.id, a.courseName)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => setEditedCourse(a)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing */}
      <div className="modal fade" id="editModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h4 className="modal-title">Update Course Details</h4>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateCourseDetails}>
                <input
                  type="text"
                  name="courseName"
                  className="form-control mb-3"
                  placeholder="Enter Course Name"
                  value={editedCourse.courseName || ""}
                  onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })}
                />
                <input
                  type="text"
                  name="image"
                  className="form-control mb-3"
                  placeholder="Image URL"
                  value={editedCourse.image || ""}
                  onChange={(e) => setEditedCourse({ ...editedCourse, image: e.target.value })}
                />
                <input
                  type="text"
                  name="description"
                  className="form-control mb-3"
                  placeholder="Description"
                  value={editedCourse.description || ""}
                  onChange={(e) => setEditedCourse({ ...editedCourse, description: e.target.value })}
                />
                <input
                  type="text"
                  name="trainer"
                  className="form-control mb-3"
                  placeholder="Trainer"
                  value={editedCourse.trainer || ""}
                  onChange={(e) => setEditedCourse({ ...editedCourse, trainer: e.target.value })}
                />
                <button type="submit" className="btn btn-success w-100" data-bs-dismiss="modal">
                  Update Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default ViewCourses;
