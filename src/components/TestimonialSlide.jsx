import React from "react";
import { Box, SimpleGrid, Flex, Text, Heading, Button } from "@chakra-ui/react";
import Theme from "@/theme/Theme";
import Image from "next/image";

function TestimonialSlide({ data }) {
  
  return (
    <Flex px={20} py={16} gap={12} justifyContent={"space-between"}>
      <Image
        style={{ borderRadius: "18px" ,objectFit:'cover'}}
        width={"320"}
        height={"320"}
        src={data.image}
        alt="Testimonial Image of a women."
      />

      <Flex flexDir={"column"}>
        <Heading color={'white'} mb={1} fontSize={"28px"} as={"h6"}>
          /{data?.name}
        </Heading>
        <Text noOfLines={6}
          flexGrow={1}
          display={"flex"}
          my={2} fontSize={'18px'}
          color={"gray.300"}
          lineHeight={2}
        
        >
          {data?.description}
        </Text>
        
      </Flex>
    </Flex>
  );
}

export default TestimonialSlide;
