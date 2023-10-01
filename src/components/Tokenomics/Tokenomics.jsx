import React from "react";
import styles from "./Tokenomics.module.css";
import ContractAddrCard from "../ContractAddrCard/ContractAddrCard";

const Tokenomics = () => {
  return (
    <div className={styles.Tokenomics}>
      <p className={styles.p1}>TOKENOMICS</p>

      <p className={styles.p2}>
        Art is a Therapy for artists which is why TG-GPT Bot provides freedom
        for creators to generate AI content and be able mint art as NFT into
        their wallet right away.
      </p>

      <div className={styles.contractAddr}>
        <p className={styles.p1}>Contract Address</p>

        <p className={styles.p2}>0x994A258c7Dec633b5b15376f850D5Ea701179E79</p>

        <div className={styles.ContractAddrCardContainer}>
          <ContractAddrCard text={"Symbol"} value={"$DAIG"} />
          <ContractAddrCard text={"Decimal"} value={"14"} />
          <ContractAddrCard text={"Network"} value={"ETHEREUM ERC-20"} />
          <ContractAddrCard text={"Supply"} value={"9,000,00"} />
        </div>
      </div>

      <div className={styles.fivePercentContainer}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div className={styles.fivePercent}>5%</div>
          <div className={styles.value}>Buy Tax</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div className={styles.fivePercent}>5%</div>
          <div className={styles.value}>Sell Tax</div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
