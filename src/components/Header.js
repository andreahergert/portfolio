import React from "react";
import '../style/header.css';

const styles = {
  navbar: {
    backgroundColor: "#58C2C7",
  },
  navbarA: {
    color: "#0000FF",
    fontSize: "19px",
  },
  h1: {
    fontSize: "50px",
  },
  padding: {
    padding: "8px",
  }
};

function Header({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar}>
      <header className="nav justify-content-center">
        <h1 style={styles.h1}>Andrea Hergert</h1>
      </header>
      <ul style={styles.navbarA} className="nav justify-content-center">
        <li style={styles.padding} className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li style={styles.padding}  className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link-active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link-active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
