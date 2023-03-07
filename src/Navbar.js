import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/About"
                  title="about"
                  alt="go to about page"
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="about.html#contact"
                  title="contactbutton"
                  alt="contactbutton"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
