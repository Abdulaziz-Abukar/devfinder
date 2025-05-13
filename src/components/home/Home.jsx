import React, { useEffect, useState } from "react";
import { mockUser } from "../../data/mockUser";
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
      <section>
        {userData && (
          <div>
            <h2>{userData.login}</h2>
            <img src={userData.avatar_url} />
            <p>{userData.name}</p>
            <p>{userData.bio}</p>
            <p>{userData.location}</p>
            <p>{userData.public_repos}</p>
            <p>{userData.followers}</p>
            <p>{userData.following}</p>
            <p>{userData.blog}</p>
            <p>{userData.html_url}</p>
            <p>{userData.created_at}</p>
          </div>
        )}
      </section>
      <img
        src={CatsbyFixed}
        alt="Image of Catsby being happy"
        className={styles.catsbyImg}
      />
    </main>
  );
}
