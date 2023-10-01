import React from "react";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ text }) => {
  return <button className={styles.SecondaryButton}>{text}</button>;
};

export default SecondaryButton;
