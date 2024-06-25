import Theme from "@/theme/Theme";
import { Box, Container, SimpleGrid, Thead } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import SkillSetData from "@/static/SkillSetData";
 

export default function SkillSet() {
  const bgImg = `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linecap='square' stroke-width='1' stroke='hsla(219, 83%, 49%, 0.1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`;

  return (
    <Box bg={bgImg} id="skills" pt={40} bgColor={Theme.bgLightShade} minH={"85vh"}>
      <Container py={16} maxW={"8xl"}>
        <SectionTitle
          title={"Our Skillset"}
          heading={"Our extensive development skills"}
        />
        <SimpleGrid mt={12} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={5}>
          
          {SkillSetData.map((item, idx) => (
            <SkillCard key={idx} data={item} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
