import React from "react";
import { InfoRow } from "./InfoRow";
import styles from "../../styles/componentstyles/ProfileCard.module.css";

export function ProfileCard({ data }) {
  if (!data) return null;

  const {
    avatar_url,
    login,
    name,
    location,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    bio,
    created_at,
  } = data;

  return (
    <section className={styles.profileCard}>
      <div className={styles.profileMain}>
        <div className={styles.profileLeft}>
          <img src={avatar_url} alt={`Avatar of ${login}`} />
          <div>
            <h2>{login}</h2>
            <h3>{name}</h3>
            <InfoRow label="Location" value={location} />
            <InfoRow label="Blog" value={blog} />
            <InfoRow
              label="GitHub"
              value={<a href={html_url}>View Profile</a>}
            />
          </div>
        </div>

        <div className={styles.profileRight}>
          <div>
            <InfoRow label="Followers" value={followers} />
            <InfoRow label="Following" value={following} />
            <InfoRow label="Public Repos" value={public_repos} />
            <InfoRow label="Bio" value={bio} />
          </div>
          <div>
            <p>PINNED FOR FUTURE REPOS</p>
          </div>
        </div>
      </div>

      <div className={styles.joinDate}>
        Joined: {new Date(created_at).toLocaleDateString()}
      </div>
    </section>
  );
}
