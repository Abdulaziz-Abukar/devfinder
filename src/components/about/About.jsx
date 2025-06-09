import React from "react";
import styles from "../../styles/componentstyles/About.module.css";

export function About() {
  return (
    <main className={styles.aboutContainer}>
      <h1>About DevFinder</h1>
      <p>
        <strong>DevFinder</strong> is a lightweight React app that allows users
        to search for any GitHub profile and view essential information like
        their avatar, name, location, public repositories, and bio all in a
        clean, themed UI.
      </p>

      <p>
        Built with modern frontend tools like <strong>Vite</strong>,{" "}
        <strong>React Router</strong>, and fully styled using CSS variables for
        easy theme control, DevFinder offers both a <em>dark</em> and{" "}
        <em>light</em> mode experience.
      </p>

      <p>
        This project is part of my journey as a front-end developer to build
        polished, real-world applications that are fast, responsive, and
        visually engaging.
      </p>

      <p>
        <em>Coming soon:</em> I plan to enhance DevFinder by integrating
        GitHub's API to fetch and display the user's most recent public
        repositories for deeper insights.
      </p>

      <p>
        You can check out the project's source code and updates on my{" "}
        <a
          href="https://github.com/Abdulaziz-Abukar/devfinder"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <p>
        If you'd like to know more about me and explore my other work, feel free
        to visit my{" "}
        <a
          href="https://dev-abdulaziz-abukars-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          personal portfolio
        </a>
        .
      </p>
    </main>
  );
}
