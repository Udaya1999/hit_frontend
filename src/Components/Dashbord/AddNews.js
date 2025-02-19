import axios from "axios";
import React, { useState } from "react";

const AddNews = () => {
  const [News, setNews] = useState("");
  const newsUrl = "https://hit-backend.onrender.com/news/"

  const postData = (y) => {
    y.preventDefault();
    axios
      .post(`newsUrl`, { News })
      .then((res) => {
        setNews("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-5">
      <form onSubmit={postData}>
        <div class="form-floating" style={{ margin: "50px" }}>
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={News}
            onChange={(e) => setNews(e.target.value)}
          ></textarea>
          <label for="floatingTextarea2">News</label>
          <br />
          <input
            type="submit"
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "450px",
              height: "40px",
              width: "100px",
              color: "blue",
              borderRadius: "5px",
            }}
            onSubmit={postData}
          />
        </div>
      </form>
    </div>
  );
};

export default AddNews;
