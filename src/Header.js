import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning text-dark">
        <div className="container-fluid ">
          <NavLink className="navbar-brand text-light" to="/">
            Bank App
          </NavLink>

          <NavLink
            className="navbar-item text-dark me-4"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>

          <NavLink
            className="navbar-item text-dark"
            to="form"
            style={{ textDecoration: "none" }}
          >
            Add new user
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
