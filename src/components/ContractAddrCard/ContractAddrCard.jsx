import React from "react";
import styles from "./ContractAddrCard.module.css";

const ContractAddrCard = ({ text, value }) => {
  return (
    <div className={styles.ContractAddrCard}>
      <div className={styles.text}>{text}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default ContractAddrCard;
