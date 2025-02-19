import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNews = () => {
  const [news, setNews] = useState("");
  const newsUrl = "https://hit-backend.onrender.com/news";

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(newsUrl, { News: news });
      
      // ✅ Show success notification
      toast.success("✅ News Added Successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });

      setNews(""); // ✅ Clear input field
    } catch (error) {
      toast.error("❌ Failed to Add News!", {
        position: "top-right",
        theme: "colored",
      });
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <h2
  className="fw-bold"
  style={{
    fontSize: "2rem",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px",
    borderBottom: "3px solid #007bff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",  // ✅ Centers text properly
    paddingBottom: "5px",
  }}
>
  📰 Add News
</h2>


      <form
        onSubmit={postData}
        className="shadow p-4 rounded bg-light mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Write news here..."
            id="floatingTextarea2"
            style={{ height: "120px" }}
            value={news}
            onChange={(e) => setNews(e.target.value)}
            required
          ></textarea>
          <label htmlFor="floatingTextarea2">News Content</label>
        </div>

        <button
          type="submit"
          className="btn btn-success mt-3 w-100"
          style={{ fontWeight: "bold" }}
        >
          ➕ Add News
        </button>
      </form>

      {/* ✅ Toast Container (Required for Notifications) */}
      <ToastContainer />
    </div>
  );
};

export default AddNews;
