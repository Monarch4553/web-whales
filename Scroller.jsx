"use client"
import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const carouselRef = useRef(null);

  const cardImages = [
    { id: 1, src: `/flowimages/1.png`, alt: "Card 1" },
    { id: 2, src: `/flowimages/2.png`, alt: "Card 2" },
    { id: 3, src: `/flowimages/3.png`, alt: "Card 3" },
    { id: 4, src: `/flowimages/4.png`, alt: "Card 4" },
    { id: 5, src: `/flowimages/5.png`, alt: "Card 5" },
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Box h={'40vw'} w="100vw" p={4} position="relative">
        <Flex justify="center" position="relative" height="300px" ref={carouselRef}>
          {/* Static border box */}
          <Image
            src="/flowimages/phoneBody.png"
            alt="Static Background"
            position="absolute"
            width="280px" // Adjust width to match the increased size of images
            height="580px"
            zIndex={1}
          />
          {cardImages.map((image, index) => {
            const imageUrl = image.src;
            const offset = (index - currentIndex + cardImages.length) % cardImages.length;
            const position = offset <= 2 ? offset : offset - cardImages.length;

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.1,
                  x: position * 300, // Adjust positioning based on increased image size
                  rotate: position !== 0 ? Math.random() * 10 - 5 : 0,
                  scale: position !== 0 ? 0.9 : 1
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  width: "280px", // Adjust width to match the increased size of images
                  height: "600px", // Adjust height to match the increased size of images
                  borderRadius: "10px",
                  overflow: "hidden",
                  zIndex: 0,
                }}
              >
                <Image
                  src={imageUrl}
                  alt={image.alt}
                  htmlWidth="100%"
                  htmlHeight="100%"
                  objectFit="cover"
                  borderRadius="10px"
                />
              </motion.div>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default CardCarousel;

