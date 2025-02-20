import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contact from "./Contact";

const Home = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const newsUrl = "https://hit-backend.onrender.com/news";

  useEffect(() => {
    axios
      .get(newsUrl)
      .then((res) => setNews(res.data))
      .catch((err) => console.log("Error fetching news:", err));
  }, []);

  // Courses Data
  const courses = [
    {
      id: 1,
      name: "React.js",
      description: "Master front-end development with React.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      name: "Node.js",
      description: "Learn backend development with Node.js.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      description: "Master JavaScript for modern web development.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      id: 4,
      name: "MongoDB & Express.js",
      description: "Learn NoSQL databases and backend API development.",
      image: "https://www.tecklyfe.com/wp-content/uploads/2017/01/mongodb-logo.jpg",
    },
  ];

  // Carousel Settings
  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="container-fluid text-white"
      style={{
        background: "#101010",
        paddingTop: "60px",
        minHeight: "100vh",
      }}
    >
      {/* Image Carousel */}
      <div id="carouselExample" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {["1", "2", "3"].map((_, index) => (
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Scrolling News Bar */}
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
          height: "50px",
        }}
      >
        <marquee behavior="scroll" direction="left">
          {news.map((item, index) => (
            <span key={index} style={{ margin: "0 20px", display: "inline-block" }}>
              <span style={{ color: "#00FF00", marginRight: "8px" }}>📢</span>
              {item.News}
            </span>
          ))}
        </marquee>
      </div>

      {/* Welcome Section */}
      <section
  className="row mt-5 justify-content-center text-center"
  style={{
    background: "#121212",
    padding: "50px 20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.2)",
    animation: "fadeIn 1.2s ease-in-out",
  }}
>
  <div className="col-md-8">
    {/* Stylish Heading with Gradient Effect */}
    <h1
      className="fw-bold"
      style={{
        background: "linear-gradient(to right, #FFD700, #FF8C00)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontSize: "2.5rem",
        textShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
      }}
    >
      Welcome to Hyderabad IT Trainings
    </h1>

    {/* Main Description */}
    <p
      className="lead mt-3"
      style={{
        color: "#f1f1f1",
        fontSize: "1.2rem",
        lineHeight: "1.6",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      Hyderabad IT Trainings is a Hyderabad-based training institute offering classroom and online training across
      India, USA, UK, and Australia. Our IT professionals with over <strong>9+ years of experience</strong> provide
      real-time, placement-focused learning to help you excel in your career.
    </p>

    {/* Additional Info */}
    <p
      style={{
        color: "#b0b0b0",
        fontSize: "1rem",
        maxWidth: "750px",
        margin: "15px auto 25px",
      }}
    >
      We offer high-quality IT courses, web development services, and recruitment solutions. Our training is designed
      to be practical, ensuring real-world exposure for our students.
    </p>

    
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>


      {/* Popular Courses Section */}
      <section className="container mt-5">
      <h2
          className="text-center text-uppercase fw-bold mb-4"
          style={{
            letterSpacing: "2px",
            color: "#F4A261",
            textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
          }}
        >
          Our Popular <span style={{ color: "#E9C46A" }}>Courses</span>
        </h2>

        {/* <hr className="border-3" style={{ borderColor: "#F4A261" }} /> */}

        {/* Courses Carousel */}
        <Slider {...sliderSettings}>
          {courses.map((course) => (
            <div key={course.id} className="p-3">
              <div
                className="card text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(90deg,rgb(26, 26, 22),rgb(55, 212, 76))",
                  borderImageSlice: 1,
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 0 12px rgba(45, 113, 55, 0.2)",
                  backdropFilter: "blur(6px)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                }}
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "contain", padding: "10px", filter: "brightness(0.9)" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#FFD700" }}>{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View All Courses Button */}
        <div className="text-center mt-4">
  <button
    className="btn"
    onClick={() => navigate("/courses")}
    style={{
      padding: "12px 24px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      background: "transparent",
      border: "1px solid transparent",
      borderImage: "linear-gradient(90deg,rgb(182, 174, 127), #D4AF37)",
      borderImageSlice: 1,
      color: "#FFD700",
      borderRadius: "1px",
      textTransform: "uppercase",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 0 8px rgba(255, 215, 0, 0.3)",
      cursor: "pointer",
     
    }}
    onMouseEnter={(e) => {
      e.target.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.6)";
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.boxShadow = "0 0 8px rgba(255, 215, 0, 0.3)";
      e.target.style.transform = "scale(1)";
    }}
  >
    View All Courses →
  </button>
</div>

      </section>

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default Home;
