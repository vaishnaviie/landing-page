import React from "react";
import styles from "./AiFunctinalities.module.css";
// import robotImg from "../../../assets/image 36.png";
import robotImg from "../../assets/image 36.png";
import FunctionalityCart from "../FunctionalityCart/FunctionalityCart";

const AiFunctinalities = () => {
  return (
    <div className={styles.AiFunctinalities}>
      <div className={styles.left}>
        <img className={styles.roboImg} src={robotImg} alt="robotImg" />

        <p className={styles.p1}>Streamline Decision Making</p>

        <p className={styles.p2}>Your AI Governance Partner</p>
        <p className={styles.p3}>
          Daig's smart contracts will define the token properties and govern the
          platform's core functionalities, such as voting, staking, and rewards
          distribution
        </p>
      </div>

      <div className={styles.right}>
        <div style={{ display: "flex", gap: "48px", marginTop: "109px" }}>
          <FunctionalityCart
            text={"Voting"}
            svgFile={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M61.75 2.70252C59.8816 3.75627 58.0542 4.90014 56.2912 6.35589L57.206 11.1743C58.9904 11.7074 60.4479 11.9074 61.75 11.9199V2.70252ZM49.3773 5.76652C47.4669 5.75589 45.3172 6.09102 42.6483 6.62077L42.6208 6.62614L42.5933 6.63027C40.747 6.90239 37.494 8.13839 34.2851 11.4886L39.8189 12.9594C39.9404 12.7728 40.5609 11.8339 40.6789 11.64C41.3194 12.0304 41.9599 12.4205 42.6004 12.8106C41.041 15.37 39.2576 17.2551 37.1086 19.6259C36.8432 20.2156 37.2308 20.6508 37.6536 20.8934C38.3061 21.2598 39.4161 21.2796 39.7082 21.1561C42.6997 19.1851 44.8106 16.6651 46.7036 14.1223L47.3872 14.2428C48.8249 14.4966 50.696 14.375 52.2256 13.8861C53.6129 13.4426 54.6346 12.7165 55.0584 11.9251L54.0675 6.70614C52.562 6.05439 51.0626 5.77589 49.3771 5.76652H49.3773ZM28.4915 12.3395L24.812 26.8378L26.0174 26.8749H38.9087L39.0213 26.8488L39.8717 23.4623C38.7643 23.6998 37.5847 23.4351 36.5521 22.8554C35.9036 22.4913 35.2991 21.9504 34.9745 21.1761C33.9999 18.6839 36.9566 16.514 38.565 14.5824L28.4912 12.3395H28.4915ZM8.69525 25.1249L5.82025 30.8749H58.1796L55.3046 25.1249H41.7744L41.3348 26.8749H44V29.1249H20V26.8749H22.4815L22.9255 25.1249H8.69538H8.69525ZM5.125 33.1249V60.8749H58.875V33.1249H5.125ZM6.875 34.8749H57.125V59.1249H6.875V34.8749ZM9.125 37.1249V51.9046L13.4377 42.5304L22.6077 46.5006L30.9393 40.7706L35.6284 47.9298L41.8921 47.3554L45.8046 42.4389L54.875 49.3283V37.1249H9.125ZM30.3179 43.9286L18.9891 51.7199L22.3654 56.8749H34.3161L36.7744 53.7861L30.3179 43.9286ZM14.5623 45.4694L9.31513 56.8749H19.6758L15.9016 51.1126L20.4196 48.0055L14.5623 45.4693V45.4694ZM46.1954 45.5609L37.1916 56.8749H54.7591L54.875 56.7291V52.1539L46.1954 45.5609ZM39.9524 49.7926L37.0241 50.0611L38.2497 51.9323L39.9524 49.7926Z"
                  fill="url(#paint0_linear_138_545)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_138_545"
                    x1="33.4375"
                    y1="2.70239"
                    x2="33.4375"
                    y2="60.8749"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#876C0C" stop-opacity="0.23" />
                    <stop offset="1" stop-color="#EBBD19" stop-opacity="0.94" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />

          <FunctionalityCart
            text={"Staking"}
            svgFile={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M10.4027 47.6373L20.832 37.208L28.376 44.7493L40.5654 32.56L45.3467 37.3413V24.008H32.0134L36.7947 28.7893L28.376 37.208L20.832 29.664L7.64537 42.8533C6.12518 39.44 5.34191 35.7445 5.3467 32.008C5.3467 17.28 17.2854 5.34131 32.0134 5.34131C46.7414 5.34131 58.68 17.28 58.68 32.008C58.68 46.736 46.7414 58.6746 32.0134 58.6746C27.7943 58.6778 23.6347 57.6785 19.8775 55.7591C16.1203 53.8397 12.8728 51.0578 10.4027 47.6373Z"
                  fill="url(#paint0_linear_138_549)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_138_549"
                    x1="32.0134"
                    y1="5.34131"
                    x2="32.0134"
                    y2="58.6747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC700" />
                    <stop offset="1" stop-color="#624E06" stop-opacity="0.08" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
        </div>
        <div style={{ marginTop: "48px" }}>
          <FunctionalityCart
            text={"Rewards Distribution"}
            svgFile={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M34.6802 45.176V50.6747H48.0135V56.008H16.0135V50.6747H29.3468V45.1734C24.1914 44.5233 19.4504 42.0141 16.0135 38.1167C12.5767 34.2193 10.6803 29.2017 10.6802 24.0054V8.00537H53.3468V24.0054C53.3468 29.2017 51.4503 34.2193 48.0135 38.1167C44.5767 42.0141 39.8356 44.5259 34.6802 45.176ZM2.68018 13.3414H8.01351V24.008H2.68018V13.3414ZM56.0135 13.3414H61.3468V24.008H56.0135V13.3414Z"
                  fill="url(#paint0_linear_138_547)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_138_547"
                    x1="32.0135"
                    y1="8.00537"
                    x2="32.0135"
                    y2="56.008"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ECC606" />
                    <stop offset="1" stop-color="#ECC606" stop-opacity="0.24" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AiFunctinalities;
