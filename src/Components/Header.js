import React from "react";
const Header = () => {
  return (
    <div>
      <nav class=" bg-info navbar navbar-expand-lg bg-body-tertiary fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand " href="/"  style={{marginLeft:"50px"}}><h1>E- L e a r n</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " href="/Home" style={{marginLeft:"50px"}}><h5>Home</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About" style={{marginLeft:"50px"}}><h5>About_us</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Courses" style={{marginLeft:"50px"}}><h5>Courses</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/NewBatches" style={{marginLeft:"50px"}}><h5>New Batches</h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact" style={{marginLeft:"50px"}}><h5>Contact_us</h5></a>
        </li>
      </ul>
      <span class="navbar-text">
      Welcome to Our Learning Platform 😊
      </span>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;
