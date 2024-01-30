import React from "react";
import Sidebar from "./Sidebar";
import "./panel.css";

const Dashboard = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex">
          <div className="col-12 col-md-2">
            <Sidebar />
          </div>
          <div className="col-12 col-md-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
