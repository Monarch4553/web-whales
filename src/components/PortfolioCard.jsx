import Theme from "@/theme/Theme";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function PortfolioCard({ data }) {
 
  return (
    <Flex mt={6}
      transform={"scale(1)"}
      _hover={{ transform: "scale(0.9)" }}
      transition={"transform 1s cubic-bezier(0.16, 1, 0.3, 1)"}
      px={4}
      py={8}
      bgColor={"gray.700"}
      borderRadius={16}
      gap={8}
      justifyContent={"space-between"}
    >
      <Flex height={'100%'}  w={"45%"} flexDir={"column"}>
        <video style={{borderRadius:'16px',height:'100%',objectFit:'cover'}} preload="" muted autoPlay loop playsInline>
          {" "}
          <source src={data?.video} type="video/mp4" /> Your browser does not
          support the video tag.
        </video>
      </Flex>
      <Flex w={"55%"} flexDir={"column"}>
        <Heading fontSize={"24px"} as={"h6"} color={Theme.secondaryColor}>
          {data?.name}
        </Heading>
        <Text
          flexGrow={1}
          display={"flex"}
          my={2}
          color={"gray.400"}
          lineHeight={2}
          noOfLines={12}
        >
          {data?.description}
        </Text>
        <Flex justifyContent={"space-between"}>
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
            >
              {item}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
