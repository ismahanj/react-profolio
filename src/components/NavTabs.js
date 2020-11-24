import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

  return (
      <div>
      <h2>ISMAHAN JAMEA</h2>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Home" 
        className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Works"
          className={location.pathname === "/Works" ? "nav-link active" : "nav-link"}
        >
          Works
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
