import React from "react";
import styles from "../../styles/componentstyles/Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made with 💻 by Abdulaziz</p>
      <p>
        <a
          href="https://github.com/Abdulaziz-Abukar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://dev-abdulaziz-abukars-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Portfolio
        </a>{" "}
        | <Link to="/about">About This App</Link>
      </p>
    </footer>
  );
}
