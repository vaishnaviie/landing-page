import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Banner1 from "../../components/Navbar/Banner1/Banner1";
import Partners from "../../components/Partners/Partners";
import FutureIsAI from "../../components/FutureIsAI/FutureIsAI";
import AiIntegration from "../../components/AI Integration/AiIntegration";
import GuruAi from "../../components/GuruAi/GuruAi";
import AiFunctinalities from "../../components/AiFunctinalities/AiFunctinalities";
import Tokenomics from "../../components/Tokenomics/Tokenomics";
import RoadMap from "../../components/RoadMap/RoadMap";
import OurTeam from "../../components/OurTeam/OurTeam";
import Pocket from "../../components/Pocket/Pocket";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner1 />
      <Partners />
      <FutureIsAI />
      <AiIntegration />
      <GuruAi />
      <AiFunctinalities />
      <Tokenomics />
      <RoadMap />
      <OurTeam />
      <Pocket />
      <Footer />
    </div>
  );
};

export default Home;
