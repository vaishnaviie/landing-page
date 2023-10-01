import React from "react";
import styles from "./OurTeam.module.css";
import card from "../../assets/Ellipse 6.png";

const OurTeam = () => {
  return (
    <div className={styles.OurTeamContainer}>
      <div className={styles.div}>
        <p className={styles.contributors}>Contributors</p>
        <p className={styles.ourTeam}>Our Team</p>
      </div>

      <div className={styles.card_container}>
        {/* <div className={styles.div1}></div> */}
        {/* <div className={styles.div2}></div> */}
        {/* <div className={styles.div3}></div> */}
      </div>
    </div>
  );
};

export default OurTeam;
