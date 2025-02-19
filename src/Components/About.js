import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white"
      style={{ minHeight: "100vh", padding: "80px 20px 50px" }} // Adjusted padding
    >
      {/* Main Content */}
      <div className="container-fluid flex-grow-1">
        {/* Introduction Section */}
        <div className="container text-center pb-4">
          <h5
            className="fw-bold"
            style={{
              color: "#F4A261",
              textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
              fontSize: "1.5rem", // Increased font size
            }}
          >
            "Hyderabad IT Trainings provides all software courses Classroom
            training & Online with 100% placements."
          </h5>
          <p
            className="lead mt-3"
            style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
          >
            Hyderabad IT Trainings is a Hyderabad-based IT Software Training &
            Recruitment Company delivering classroom and online training in
            India, USA, UK, Australia, Canada, and Singapore. As a leader in
            software courses, we provide high-quality, project-oriented training
            at affordable fees. Our trainers are IT professionals with rich
            experience.
          </p>
        </div>

        {/* Online Training Section */}
        <section className="container row align-items-center pb-4">
          <div className="col-md-6 text-center text-md-start">
            <h2
              style={{
                color: "#E9C46A",
                fontSize: "2rem", // Increased heading size
                textShadow: "0px 0px 8px rgba(255,255,255,0.3)",
              }}
            >
              Online Training
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              Online training is a method of delivering education through an
              electronic medium. Hyderabad IT Trainings offers online software
              courses using its vast technology expertise, ensuring students
              gain industry-relevant skills from anywhere.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://hyderabadittrainings.com/images/course/cu-2.jpg"
              alt="Online Training"
              className="img-fluid rounded shadow"
            />
          </div>
        </section>

        {/* Offline Training Section */}
        <section className="container row align-items-center pb-4">
          <div className="col-md-6 text-center">
            <img
              src="https://hyderabadittrainings.com/images/course/cu-5.jpg"
              alt="Offline Training"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2
              style={{
                color: "#E9C46A",
                fontSize: "2rem",
                textShadow: "0px 0px 8px rgba(255,255,255,0.3)",
              }}
            >
              Offline Training
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              Hyderabad IT Trainings offers classroom training in Hyderabad with
              a decade of experience in IT education. Our offline courses help
              students gain hands-on experience, preparing them for real-world
              industry challenges.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <div className="container text-center pb-4">
          <h4
            className="fw-bold"
            style={{
              color: "#F4A261",
              fontSize: "1.8rem",
              textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
            }}
          >
            Vision & Mission
          </h4>
          <hr style={{ borderColor: "#F4A261", width: "50%", margin: "10px auto" }} />

          <h5 className="fw-bold mt-3" style={{ color: "#E9C46A" }}>Vision</h5>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            Our vision is to consistently deliver high-quality training
            solutions that enhance customer satisfaction. We aim to be the best
            IT training institute, helping students build successful careers in
            the IT industry.
          </p>

          <h5 className="fw-bold mt-4" style={{ color: "#E9C46A" }}>Mission</h5>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            Our mission is to provide innovative training methods and share
            knowledge that enhances learning outcomes. We strive to offer
            corporate training solutions that help organizations upskill their
            workforce effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
