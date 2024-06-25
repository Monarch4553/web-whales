import Theme from "@/theme/Theme";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";
import AnimationWrapper from "./AnimationWrapper";

export default function SkillCard({ data }) {
  const boxVariant = {
    visible: {
      opacity: 1,
      
      transition: { ease: "easeInOut", duration: 0.6 },
      y: 0,
    },
    hidden: {
      opacity: 0,  
      y: 100,
    },
  };

  return (
    <AnimationWrapper variants={boxVariant}>
      <Flex minH={'330px'}
         
        transform={"scale(1)"}
        _hover={{ transform: "scale(0.9)" }}
        transition={"transform 1s cubic-bezier(0.16, 1, 0.3, 1)"}
        gap={4}
        flexDir={"column"}
        pl={8}
        pr={6}
        py={8}
        borderRadius={24}
        w={"100%"}
        bgColor={"gray.700"} 
      >
        <Flex
          w={"80px"}
          height={"80px"}
          borderRadius={"50%"}
          color={"white"}
          bgColor={Theme.primaryColor}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {data?.icon}
        </Flex>
        <Heading as={"h5"} color={"white"} fontSize={"30px"}>
          {data?.name}
        </Heading>
        <Text
          noOfLines={3}
          flexGrow={1}
          mb={4}
          fontWeight={500}
          color={"gray.400"}
        >
          {data?.description}{" "}
        </Text>
        <Divider
          borderWidth={"3px"}
          borderColor={"white"}
          width={"75px"} 
        />
      </Flex>
    </AnimationWrapper>
  );
}
