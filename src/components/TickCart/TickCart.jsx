import React from "react";
import styles from "./TickCart.module.css";

const TickCart = ({ text }) => {
  return (
    <div className={styles.TickCart}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
      >
        <path
          d="M36.75 12.25L15.75 33.25L6.125 23.625L8.5925 21.1575L15.75 28.2975L34.2825 9.78247L36.75 12.25Z"
          fill="#A87C27"
        />
      </svg>

      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TickCart;
