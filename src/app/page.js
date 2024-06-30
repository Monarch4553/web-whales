import About from "@/components/About";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Portfolio from "@/components/Portfolio";
import Scroller from "@/components/Scroller";

import SkillSet from "@/components/SkillSet";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WebPortfolio from "@/components/WebPortfolio";
import Theme from "@/theme/Theme";
import { Box, Button } from "@chakra-ui/react";

import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const buttonStyles = {
    _hover: { bgColor: Theme.secondaryColor, transform: "scale(1.1)" },
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    position: "absolute",
    bgColor: Theme.primaryColor,

    mt: "-22px",
    color: "white",
    transform: "scale(1)",
    transition: "all 0.3s ease",
  };

  return (
    <Box bgColor={Theme.bgLightShade}>
      {/* <Hero /> */}
      <About />
      <SkillSet />

      <Portfolio />
      <WebPortfolio />
      <Team />
      {/* <Scroller /> */}
      <Testimonials />

      <Metrics />
      <ChooseUs />
      <a
        style={{ zIndex: 50 }}
        href="https://api.whatsapp.com/send?phone=918837793351"
        target="_blank"
      >
        <Button {...buttonStyles} position={"fixed"} right={8} bottom={8}>
          <FaWhatsapp size={"50px"} />
        </Button>
      </a>
    </Box>
  );
}
