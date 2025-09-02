import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";
import Footer from "../components/Footer";

type LandingProps = {
  darkMode: boolean;
  switchTheme: () => void;
};

// { darkMode, switchTheme }: LandingProps
// darkMode={darkMode} switchTheme={switchTheme}
const Landing = () => {
  return (

    <div className="">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>


  );
};

export default Landing;
