import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-white text-center py-4">
        {" "}
        <div className="container">
          {" "}
          <div className="row">
            {" "}
            <div className="col-md-4">
              {" "}
              <h5>About Us</h5>{" "}
              <p>
                {" "}
                Welcome to DevEnhance, the premier e-learning platform for
                developers of all levels. Our mission is to empower individuals
                with the skills and knowledge necessary to thrive in the
                ever-evolving tech industry.{" "}
              </p>{" "}
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <h5>Contact</h5>{" "}
              <p>
                {" "}
                Email: udayabhaskar209@gmail.com <br /> Phone: +91 8184919984{" "}
              </p>{" "}
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <h5>Follow Us</h5>{" "}
              <p>
                {" "}
                <a href="https://www.linkedin.com/in/udaya-bhaskar-168107242/" className="text-white">
                  Linkdin
                </a>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Footer (Ensure it's visible) */}
      <footer className="bg-secondary text-center py-3">
        <p className="m-0">© 2024 Hyderabad IT Trainings. All Rights Reserved.</p>
      </footer>{" "}
        </div>{" "}
      </footer>
    </div>
  );
};

export default Footer;
