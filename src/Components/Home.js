import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Courses from "./Courses";
import Contact from "./Contact";

const Home = () => {
  const [news, setNews] = useState([]);
  const newsUrl = "https://hit-backend.onrender.com/news";

  useEffect(() => {
    axios
      .get(newsUrl)
      .then((res) => setNews(res.data))
      .catch((err) => console.log("Error fetching news:", err));
  }, []);

  return (
    <div
      className="container-fluid text-white"
      style={{
        background: "#121212",
        paddingTop: "60px", // Reduced padding to decrease gap
        minHeight: "100vh",
      }}
    >

      {/* Image Carousel */}
      <div
        id="carouselExample"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
        style={{
          boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)", // Soft shadow
          borderRadius: "12px",
        }}
      >
        <div className="carousel-inner">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src="https://hyderabadittrainings.com/images/slider/DESK1-min.jpg"
                className="d-block w-100 rounded"
                alt="Slide"
                style={{ borderRadius: "12px" }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      
      {/* News Scrolling Bar */}
      <div
        style={{
          background: "linear-gradient(to right, #1e1e1e, #292929)",
          padding: "5px 0",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.1rem",
          color: "white",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          height: "50px", // Adjust the height as needed
        }}
      >
        <div style={{ width: "100%", overflowX: "auto" }}>
          <marquee behavior="scroll" direction="left">
            {news.map((item, index) => (
              <span key={index} style={{ margin: "0 20px", display: "inline-block" }}>
                <span style={{ color: "#00FF00", marginRight: "8px" }}>📢</span>
                {item.News}
              </span>
            ))}
          </marquee>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="row mt-5 justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="fw-bold">
            Welcome to <span style={{ color: "#FFD700" }}>Hyderabad IT Trainings</span>
          </h1>
          <p className="lead mt-3 text-light">
            Hyderabad IT Trainings is a Hyderabad-based training institute offering classroom and online training
            across India, USA, UK, and Australia. Our IT professionals with over 9+ years of experience provide
            real-time, placement-focused learning to help you excel in your career.
          </p>
          <p className="text-secondary">
            We offer high-quality IT courses, web development services, and recruitment solutions. Our training is
            designed to be practical, ensuring real-world exposure for our students.
          </p>
        </div>
        <Courses />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
