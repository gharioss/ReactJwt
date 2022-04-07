import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            React CRUD Example
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  register
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/"}
                  onClick={() => localStorage.clear()}
                  className="nav-link"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default Navbar;
