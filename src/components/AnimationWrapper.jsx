"use client"

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
 

export default function AnimationWrapper({ variants,children }) {
  const ChakraBox = motion(Box);
  return (
    <ChakraBox  variants={variants} zIndex={3} initial="hidden" whileInView="visible">
      {children}
    </ChakraBox>
  );
}
