import Theme from "@/theme/Theme";
import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function SectionTitle({ title, heading }) {
  return (
    <Flex gap={4} flexDir={"column"} maxW={"500px"}>
      <Heading fontSize={'28px'} as={"h3"} color={Theme.primaryColor}>
        /
        <Heading ml={2} fontSize={'24px'} as={"span"} color={"gray.400"}>
          {title}
        </Heading>
      </Heading>
      <Heading as={"h2"} color={"white"}>
        {heading}
      </Heading>
    </Flex>
  );
}
