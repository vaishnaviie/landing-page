import React from "react";
import styles from "./Pocket.module.css";
import phoneImg from "../../assets/image 27.png";
import logo from "../../assets/WhatsApp_Image_2023-05-03_at_9.39 2.png";

const Pocket = () => {
  return (
    <div className={styles.Pocket}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.p1}> GET GOING WITH DAIG</p>

          <p className={styles.p2}>AI in your Pocket</p>

          <p className={styles.p3}>
            Get your hands on the GPT Guru AI phone application available for
            Android.
          </p>

          <div className={styles.telegram}>
            <div style={{}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <g clip-path="url(#clip0_250_148)">
                  <path
                    d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                    fill="white"
                  />
                  <path
                    d="M44.6881 18.3845L15.6689 30.9125C15.6019 30.9391 15.541 30.9793 15.4902 31.0305C15.4393 31.0818 15.3996 31.1429 15.3735 31.2102C15.3474 31.2775 15.3354 31.3494 15.3383 31.4215C15.3413 31.4936 15.359 31.5644 15.3905 31.6293C15.4369 31.7461 15.5057 31.8373 15.6225 31.8853L22.3841 35.8693C22.4617 35.9164 22.5192 35.9905 22.5457 36.0773L25.6497 45.2933C25.6819 45.3822 25.736 45.4617 25.807 45.5242C25.878 45.5868 25.9636 45.6304 26.0559 45.6511C26.1482 45.6719 26.2443 45.669 26.3352 45.6428C26.4261 45.6166 26.509 45.5679 26.5761 45.5013L30.6289 41.1717C30.6862 41.1163 30.7591 41.0798 30.8378 41.0672C30.9165 41.0546 30.9972 41.0665 31.0689 41.1013L36.2785 43.9493C36.5345 44.0885 36.8817 43.9973 37.0193 43.7413C37.0433 43.7189 37.0433 43.6725 37.0673 43.6485L45.4257 19.0789C45.4492 19.0105 45.4588 18.9382 45.4541 18.866C45.4493 18.7939 45.4301 18.7235 45.3978 18.6588C45.3655 18.5942 45.3206 18.5366 45.2658 18.4895C45.211 18.4424 45.1473 18.4067 45.0785 18.3845C44.9514 18.338 44.812 18.338 44.6849 18.3845H44.6881ZM27.6865 38.2053L26.1825 42.4197L24.0065 35.7733L39.8465 23.7093L27.6865 38.2053Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_250_148">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div
              style={{
                width: "169px",
                height: "66px",
              }}
            >
              <p className={styles.p1}>Coming soon</p>

              <p className={styles.p2}>Telegram Bot</p>
            </div>
          </div>
        </div>
        <div className={styles.phone_img_container}>
          <img className={styles.phoneImg} src={phoneImg} alt="phoneImg" />
          <div className={styles.logo_div}>
            <span>DAIG</span>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pocket;
