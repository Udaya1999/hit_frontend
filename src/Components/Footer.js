import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-warning">About Us</h5>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
              Welcome to DevEnhance, the premier e-learning platform for developers of all levels. 
              Our mission is to empower individuals with the skills and knowledge necessary to 
              thrive in the ever-evolving tech industry.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-warning">Contact</h5>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
              📧 Email:{" "}
              <a href="mailto:udayabhaskar209@gmail.com" className="text-white fw-bold">
                udayabhaskar209@gmail.com
              </a>
              <br />
              📞 Phone:{" "}
              <span className="fw-bold">+91 8184919984</span>
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-warning">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/udaya-bhaskar-168107242/" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://github.com/" className="text-white fs-4" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Logos Row */}
        <div className="row mt-4">
          <h6 className="text-warning fw-bold">Technologies We Use</h6>
          <div className="d-flex justify-content-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="40" height="40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" width="40" height="40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="40" height="40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="40" height="40" />
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="my-3 border-warning" />
        <p className="m-0">&copy; 2024 Hyderabad IT Trainings. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
