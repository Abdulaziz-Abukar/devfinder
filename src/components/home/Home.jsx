import React, { useState } from "react";

export function Home() {
  const [searchUser, setSearchUser] = useState("");

  const handleUserSubmission = (e) => {
    e.preventDefault();
    console.log(searchUser);
    setSearchUser("");
  };

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
    </main>
  );
}
