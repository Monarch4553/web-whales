import Theme from "@/theme/Theme";
import { Box, Container, SimpleGrid, Thead } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import PortfolioCard from "./PortfolioCard";
import PortfolioData from "@/static/PortfolioData"; 
export default function Portfolio() {
  return (
    <Box id="portfolio"   minH={"85vh"}>
      <Container py={16} maxW={"7xl"}>
        <SectionTitle
          title={"Our Apps"}
          heading={"Various Apps we worked on..."}
        />
        <SimpleGrid mt={6} columns={{ base: 1, xl: 2 }} gap={8}>
          {PortfolioData.map((item, idx) => (
            <PortfolioCard key={idx} data={item} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
