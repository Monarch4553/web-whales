import Theme from "@/theme/Theme";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import PickUsCard from "./PickUsCard";
import ChooseUsData from "@/static/ChooseUsData";

export default function ChooseUs() {
  return (
    
 
        <Container maxW={"7xl"} py={16}>
        <SectionTitle
          title={"Reasons to choose Us?"}
          heading={"A tip of our Iceberg."}
        />
        <SimpleGrid pt={12} columns={4} gap={4}>
          {ChooseUsData.map((item, idx) => (
            <PickUsCard key={idx} data={item} />
          ))}
        </SimpleGrid>
      </Container>
 
    
  );
}
