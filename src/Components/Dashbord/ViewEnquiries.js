import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewEnquiries = () => {
  const [data, setData] = useState([]);

  const deleteEnquiri = (id) => {
    axios
      .delete(`https://hit-backend.onrender.com/enquiries/${id}`)
      .then(() => console.log("Deleted successfully"))
      .catch((err) => alert("error" + { err }));
  };

  useEffect(() => {
    axios
      .get("https://hit-backend.onrender.com/enquiries")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => alert(err));
  }, [data]);

  return (
    <div className="container mt-5 pt-5">
      <table
        className="table table-striped"
        style={{ height: "40px", textAlign: "center" }}
      >
        <thead
          style={{
            color: "white",
            height: "40px",
            textAlign: "center",
            backgroundClip: "black",
          }}
        >
          <tr>
            <th>Delete</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((a) => {
            return (
              <tr key={a.id}>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteEnquiri(a.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>{a.subject}</td>
                <td>{a.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEnquiries;
