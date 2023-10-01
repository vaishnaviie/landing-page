import React from "react";
import styles from "./OverViewCart.module.css";

const OverViewCart = ({ text, width, height }) => {
  return (
    <div style={{ width, height }} className={styles.text}>
      {text}
    </div>
  );
};

export default OverViewCart;
