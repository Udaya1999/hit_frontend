import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomRead = () => {
  const [batches, setBatches] = useState([]);
  const [editedBatch, setEditedBatch] = useState({});
  const batchesUrl = "https://hit-backend.onrender.com/batches";

  const fetchBatches = () => {
    axios
      .get(batchesUrl)
      .then((res) => setBatches(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  const updateBatch = (e) => {
    e.preventDefault();
    axios
      .put(`${batchesUrl}/${editedBatch.id}`, editedBatch)
      .then(() => {
        toast.success(`"${editedBatch.course}" updated successfully!`, {
          position: "top-right",
          autoClose: 3000,
        });

        fetchBatches();
      })
      .catch((err) => console.log(err));
  };

  const deleteBatch = (id, courseName) => {
    axios
      .delete(`${batchesUrl}/${id}`)
      .then(() => {
        toast.error(`"${courseName}" deleted successfully!`, {
          position: "top-right",
          autoClose: 3000,
        });

        // Reload the batch data after deletion
        fetchBatches();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-5">
      <h2
        className="text-center text-white p-3 rounded"
        style={{ background: "linear-gradient(90deg, #007bff, #6610f2)" }}
      >
        Upcoming Batches
      </h2>
      <div className="table-responsive">
        <table className="table table-hover text-center shadow-sm">
          <thead className="text-white" style={{ background: "#343a40" }}>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Timings</th>
              <th>Date</th>
              <th>Trainer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((bat, index) => (
              <tr
                key={bat.id}
                style={{ background: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}
              >
                <td className="fw-bold">{bat.course}</td>
                <td>{bat.duration} Days</td>
                <td>{bat.timing}</td>
                <td>{bat.date}</td>
                <td>{bat.trainer}</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editBatchModal"
                    onClick={() => setEditedBatch(bat)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteBatch(bat.id, bat.course)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing */}
      <div className="modal fade" id="editBatchModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h4 className="modal-title">Update Batch Details</h4>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateBatch}>
                <input
                  type="text"
                  name="course"
                  className="form-control mb-3"
                  placeholder="Enter Course Name"
                  value={editedBatch.course || ""}
                  onChange={(e) =>
                    setEditedBatch({ ...editedBatch, course: e.target.value })
                  }
                />
                <input
                  type="date"
                  name="date"
                  className="form-control mb-3"
                  value={editedBatch.date || ""}
                  onChange={(e) =>
                    setEditedBatch({ ...editedBatch, date: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="duration"
                  className="form-control mb-3"
                  placeholder="Course Duration"
                  value={editedBatch.duration || ""}
                  onChange={(e) =>
                    setEditedBatch({ ...editedBatch, duration: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="timing"
                  className="form-control mb-3"
                  placeholder="Timing"
                  value={editedBatch.timing || ""}
                  onChange={(e) =>
                    setEditedBatch({ ...editedBatch, timing: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="trainer"
                  className="form-control mb-3"
                  placeholder="Enter Trainer Name"
                  value={editedBatch.trainer || ""}
                  onChange={(e) =>
                    setEditedBatch({ ...editedBatch, trainer: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  data-bs-dismiss="modal"
                >
                  Update Batch
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

export default CustomRead;
