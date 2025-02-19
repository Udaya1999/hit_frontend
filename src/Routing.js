import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import NewBatches from "./Components/NewBatches";
import Contact from "./Components/Contact";
import HrLogin from "./Components/HrLogin";
import NoPage from "./Components/NoPage";
import HrDashBoard from "./Components/HrDashBoard";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Batches" element={<NewBatches />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/hrlogin" element={<HrLogin />} />
        <Route path="/hrdashboardviewdjefnjdbi" element={<HrDashBoard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
