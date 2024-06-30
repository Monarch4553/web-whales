import Theme from "@/theme/Theme";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  Button,
  VisuallyHidden,Image
} from "@chakra-ui/react";
import React from "react";
import CustomNavLink from "./CustomNavLink";
import NavLinks from "@/static/NavLinks";
 
import CopyToClipBoard from "./CopyToClipBoard";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      color={"white"}
      bg={Theme.primaryColor}
      size={"sm"}
      px={"10px"}
      py={"18px"}
      cursor={"pointer"}
      as={"a"}
      target="_blank"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: Theme.secondaryColor,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function Footer() {
  return (
    <Box py={6} bgColor={Theme.bgDarkShade}>
      <Container maxW={"7xl"}>
        <Flex
          py={10}
           gap={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex alignItems={"center"} gap={6} w={{ base: "100%", md: "50%" }}>
            <Image
              style={{ borderRadius: "50%" }}
              
              alt="Company Logo in footer"
              width={{base:'100px'}}
              src={"/trademark.webp"}
            />

            <Flex flexDir={"column"}>
              <Heading
                fontSize={{ base: "30px", md: "40px" }}
                color={Theme.primaryColor}
              >
                WebWhales
              </Heading>
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                as={"h4"}
                color={"gray.400"}
              >
                Transforming Ideas <br /> into Experiences.
              </Heading>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"end"}
            w={{ base: "100%", md: "50%" }}
            flexDir={"column"}
            mt={{ base: 4, md: 0 }}
          >
            <Flex gap={4} flexDir={"column"}>
            <Box>
                <Flex
                  px={2}
                  justifyContent={{ base: "center", md: "end" }}
                  gap={6}
                >
                  <SocialButton
                    label={"Facebook"}
                    href={"https://x.com/WebWhaleCoders"}
                  >
                    <FaFacebook size={"18px"} />
                  </SocialButton>
                  <SocialButton
                    label={"Whatsapp"}
                    href={"https://api.whatsapp.com/send?phone=918837793351"}
                  >
                    <FaWhatsapp size={"18px"} />
                  </SocialButton>
                </Flex>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  py={3}
                  gap={4}
                  alignItems={"center"}
                  bgColor={"gray.700"}
                  px={4}
                >
                  <Text color={"gray.300"} fontWeight={500}>
                    webwhalesolution@gmail.com
                  </Text>
                  <CopyToClipBoard text={"webwhalesolution@gmail.com"}>
                    <FaCopy />
                  </CopyToClipBoard>
                </Flex>
              </Box>

            
            </Flex>
          </Flex>
        </Flex>
      </Container>

      <Divider my={2} borderBottom={"3px solid lightgray"} />
      <Container maxW={"7xl"}>
        {" "}
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex
            gap={1}
            flexWrap={"wrap"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            {NavLinks.map((item, idx) => (
              <CustomNavLink data={item} key={idx} />
            ))}
          </Flex>
          <Text fontSize={"14px"} color={"gray.400"} mt={{ base: 4, md: 0 }}>
            Copyright © 2024 WebWhale. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
