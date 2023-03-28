import { MainWrapper } from "./App.styled";
import { LogoBar } from "./components/logoBar/LogoBar.jsx";
import { HeroSection } from "./components/heroSection/HeroSection.jsx";
import { CoursesSection } from "./components/coursesSection/CoursesSection.jsx";

function App() {
  return (
    <MainWrapper>
      <LogoBar type="light" />
      <HeroSection />
      <CoursesSection />
      <LogoBar type="dark" />
    </MainWrapper>
  );
}

export default App;
