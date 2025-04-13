import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/HEro";
import AboutSection from "./Components/AboutSection/AboutSection";
import InfoSection from "./Components/InfoSection/InfoSection";
import Title from "./Components/Title/Title";
import EmployeesSection from "./Components/EmployeesSection/EmployeesSection";
import { ContactSection } from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playerState, setPlayerState] = useState(false);

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
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
    </div>
  );
};

export default App;
