"use client";
import Theme from "@/theme/Theme";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

import SectionTitle from "./SectionTitle";

import WebsitePortfolioData from "@/static/WebsitePortfolioData";
import WebsiteCard from "./WebsiteCard";
import { useState } from "react";
export default function WebPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    
      <Container py={16} maxW={"7xl"}>
        <SectionTitle
          title={"Our Websites"}
          heading={"Various Websites we worked on..."}
        />
        <SimpleGrid mt={6} columns={{ base: 1, md: 2 }} gap={12}>
          {WebsitePortfolioData.map((item, idx) => (
            <WebsiteCard    key={idx}
              idx={idx}
              setHoveredIndex={setHoveredIndex}
              hoveredIndex={hoveredIndex}
           
              data={item}
            />
          ))}
        </SimpleGrid>
      </Container>
  
  );
}
