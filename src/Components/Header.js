import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-light" href="/">
          <h2 className="m-0 text-warning">E-Learn</h2>
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {["Home", "About", "Courses", "NewBatches", "Contact"].map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link text-light fw-semibold px-3"
                    href={`/${item.replace(" ", "")}`}
                    style={{ transition: "0.3s" }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Welcome Message */}
        <span className="navbar-text d-none d-lg-block text-light fw-bold">
          Welcome to Our Learning Platform 😊
        </span>
      </div>
    </nav>
  );
};

export default Header;
