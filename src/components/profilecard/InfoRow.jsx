import React from "react";
import styles from "../../styles/componentstyles/InfoRow.module.css";

export function InfoRow({ label, value }) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.label}>{label}:</span>{" "}
      <span className={styles.value}>{value ?? "N/A"}</span>
    </div>
  );
}
