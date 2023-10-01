import React from "react";
import styles from "./AiIntegration.module.css";
import roboImage from "../../assets/image 37.png";
import TickCart from "../TickCart/TickCart";
import PrimaryButton from "../Butons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Butons/SecondaryButton/SecondaryButton";

const AiIntegration = () => {
  return (
    <div className={styles.AiIntegration}>
      <img className={styles.roboImage} src={roboImage} alt="roboImage" />
      <div className={styles.ellipse1}></div>
      <div className={styles.details}>
        <span className={styles.p1}> AI Integration</span>
        <p className={styles.p2}>
          Daig integrates advanced AI, including NLP and ML, for proposal
          analysis, personalized recommendations, and adaptive learning.
        </p>
        <div className={styles.list}>
          <TickCart text={"Artificial Intelligence"} />
          <TickCart text={"Machine Learning"} />
          <TickCart text={"Natural Language Processing"} />
        </div>
        <div className={styles.btns}>
          <PrimaryButton text={"Try DAIG"} />
          <SecondaryButton text={"Whitepaper"} />
        </div>
      </div>
    </div>
  );
};

export default AiIntegration;
