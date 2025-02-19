import React, { useState } from "react";

import CustomRead from "./Dashbord/CustomRead";
import AddBatches from "./Dashbord/AddBatches";
import Welcome from "./Dashbord/Welcome";
import ViewEnquiries from "./Dashbord/ViewEnquiries";
import ViewNews from "./Dashbord/ViewNews";
import ViewCourses from "./Dashbord/ViewCourses";
import AddNews from "./Dashbord/AddNews";
import AddCourses from "./Dashbord/AddCourses";
// import styleSheet from "../App.css";

const HrDashBoard = () => {
  const [view, setView] = useState("");

  const DashBoardView = () => {
    let output = "";

    if (view === "") {
      output = <Welcome />;
    } else if (view === "addBatches") {
      output = <AddBatches />;
    } else if (view === "viewBatches") {
      output = <CustomRead />;
    } else if (view === "viewEnquiries") {
      output = <ViewEnquiries />;
    } else if (view === "news") {
      output = <ViewNews />;
    } else if (view === "viewCourses") {
      output = <ViewCourses />;
    } else if (view === "AddNews") {
      output = <AddNews />;
    } else if (view === "addCources") {
      output = <AddCourses />;
    }

    return output;
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <aside
          className="col-12 col-lg-3 text-center py-2"
          style={{ paddingBottom: "30px", borderRight: "1px solid grey" }}
        >
          <h4 style={{ marginBottom: "30px" }}>Hr DashBoard</h4>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("addCources")}
          >
            Add Cources
          </button>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("viewCourses")}
          >
            view Cources
          </button>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("addBatches")}
          >
            Add Batches
          </button>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("viewBatches")}
          >
            view Batches
          </button>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("news")}
          >
            News
          </button>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("AddNews")}
          >
            Add News
          </button>
          <button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              border: "1px solid green",
              backgroundColor: "transparent",
              marginBottom: "30px",
            }}
            onClick={() => setView("viewEnquiries")}
          >
            view Enquiries
          </button>
        </aside>

        <div
          className="col-12 col-lg-9"
          style={{
            border: "10px solid orange",
            borderRadius: "5px",
            backgroundColor: "gray",
          }}
        >
          {/* <CustomRead /> */}
          {/* <AddBatches /> */}
          {DashBoardView()}
        </div>
      </div>
    </div>
  );
};

export default HrDashBoard;