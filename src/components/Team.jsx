import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";
import TeamData from "@/static/TeamData";
import Theme from "@/theme/Theme";

export default function Team() {
  return (
    <Box bgColor={Theme.bgDarkShade}> 
        <Container maxW={"6xl"} py={16}>
      <SectionTitle title={"Our Team"} heading={"Our Top-Notch Magicians"} />
      <Flex mt={24} w={"100%"} justifyContent={"space-between"} gap={4}>
        {TeamData.slice(0, 3).map((item, idx) => (
          <TeamCard data={item} key={idx} />
        ))}
      </Flex>
      <Flex mt={24} w={"100%"} justifyContent={"space-evenly"} gap={4}>
        {TeamData.slice(3, 5).map((item, idx) => (
          <TeamCard data={item} key={idx} />
        ))}
      </Flex>
    </Container>
    </Box>
  );
}
