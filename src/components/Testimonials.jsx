import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import TestimonialsSlideShow from "./TestimonialsSlideShow";
import Theme from "@/theme/Theme";
import { MdVerifiedUser } from "react-icons/md";
export default function Testimonials() {
  return (
    
     <Container id="reviews" py={16} maxW={"7xl"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <SectionTitle
          title={"Our Testimonials"}
          heading={"What our customers say!"}
        />
      <Flex alignItems={'center'} gap={1}>
      <MdVerifiedUser color={Theme.secondaryColor} size={'24px'} />
        <Text fontWeight={700} fontSize={'18px'} color={Theme.secondaryColor}>
        
          Reviews Verified
        </Text>
      </Flex>
      </Flex>
      <TestimonialsSlideShow />
    </Container>
 
  );
}
