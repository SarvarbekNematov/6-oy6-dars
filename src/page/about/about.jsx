import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

export const About = () => {
  return (
    <div className="block">
      <div className="block_list">
        <Link to={"/about"}>
          <p>Inputs</p>
        </Link>
        <Link to={"/about/buttons"}>
          <p>Buttons</p>
        </Link>
        <Link to={"/about/info"}>
          <p>Info</p>
        </Link>
      </div>
      <div className="cards">
        <Outlet />
      </div>
    </div>
  );
};
