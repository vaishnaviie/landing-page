import React from "react";
import styles from "./FutureIsAI.module.css";
import B from "../../assets/image 43.png";

const FutureIsAI = () => {
  return (
    <div className={styles.FutureIsAI}>
      <div className={styles.box1}>
        <p className={styles.p1}>THE FUTURE IS AI</p>

        <p className={styles.p2}>Elevate Defi Governance</p>

        <p className={styles.p3}>Meet DAIG!</p>

        <p className={styles.p4}>
          Daig's AI evaluates proposals for feasibility, alignment with goals,
          and risks, empowering informed voting decisions
        </p>
      </div>

      <div className={styles.box2}>
        <img className={styles.img} src={B} alt="B" />
      </div>
    </div>
  );
};

export default FutureIsAI;
