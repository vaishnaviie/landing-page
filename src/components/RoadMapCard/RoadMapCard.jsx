import React from "react";
import styles from "./RoadMapCard.module.css";

const RoadMapCard = ({ phase, heading, description }) => {
  return (
    <div className={styles.RoadMapCard}>
      <span className={styles.phase}>{phase}</span>

      <span className={styles.marketing}>Marketing</span>

      <p className={styles.heading}>{heading}</p>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default RoadMapCard;
