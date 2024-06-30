 
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
 
import React from "react";

export default function PickUsCard({data}) {
  return (
    <Flex  transform={"scale(1)"}
    _hover={{ transform: "scale(0.9)" }}
    transition={"transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"}
      overflow={"hidden"}
      minH={"350px"}
      borderRadius={20}
      flexDir={"column"} maxW={{base:'350px',sm:'450px',md:'initial'}} mx={'auto'}
    >
      <Flex
        bgColor={"gray.600"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"50%"}
      >
        <Image height={120}   alt="3d icon" src={data?.icon} />
      </Flex>
      <Flex
        gap={2}
        px={4}
        py={4}
        bgColor={"gray.700"}
        flexDir={"column"}
        height={"50%"}
      >
        <Heading as={"h6"} fontSize={"26px"} color={"gray.300"}>
      {data?.name}
        </Heading>
        <Text lineHeight={1.7} noOfLines={4} color={"gray.400"}>
         {data?.description}
        </Text>
      </Flex>
    </Flex>
  );
}
