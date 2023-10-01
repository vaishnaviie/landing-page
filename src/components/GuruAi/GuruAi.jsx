import React from "react";
import styles from "./GuruAi.module.css";
import roboImage from "../../assets/image 37.png";

const GuruAi = () => {
  return (
    <div className={styles.guruAi}>
      <p className={styles.p1}>EARN PASSIVE INCOME</p>
      <p className={styles.p2}>Train GURU AI to Earn</p>
      <p className={styles.p3}>
        Join hands with TG-GPT Bot to train it's AI model on various topics of
        Web 3.0 and start earning passive income in $GPTG.
      </p>
      <div className={styles.ellipse1}></div>
      <img className={styles.roboImage} src={roboImage} alt="roboImage" />
    </div>
  );
};

export default GuruAi;
