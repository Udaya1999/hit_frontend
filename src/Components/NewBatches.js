import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewBatches = () => {
  const [Batches, setBatches] = useState([]);
  const newBatUrl = "https://hit-backend.onrender.com/batches";

  // Fetch data
  useEffect(() => {
    axios
      .get(newBatUrl)
      .then((res) => {
        setBatches(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="container mt-5 pt-5">
      {/* Title */}
      <h2 className="text-center text-uppercase fw-bold mb-4" 
          style={{ letterSpacing: "2px", color: "#0D3B66" }}>
        <span style={{ color: "#F4A261" }}>Upcoming</span> Batches
      </h2>
      <hr className="border-3 border-primary" />

      {/* Responsive Table */}
      <div className="table-responsive">
        <table className="table table-striped text-center shadow-lg"
               style={{ borderRadius: "10px", overflow: "hidden" }}>
          <thead style={{ backgroundColor: "#0D3B66", color: "white" }}>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Timings</th>
              <th>Date</th>
              <th>Trainer</th>
            </tr>
          </thead>
          <tbody>
            {Batches.length > 0 ? (
              Batches.map((batch) => (
                <tr key={batch.id} className="fw-semibold"
                    style={{ backgroundColor: "#E8F1F2", color: "#0D3B66" }}>
                  <td className="fw-bold">{batch.course}</td>
                  <td>{batch.duration} Days</td>
                  <td>{batch.timing}</td>
                  <td>{batch.date}</td>
                  <td style={{ color: "#E76F51" }}>Mr. {batch.trainer}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-danger fw-bold">
                  No Batches Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewBatches;
