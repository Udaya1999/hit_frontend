import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewEnquiries = () => {
  const [data, setData] = useState([]);
  const enquiryUrl = "https://hit-backend.onrender.com/enquiries";

  // Fetch Enquiries
  const fetchEnquiries = () => {
    axios
      .get(enquiryUrl)
      .then((res) => setData(res.data))
      .catch(() => toast.error("⚠️ Failed to fetch enquiries!"));
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Delete Enquiry
  const deleteEnquiry = (id) => {
    axios
      .delete(`${enquiryUrl}/${id}`)
      .then(() => {
        toast.error("🗑️ Enquiry deleted successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        fetchEnquiries(); // Refresh list after deletion
      })
      .catch(() => {
        toast.error("⚠️ Failed to delete enquiry!", {
          position: "top-right",
          theme: "colored",
        });
      });
  };

  return (
    <div className="container mt-5 pt-4">
      {/* Heading */}
      <h2
        className="text-center mb-4 fw-bold"
        style={{
          fontSize: "2rem",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "3px solid #007bff",
          display: "inline-block",
          paddingBottom: "5px",
        }}
      >
        📩 Customer Enquiries
      </h2>

      {/* Table */}
      <div className="table-responsive">
        <table
          className="table table-hover shadow-sm border rounded"
          style={{
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          <thead className="bg-dark text-white text-center">
            <tr>
              <th style={{ padding: "12px" }}>Delete</th>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Phone</th>
              <th style={{ padding: "12px" }}>Subject</th>
              <th style={{ padding: "12px" }}>Message</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.length > 0 ? (
              data.map((a) => (
                <tr key={a.id} className="align-middle">
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm px-3"
                      onClick={() => deleteEnquiry(a.id)}
                    >
                      🗑️
                    </button>
                  </td>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.phone}</td>
                  <td>{a.subject}</td>
                  <td>{a.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No enquiries available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ViewEnquiries;
