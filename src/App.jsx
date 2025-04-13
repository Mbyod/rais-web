import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/HEro";
import AboutSection from "./Components/AboutSection/AboutSection";
import InfoSection from "./Components/InfoSection/InfoSection";
import Title from "./Components/Title/Title";
import EmployeesSection from "./Components/EmployeesSection/EmployeesSection";
import { ContactSection } from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import arrow from "./assets/arrow.png";

const App = () => {
  const [playerState, setPlayerState] = useState(false);
  const [hideArrowUp, setHideArrowUp] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 900 ? setHideArrowUp(false) : setHideArrowUp(true);
    });
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Что мы предлагаем" />
        <InfoSection />
        <Title title="О нашей компании" />
        <AboutSection setPlayerState={setPlayerState} />
        <Title title="Сотрудники" />
        <EmployeesSection />
        <Title title="Связаться с нами" />
        <ContactSection />
        <Footer />
      </div>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <div className={`arrow-up btn${hideArrowUp ? " hide" : ""}`}>
          <img src={arrow} alt="arrow up" />
        </div>
      </Link>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
    </div>
  );
};

export default App;
