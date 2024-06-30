import Theme from "@/theme/Theme";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function PortfolioCard({ data }) {
 
  return (
    <Flex
  mt={6}
  transform={"scale(1)"}
  _hover={{ transform: "scale(0.9)" }}
  transition={"transform 1s cubic-bezier(0.16, 1, 0.3, 1)"}
  px={{ base: 2, md: 4 }}
  py={{ base: 12, md: 8 }}
  bgColor={"gray.700"}
  borderRadius={16}
  gap={{ base: 4, md: 8 }}
  flexDirection={{ base: "column", md: "row" }}
  justifyContent={"space-between"}
>
<Flex
  height={{ base: "auto", md: "100%" }}
  w={{ base: "100%", md: "45%" }}
  flexDir={"column"}
  mb={{ base: 4, md: 0 }} 
>
  <video
    style={{
      borderRadius: '24px',
      width: '100%',
      height: 'auto',
      maxHeight: '500px',
      objectFit: 'contain'
    }}
    preload=""
    muted
    autoPlay
    loop
    playsInline
  >
    <source src={data?.video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Flex>
  <Flex
    w={{ base: "100%", md: "55%" }}
    flexDir={"column"}
    textAlign={{ base: "center", md: "left" }}
  >
    <Heading fontSize={{ base: "26px", md: "32px" }} as={"h6"} color={Theme.secondaryColor}>
      {data?.name}
    </Heading>
    <Text px={{base:2,md:0}}
      flexGrow={1}
      display={"flex"}
      my={{base:4,md:2}}
      color={"gray.400"}
      lineHeight={2}
      noOfLines={12}
    >
      {data?.description}
    </Text>
    <Flex gap={{base:4,md:6,xl:0}} justifyContent={{ base: "center", xl:'space-between'  }} flexWrap={"wrap"}>
      {data?.tags.map((item, idx) => (
        <Flex
          key={idx}
          w={"48px"}
          height={"48px"}
          borderRadius={"50%"}
          color={"white"}
          bgColor={Theme.primaryColor}
          justifyContent={"center"}
          alignItems={"center"}
          m={{ base: 1, md: 0 }}
        >
          {item}
        </Flex>
      ))}
    </Flex>
  </Flex>
</Flex>

  );
}
