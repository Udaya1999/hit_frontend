import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white"
      style={{ minHeight: "100vh" }}
    >
      {/* Main Content */}
      <div
        className="container-fluid flex-grow-1"
        style={{ paddingTop: "120px" }}
      >
        {/* Introduction Section */}
        <div className="container text-center pb-5">
          <h5 className="text-danger fw-bold">
            "Hyderabad IT Trainings provides all software courses Classroom
            training & Online with 100% placements."
          </h5>
          <p className="lead mt-3">
            Hyderabad IT Trainings is a Hyderabad-based IT Software Training &
            Recruitment Company delivering classroom and online training in
            India, USA, UK, Australia, Canada, and Singapore. As a leader in
            software courses, we provide high-quality, project-oriented training
            at affordable fees. Our trainers are IT professionals with rich
            experience.
          </p>
        </div>

        {/* Online Training Section */}
        <section className="container mt-5 row align-items-center pb-5">
          <div className="col-md-6 text-center text-md-start">
            <h2 className="text-danger">Online Training</h2>
            <p>
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
              className="img-fluid rounded"
            />
          </div>
        </section>

        {/* Offline Training Section */}
        <section className="container mt-5 row align-items-center pb-5">
          <div className="col-md-6 text-center">
            <img
              src="https://hyderabadittrainings.com/images/course/cu-5.jpg"
              alt="Offline Training"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2 className="text-danger">Offline Training</h2>
            <p>
              Hyderabad IT Trainings offers classroom training in Hyderabad with
              a decade of experience in IT education. Our offline courses help
              students gain hands-on experience, preparing them for real-world
              industry challenges.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <div className="container mt-5 text-center pb-5">
          <h6 className="text-danger fw-bold">Vision</h6>
          <p>
            Our vision is to consistently deliver high-quality training
            solutions that enhance customer satisfaction. We aim to be the best
            IT training institute, helping students build successful careers in
            the IT industry.
          </p>
          <h6 className="text-danger fw-bold mt-4">Mission</h6>
          <p>
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
