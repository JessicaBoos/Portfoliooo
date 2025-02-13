import React from "react";
import "./App.css";
import signature from "./signature.png";
import portrait from "./portrait.jpg";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import RandomProjectLink from "./RandomProjectLink.js";

export default function App() {
  return (
    <div className="App font-monospace">
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="https://github.com/JessicaBoos#">
            <img
              src={signature}
              alt="Logo"
              width="150"
              height="75"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <RandomProjectLink />
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://www.shecodes.io/graduates/104550-jessica-boos"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lehre/Diploma
                </a>
              </li>
              <li className="nav-item">
                <a
                  class="nav-link active"
                  href="https://github.com/JessicaBoos#"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header ">
        <div className="info-container">
          <div className="row">
            <div className="col-7">
              <span className="">
                <div className="fs-5">
                  Hi! Mein name is <strong>Jessica Boos </strong>und ich bin
                </div>
                <br />
                <div className="App-header-main ">
                  Frontend <br /> Developer.
                </div>
              </span>
              <div className="App-header-description fs-5">
                <br />
                mit Erfahrung in JavaScript, VSCode, GitHub, API, React.js und
                Bootstrap.
              </div>
            </div>
            <div className="col-4">
              <span className="App-header-img">
                <img
                  src={portrait}
                  alt="Portrait"
                  className="img-fluid  align-items-center"
                />
              </span>
            </div>
          </div>
        </div>
      </header>
      <Projects />
      <Contact />
    </div>
  );
}
