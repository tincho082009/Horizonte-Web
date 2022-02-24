import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Us } from "./components/Us";
import {MissionVision} from "./components/Mission&Vision";
import { FoundingTeam } from "./components/FoundingTeam";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Certification } from "./components/Certification";
import { Contents } from "./components/Contents";
import { Modality } from "./components/Modality";
import { FamilyTeam } from "./components/FamilyTeam";
import {TeachersTeam} from "./components/TeachersTeam";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <Us />
      <MissionVision />   
      <Certification />
      <Contents />
      <Modality />
      <FamilyTeam />
      <FoundingTeam data={landingPageData.Team} />
      <TeachersTeam data={landingPageData.Team}/>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
