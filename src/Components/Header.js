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
  <li className="nav-item">
    <a className="nav-link text-light fw-semibold px-3" href="/Home" style={{ transition: "0.3s" }}>
      Home
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light fw-semibold px-3" href="/About" style={{ transition: "0.3s" }}>
      About
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light fw-semibold px-3" href="/Courses" style={{ transition: "0.3s" }}>
      Courses
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light fw-semibold px-3" href="/Batches" style={{ transition: "0.3s" }}>
      Batches
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light fw-semibold px-3" href="/Contact" style={{ transition: "0.3s" }}>
      Contact
    </a>
  </li>
</ul>

        </div>

        {/* Welcome Message */}
        <span className="navbar-text d-none d-lg-block text-light fw-bold">
        Designed & Developed by Uday 
        </span>
      </div>
    </nav>
  );
};

export default Header;
