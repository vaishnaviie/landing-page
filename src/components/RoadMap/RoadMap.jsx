import React from "react";
import styles from "./RoadMap.module.css";
import RoadMapCard from "../RoadMapCard/RoadMapCard";

const RoadMap = () => {
  return (
    <div className={styles.RoadMap}>
      <div className={styles.endToEnd}>
        <p className={styles.p1}>END TO END ENCRYPTED</p>
        <p className={styles.p2}>ROAD MAP</p>
        <p className={styles.p3}>
          Introducing the Secure Message feature allowing users of Web 3.0 to
          send secure, decentralized, and encrypted messages to anyone
          anonymously in TG community.
        </p>
      </div>

      <div className={styles.animation_container}>
        <div className={styles.ball_box}>
          <div className={styles.top}>
            <div className={styles.small}></div>
          </div>

          <div className={styles.bottom}></div>

          <svg
            className={styles.ball1}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle cx="30" cy="30" r="30" fill="#D69F31" fill-opacity="0.71" />
            <circle cx="30" cy="30" r="20" fill="#D69F31" />
          </svg>

          <svg
            className={styles.ball2}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle cx="30" cy="30" r="30" fill="#D69F31" fill-opacity="0.71" />
            <circle cx="30" cy="30" r="20" fill="#D69F31" />
          </svg>

          <svg
            className={styles.ball3}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle cx="30" cy="30" r="30" fill="#D69F31" fill-opacity="0.71" />
            <circle cx="30" cy="30" r="20" fill="#D69F31" />
          </svg>

          <svg
            className={styles.ball4}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle cx="30" cy="30" r="30" fill="#D69F31" fill-opacity="0.71" />
            <circle cx="30" cy="30" r="20" fill="#D69F31" />
          </svg>

          <svg
            className={styles.ball5}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle cx="30" cy="30" r="30" fill="#D69F31" fill-opacity="0.71" />
            <circle cx="30" cy="30" r="20" fill="#D69F31" />
          </svg>

          {/* <div className={styles.ball1}></div> */}
          {/* <div className={styles.ball2}></div>
          <div className={styles.ball3}></div>
          <div className={styles.ball4}></div>
          <div className={styles.ball5}></div>
          <div className={styles.ball6}></div> */}
        </div>

        <div className={styles.div_container}>
          <div className={styles.div1}>
            <div className={styles.phase1}>
              <RoadMapCard
                phase={"Phase 1"}
                heading={"Marketing Website and whitepaper launch"}
                description={
                  "In the first phase we will be launching the marketing website and our whitepaper which will help users understand our vision."
                }
              />
            </div>
            <RoadMapCard
              phase={"Phase 2"}
              heading={"Mobile numbers launch 1"}
              description={
                "First lot of numbers will be launched and will be claimable from the website."
              }
            />
          </div>

          <div className={styles.div2}>
            <div className={styles.phase3}>
              <RoadMapCard
                phase={"Phase 3"}
                heading={"Mobile numbers launch 2"}
                description={
                  "Second lot of numbers will be launched and will be claimable from the website."
                }
              />
            </div>

            <RoadMapCard
              phase={"Phase 4"}
              heading={"Calling, Messaging using telphone number launch"}
              description={
                "At this phase we will launch the feature using which you can message/call others using their telphone number."
              }
            />
          </div>

          <div className={styles.phase1}>
            <RoadMapCard
              phase={"Phase 5"}
              heading={"Other utilties launch"}
              description={
                "Loging with telphone, video calling, OTP verification and all the other mobile number related utlities will be launched in this phase."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
