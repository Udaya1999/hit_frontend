import React, { useState } from "react";
import CustomRead from "./Dashbord/CustomRead";
import AddBatches from "./Dashbord/AddBatches";
import Welcome from "./Dashbord/Welcome";
import ViewEnquiries from "./Dashbord/ViewEnquiries";
import ViewNews from "./Dashbord/ViewNews";
import ViewCourses from "./Dashbord/ViewCourses";
import AddNews from "./Dashbord/AddNews";
import AddCourses from "./Dashbord/AddCourses";

const HrDashBoard = () => {
  const [view, setView] = useState("");

  const DashBoardView = () => {
    switch (view) {
      case "addBatches":
        return <AddBatches />;
      case "viewBatches":
        return <CustomRead />;
      case "viewEnquiries":
        return <ViewEnquiries />;
      case "news":
        return <ViewNews />;
      case "viewCourses":
        return <ViewCourses />;
      case "AddNews":
        return <AddNews />;
      case "addCources":
        return <AddCourses />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#0f5132",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>HR Dashboard</h3>
        {[
          { name: "Add Courses", key: "addCources" },
          { name: "View Courses", key: "viewCourses" },
          { name: "Add Batches", key: "addBatches" },
          { name: "View Batches", key: "viewBatches" },
          { name: "News", key: "news" },
          { name: "Add News", key: "AddNews" },
          { name: "View Enquiries", key: "viewEnquiries" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setView(item.key)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "5px 0",
              backgroundColor: view === item.key ? "#198754" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: view === item.key ? "bold" : "normal",
              transition: "background 0.3s ease",
            }}
          >
            {item.name}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          overflowY: "auto",
          height: "90vh",
          margin: "auto",
          width: "85%",
        }}
      >
        {DashBoardView()}
      </div>
    </div>
  );
};

export default HrDashBoard;
