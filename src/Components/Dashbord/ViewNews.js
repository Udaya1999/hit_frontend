import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewNews = () => {
  const [news, setNews] = useState([]);
  const newsUrl = "https://hit-backend.onrender.com/news";

  // Fetch news function
  const fetchNews = () => {
    axios
      .get(newsUrl)
      .then((res) => setNews(res.data))
      .catch((err) => console.log("Error fetching news:", err));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Delete news function
  const deleteNews = (id) => {
    axios
      .delete(`${newsUrl}/${id}`)
      .then(() => {
        toast.error("🗑️ News deleted successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });

        fetchNews(); // Refresh news list
      })
      .catch(() => {
        toast.error("⚠️ Failed to delete news!", {
          position: "top-right",
          theme: "colored",
        });
      });
  };

  return (
    <div className="container mt-5 pt-4">
      {/* Clean & Modern Heading */}
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
        📢 Latest News Updates
      </h2>

      {/* Responsive Table */}
      <div className="table-responsive">
        <table
          className="table table-hover shadow-sm border rounded"
          style={{
            borderCollapse: "separate",
            borderSpacing: "0",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <thead className="bg-dark text-white text-center">
            <tr>
              <th style={{ padding: "12px" }}>Delete</th>
              <th style={{ padding: "12px" }}>News</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {news.length > 0 ? (
              news.map((item) => (
                <tr key={item.id} className="align-middle">
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm px-3"
                      onClick={() => deleteNews(item.id)}
                    >
                      🗑️
                    </button>
                  </td>
                  <td className="fw-semibold text-muted">{item.News}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center text-muted py-4">
                  No news available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Toast Container (Required for notifications) */}
      <ToastContainer />
    </div>
  );
};

export default ViewNews;
