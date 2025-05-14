import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../themeToggle/ThemeToggle";
import styles from "../../styles/componentstyles/Navbar.module.css";
import Mascot from "../../assets/Catsby.png";

export function Navbar() {
  return (
    <header className={styles.headerWrapper}>
      <img src={Mascot} alt="devFinder mascot" />
      <div className={styles.navBar}>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <NavLink to="/" relative="path">
              Home
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to="/about" relative="path">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.toggleWrapper}>
        <span className={styles.themeLabel}>Theme</span>
        <ThemeToggle />
      </div>
    </header>
  );
}
