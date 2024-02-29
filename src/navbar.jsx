import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="card">
      <div className="navbar">
        <div className="icon-link">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <a
            href="https://instagram.com/believer._69"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="icon-link">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="icon-link">
          <FontAwesomeIcon className="icon" icon={faDownload} />
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="icon-link">
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          <a href="mailto:your.email@example.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
