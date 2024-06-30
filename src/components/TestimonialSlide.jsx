import React from "react";
import { Box, SimpleGrid, Flex, Text, Heading, Button,Image } from "@chakra-ui/react";
import Theme from "@/theme/Theme";
 

function TestimonialSlide({ data }) {
  
  return (
    <Flex 
  px={{ base: 4, md: 20 }} 
  py={{ base: 8, md: 16 }} 
  gap={{ base: 4, md: 12 }} 
  flexDirection={{ base: 'column', md: 'row' }} 
  justifyContent={"space-between"}
>
  <Image
    style={{ borderRadius: "18px" ,objectFit:'cover'}}
    width={{ base: "100%", md: "320px" }}
    height={{ base: "auto", md: "320px" }}
    src={data?.image}
    alt="Testimonial Image of a women."
  />

  <Flex 
    flexDir={"column"} 
    mt={{ base: 4, md: 0 }}
  >
    <Heading 
      color={'white'} 
      mb={1} 
      fontSize={{ base: "20px", md: "28px" }} 
      as={"h6"}
    >
      /{data?.name}
    </Heading>
    <Text 
      noOfLines={{ base: 3, md: 6 }}
      flexGrow={1}
      display={"flex"}
      my={2} 
      fontSize={{ base: '14px', md: '18px' }}
      color={"gray.300"}
      lineHeight={{base:1.6,md:2}}
    >
      {data?.description}
    </Text>
  </Flex>
</Flex>
  );
}

export default TestimonialSlide;
