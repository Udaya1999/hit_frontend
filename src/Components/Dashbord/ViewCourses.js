import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCourses = () => {
  const [courses, setCources] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [image, setimage] = useState("");
  const [description, setDescription] = useState("");
  const [trainer, setTrainer] = useState("");
  const [editedCourse, setEditedCourse] = useState({});
    const coursesUrl = "https://hit-backend.onrender.com/courses"

  const UpdateCourseDetails = (e) => {
    e.preventDefault();
    const { courseName, image, description, trainer, id } = editedCourse;

    axios
      .put(`coursesUrl/${id}`, editedCourse)
      .then((res) => {
        console.log(res.data);
        alert("Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletCourseDetails = (id) => {
    axios
      .delete(`coursesUrl/${id}`)
      .then(() => console.log("Deleted Course details"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(coursesUrl)
      .then((res) => {
        setCources(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editCourse = (a) => {
    setEditedCourse(a);
    // axios
    //   .get(`http://localhost:4000/courses/${id}`)
    //   .then((res) => {
    //     setCourseName(res.courseName);
    //     setimage(res.image);
    //     setDescription(res.description);
    //     setTrainer(res.trainer);
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-5">
      <table
        class="table table-striped text-center"
        style={{ padding: "150px", borderRadius: "5px" }}
      >
        <thead>
          <tr>
            <th scope="col">Courses</th>
            <th scope="col">Trainer</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
            <th scope="col"> Edit</th>
          </tr>
        </thead>
        <tbody>
          {console.log("hiiii", courses)}
          {courses.map((a) => {
            return (
              <tr key={a.id} scope="row">
                <td>{a.courseName}</td>
                <td>{a.trainer}</td>
                <td>{a.image}</td>
                <td>{a.description}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deletCourseDetails(a.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info"
                    data-bs-target="#124"
                    data-bs-toggle="modal"
                    onClick={() => editCourse(a)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="modal fade" id="124">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Update Course Details</h4>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={UpdateCourseDetails}>
                <input
                  type="text"
                  name="courseName"
                  className="form-control mb-3"
                  placeholder=" Enter Course Name "
                  value={editedCourse.courseName}
                  onChange={(q) =>
                    setEditedCourse({
                      ...editedCourse,
                      courseName: q.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="image"
                  className="form-control mb-3"
                  placeholder="Place image Here"
                  value={editedCourse?.image}
                  onChange={(q) =>
                    setEditedCourse({ ...editedCourse, image: q.target.value })
                  }
                />
                <input
                  type="text"
                  name="description"
                  className="form-control mb-3"
                  placeholder=" Description "
                  value={editedCourse?.description}
                  onChange={(q) =>
                    setEditedCourse({
                      ...editedCourse,
                      description: q.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="trainer"
                  className="form-control mb-3"
                  placeholder=" Trainer "
                  value={editedCourse.trainer}
                  onChange={(q) =>
                    setEditedCourse({
                      ...editedCourse,
                      trainer: q.target.value,
                    })
                  }
                />
                <input
                  type="submit"
                  value="Update Batch"
                  data-bs-dismiss="modal"
                  className="btn btn-danger"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourses;
