import axios from "axios";
import React, { useState, useEffect } from "react";

const NewBatches = () => {
  const [Batches, setBatches] = useState([]);
  const newBatUrl = "https://hit-backend.onrender.com/batches";


  // to get the data
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
    // rendering the data from setBatches
    <div className="container mt-5 pt-5">
     <strong><h2 style={{wordSpacing:"30px", letterSpacing:"5px", color:"gray"}}>New Batches </h2></strong> 
     <hr></hr>
      <table
        className="table table-striped"
        style={{ height: "40px", textAlign: "center" }}
      >
        <thead
          style={{
            backgroundColor: "black",
            color: "white",
            height: "40px",
            textAlign: "center",
          }}
        >
          <th>Course Name</th>
          <th>Duration</th>
          <th>Timings</th>
          <th>Date</th>
          <th>Trainer</th>
          {/* <th>Register</th> */}
        </thead>
        <tbody>
          {Batches?.map((a) => {
            return (
              <tr key={a.id}>
                <td>{a.course}</td>
                <td>{a.duration} Days</td>
                <td>{a.timing}</td>
                <td>{a.date}</td>
                <td>Mr. {a.trainer}</td>
                {/* <p style={{margin:"0px"}}><button type="button" class="btn btn-outline-success" style={{paddingBottom:"11px"}}>Register for demo</button></p> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NewBatches;
