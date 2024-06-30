"use client";
import React, { useEffect, useState } from "react";
import { Flex, Box,   Button } from "@chakra-ui/react";
import TestimonialSlide from "./TestimonialSlide";
 
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Theme from "@/theme/Theme";
import TestimonialsData from "@/static/TestimonialsData";

 
function TestimonialsSlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all 1s ease",
    ml: `-${currentSlide * 100}%`,
  };

  const slidesCount = TestimonialsData.length;

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      mt={12}
      borderRadius={16}
      bgColor={"gray.700"}
      w="full"
      alignItems="center"
      justifyContent="center"
      pos={"relative"}
    >
      <Flex w="full" overflow="hidden">
        <Flex w="full" {...carouselStyle}>
          {TestimonialsData.map((item, idx) => (
            <Box key={idx} boxSize="full" flex="none">
              <TestimonialSlide data={item} />
            </Box>
          ))}
        </Flex>
        <Button p={0}
          position={"absolute"}
          id="prevbtn" display={{base:'none',md:'block'}}
          left="2"
          top={"45%"}  color={'white'}
          _hover={{ bgColor: "transparent", color: Theme.primaryColor }}
          bgColor={"transparent"}
          onClick={() => prevSlide()}
        >
          <BsChevronLeft size={"40px"} />
        </Button>

        <Button p={0} display={{base:'none',md:'block'}}
          position={"absolute"}
          id="nextbtn"
          right="2"
          top={"45%"} color={'white'}
          _hover={{ bgColor: "transparent", color: Theme.primaryColor }}
          bgColor={"transparent"}
          onClick={() => nextSlide()}
        >
          <BsChevronRight size={"40px"} />
        </Button>
      </Flex>
    </Flex>
  );
}

export default TestimonialsSlideShow;
