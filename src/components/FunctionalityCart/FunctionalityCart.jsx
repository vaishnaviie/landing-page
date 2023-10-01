import React from "react";
import styles from "./FunctionalityCart.module.css";

const FunctionalityCart = ({ text, svgFile }) => {
  return (
    <div className={styles.FunctionalityCart}>
      {svgFile}
      <span>{text}</span>
    </div>
  );
};

export default FunctionalityCart;
