import Theme from "@/theme/Theme";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import CustomNavLink from "./CustomNavLink";
import NavLinks from "@/static/NavLinks";
import Image from "next/image";
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
          px={8}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} gap={6} w={"50%"}>
            <Image
              style={{ borderRadius: "50%" }}
              height={40}
              alt="Company Logo in footer"
              width={"130"}
              src={"/trademark.webp"}
            />

            <Flex flexDir={"column"}>
              <Heading fontSize={"40px"} color={Theme.primaryColor}>
                WebWhales
              </Heading>
              <Heading fontSize={"22px"} as={"h4"} color={"gray.400"}>
                Transforming Ideas <br /> into Experiences.
              </Heading>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"50%"}
            flexDir={"column"}
          >
            <Flex gap={4} flexDir={"column"}>
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
                    support@webwhale.com
                  </Text>
                  <CopyToClipBoard text={"support@webwhale.com"}>
                    <FaCopy />
                  </CopyToClipBoard>
                </Flex>
              </Box>

              <Box>
                <Flex px={2} justifyContent={"end"} gap={6}>
                  <SocialButton
                    label={"Twitter"}
                    href={"http://www.dbe-du.org/"}
                  >
                    <FaTwitter size={"18px"} />
                  </SocialButton>
                  <SocialButton
                    label={"Twitter"}
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
            </Flex>
          </Flex>
        </Flex>
        <Divider my={2} borderBottom={"5px solid lightgray"} />
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex gap={1}>
            {NavLinks.map((item, idx) => (
              <CustomNavLink data={item} key={idx} />
            ))}
          </Flex>
          <Text fontSize={"14px"} color={"gray.400"}>
            Copyright © 2024 WebWhale. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
