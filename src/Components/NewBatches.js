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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "#121212",
        padding: "50px 20px",
        minHeight: "80vh", // Adjusts height dynamically
        paddingBottom: "80px", // Prevents overlap with footer
      }}
    >
      <div
        className="p-4 shadow-lg rounded"
        style={{
          width: "90%",
          maxWidth: "1100px",
          background: "#1c1c1c",
          borderRadius: "12px",
          boxShadow: "0px 0px 15px rgba(255,255,255,0.1)",
        }}
      >
        {/* Title */}
        <h2
          className="text-center text-uppercase fw-bold mb-4"
          style={{
            letterSpacing: "2px",
            color: "#F4A261",
            textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
          }}
        >
          Upcoming <span style={{ color: "#E9C46A" }}>Batches</span>
        </h2>

        <hr className="border-3" style={{ borderColor: "#F4A261" }} />

        {/* Responsive Table */}
        <div className="table-responsive">
          <table
            className="table text-center shadow-lg"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              background: "#121212",
            }}
          >
            {/* Header */}
            <thead
              style={{
                backgroundColor: "#F4A261",
                color: "white",
                fontSize: "18px",
                textShadow: "0px 0px 5px rgba(255,255,255,0.3)",
              }}
            >
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
                  <tr
                    key={batch.id}
                    className="fw-semibold"
                    style={{
                      backgroundColor: "#1F1F1F",
                      color: "#E9C46A",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
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
    </div>
  );
};

export default NewBatches;
