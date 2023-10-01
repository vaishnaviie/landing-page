import React from "react";
import styles from "./Navbar.module.css";
import brandImage from "../../assets/WhatsApp_Image_2023-05-03_at_9.39 2.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.daig}>DAIG</div>
        <img
          className={styles.whatsappImage1}
          src={brandImage}
          alt="brandImage"
        />
      </div>

      <div className={styles.middle}>
        {/* <ul className={styles.nav_pills}> */}
        <li>Features</li>
        <li>Whitepaper</li>
        <li>Staking</li>
        <li>TG-GPT App</li>
        {/* </ul> */}
      </div>

      <button className={styles.right}>Connect Wallet</button>
      {/* <svg
        className={styles.lines}
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="18"
        viewBox="0 0 51 18"
        fill="none"
      >
        <line y1="1" x2="51" y2="1" stroke="#FAFAFA" stroke-width="2" />
        <line y1="10" x2="51" y2="10" stroke="#FAFAFA" stroke-width="2" />
        <line y1="17" x2="51" y2="17" stroke="#FAFAFA" stroke-width="2" />
      </svg> */}
    </div>
  );
};

export default Navbar;
