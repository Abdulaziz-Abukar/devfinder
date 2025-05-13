import React, { useEffect, useState } from "react";
import { mockUser } from "../../data/mockUser";
import { ProfileCard } from "../profilecard/ProfileCard";
import CatsbyFixed from "../../assets/CatsbyFixed.png";
import styles from "../../styles/componentstyles/Home.module.css";

export function Home() {
  const [searchUser, setSearchUser] = useState("");

  const handleUserSubmission = (e) => {
    e.preventDefault();
    console.log(searchUser);
    setUserData(mockUser);
    setSearchUser("");
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userData !== null) {
      console.log("User data updated:", userData);
    }
  }, [userData]);

  return (
    <main>
      <h1>Find a Github Profile</h1>
      <section>
        <form onSubmit={handleUserSubmission}>
          <label htmlFor="username">Github Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Search User..."
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
      </section>
      <ProfileCard data={userData} />
      <img
        src={CatsbyFixed}
        alt="Image of Catsby being happy"
        className={styles.catsbyImg}
      />
    </main>
  );
}
