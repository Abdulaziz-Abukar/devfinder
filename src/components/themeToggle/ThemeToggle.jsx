import React, { useEffect, useState } from "react";
import styles from "../../styles/componentstyles/ThemeToggle.module.css";

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.className = theme; // Set class on <html>
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
      <span className={styles.slider}></span>
    </label>
  );
}
