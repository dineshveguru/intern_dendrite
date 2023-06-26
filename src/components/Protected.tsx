import React from "react";
import SideBar from "./Home/SideBar";
import Home from "./Home/Hero";

const Protected = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 d-flex" style={{ height: "100vh" }}>
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default Protected;
