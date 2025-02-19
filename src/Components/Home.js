import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Courses from "./Courses";
import NewBatches from "./NewBatches";

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
    <div className="container-fluid bg-dark text-white" style={{ paddingTop: "120px" }}>
      {/* News Scrolling Bar */}
      <div className="bg-secondary py-2 text-center">
        <marquee className="fw-bold text-light">
          {news.map((item, index) => (
            <span key={index} className="mx-3">{item.News}</span>
          ))}
        </marquee>
      </div>

      {/* Image Carousel */}
      <div id="carouselExample" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src="https://hyderabadittrainings.com/images/slider/DESK1-min.jpg"
                className="d-block w-100 rounded"
                alt="Slide"
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Welcome Section - Centered */}
      <section className="row mt-5 justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="fw-bold">
            Welcome to <span className="text-warning">Hyderabad IT Trainings</span>
          </h1>
          <p className="lead mt-3">
            Hyderabad IT Trainings is a Hyderabad-based training institute offering classroom and online training 
            across India, USA, UK, and Australia. Our IT professionals with over 9+ years of experience provide 
            real-time, placement-focused learning to help you excel in your career.
          </p>
          <p>
            We offer high-quality IT courses, web development services, and recruitment solutions. Our training is 
            designed to be practical, ensuring real-world exposure for our students.
          </p>
        </div>
        <Courses />
        <NewBatches />
      </section>
    </div>
  );
};

export default Home;
