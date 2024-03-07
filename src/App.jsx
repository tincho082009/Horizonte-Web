import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Us } from "./components/Us";
import { MissionVision } from "./components/Mission&Vision";
import { FoundingTeam } from "./components/FoundingTeam";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Certification } from "./components/Certification";
import { Contents } from "./components/Contents";
import { Modality } from "./components/Modality";
import { FamilyTeam } from "./components/FamilyTeam";
import { TeachersTeam } from "./components/TeachersTeam";
import { Flags } from "./components/FlagsOfCountries";
import { Testimony } from "./components/Testimony";
import { MyGallery } from "./components/MyGallery";
//import { CourseTeachers } from "./components/CourseTeachers";
import { Graduates } from "./components/Graduates";
import { StudentWorks } from "./components/StudentWorks";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <a
        id="icon-whats"
        href="https://api.whatsapp.com/send?phone=542665113630&text=Hola%20Yaneth!%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Plataforma%20Horizonte!"
        target="_blank"
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#00BB2D",
          color: "#FFF",
          borderRadius: "50px",
          textAlign: "center",
          boxShadow: "2px 2px 3px #999",
          zIndex: "21",
        }}
      ></a>
      <Header />
      <Us />
      <Flags />
      <MissionVision />
      <Certification />
      <Contents />
      <Modality />
      <FamilyTeam />
      <FoundingTeam />
      <TeachersTeam />
      {/*<CourseTeachers />*/}
      <Graduates />
      <Testimony />
      <MyGallery />
      <StudentWorks/>
      <Contact />
    </div>
  );
};

export default App;
