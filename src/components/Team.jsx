import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";
import TeamData from "@/static/TeamData";
import Theme from "@/theme/Theme";

export default function Team() {
  return (
    <Box bgColor={Theme.bgDarkShade}>
      <Container maxW={"6xl"} py={16} gap={24}>
        <SectionTitle title={"Our Team"} heading={"Our Top-Notch Magicians"} />
        <Flex gap={{base:12,md:4}} flexDir={{base:'column',md:'row'}} mt={{base:12,md:24}} w={"100%"} justifyContent={"space-between"} >
          {TeamData.slice(0, 3).map((item, idx) => (
            <TeamCard data={item} key={idx} />
          ))}
        </Flex>
        <Flex gap={{base:12,md:4}} flexDir={{base:'column',md:'row'}} mt={{base:12,md:24}} w={"100%"} justifyContent={"space-evenly"}  >
          {TeamData.slice(3, 5).map((item, idx) => (
            <TeamCard data={item} key={idx} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
