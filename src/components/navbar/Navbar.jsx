import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/componentstyles/Navbar.module.css";
import Catsby from "../../assets/Catsby.png";
export function Navbar() {
  return (
    <header className={styles.headerWrapper}>
      <img src={Catsby} alt="Image of Catsby, the mascot" />
      <nav className={styles.navBar}>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
