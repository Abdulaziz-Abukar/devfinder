import React, { useEffect, useState } from "react";
import { ProfileCard } from "../profilecard/ProfileCard";
import { getUser } from "../../api/getUser";
// import CatsbyFixed from "../../assets/CatsbyFixed.png";
import styles from "../../styles/componentstyles/Home.module.css";

export function Home() {
  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUserSubmission = async (e) => {
    e.preventDefault();
    if (!searchUser.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const user = await getUser(searchUser);
      setUserData(user);
    } catch (err) {
      setUserData(null);
      setError(err.message || "An error occurred.");
    } finally {
      setIsLoading(false);
      setSearchUser("");
    }
  };

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

      {isLoading && <p className={styles.status}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!isLoading && !error && userData && <ProfileCard data={userData} />}
    </main>
  );
}
