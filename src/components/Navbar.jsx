import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
 
import CustomNavLink from "./CustomNavLink";
import NavLinks from "@/static/NavLinks";
import Theme from "@/theme/Theme";

export default function Navbar() {

  return (
    <Box   backdropFilter={'blur(8px)'} zIndex={50}  background={'transparent'} top={0} position={"sticky"}>
      <Container maxW={"6xl"}>
        <Flex
          minH={"100px"}
          alignItems={"center"}
          px={2}
          justifyContent={"space-between"}
        >
          <Image  alt="Company Logo" height={49} quality={100} width={150} src={"/logo.webp"} />
          <Flex gap={2}>
            {NavLinks.map((item,idx)=><CustomNavLink data={item} key={idx}/>)}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
