import React from "react";
import styles from "./Banner1.module.css";
import robotImg from "../../../assets/image 36.png";
import OverViewCart from "../../overview carts/OverViewCart";
import PrimaryButton from "../../Butons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Butons/SecondaryButton/SecondaryButton";

const Banner1 = () => {
  return (
    <div className={styles.banner1}>
      <div className={styles.container}>
        <p className={styles.para1}>
          Unlocking the Full Potential Of Daos with Artificial Intelligence
        </p>
        <p className={styles.para2}>
          Empower DeFi Governance with AI-Powered Decisions
        </p>
        <div className={styles.ellipse1}></div>

        {/* <svg
          className={styles.ellipse2}
          xmlns="http://www.w3.org/2000/svg"
          width="308"
          height="328"
          viewBox="0 0 308 328"
          fill="none"
        >
          <g filter="url(#filter0_f_72_456)">
            <ellipse
              cx="128"
              cy="163.838"
              rx="80"
              ry="63.8384"
              fill="#896726"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_72_456"
              x="-52"
              y="0"
              width="360"
              height="327.677"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_72_456"
              />
            </filter>
          </defs>
        </svg> */}
        <div className={styles.buttons_div}>
          <PrimaryButton text={"Try DAIG"} />
          <SecondaryButton text={"Whitepaper"} />
        </div>

        <span className={styles.overview}>OVERVIEW</span>
        <br />
        <div className={styles.div1}>
          <OverViewCart
            text={"AI-Driven Proposal Analysis"}
            width="243px"
            height="48px"
          />
          <OverViewCart
            text={" Proposal Ranking"}
            width="185px"
            height="48px"
          />
        </div>
        <div className={styles.div1}>
          <OverViewCart
            text={"Token-Based Voting"}
            width="243px"
            height="48px"
          />
          <OverViewCart
            text={"Voting Recommendations"}
            width="243px"
            height="48px"
          />
        </div>
      </div>

      <img className={styles.robotImg} src={robotImg} alt="robotImg" />
    </div>
  );
};

export default Banner1;
