"use client";

import NavLinks from "@/static/NavLinks";
import Theme from "@/theme/Theme";
import {
  Box,
  Flex,
  Text,
  IconButton,
  
  Stack,
  Collapse,
  useColorModeValue,

  useDisclosure,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import CustomNavLink from "./CustomNavLink";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container p={0} maxW={'7xl'}>
      <Flex
        bgColor={Theme.bgLightShade}
 
        minH={"90px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
      
 justifyContent={'space-between'}
        align={"center"}
      >
        <Flex
 
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton display={'flex'} alignItems={'center'} justifyContent={'center'} variant={'unstyled'} color={'white'}
            onClick={onToggle}
            icon={isOpen ? <IoClose size={'22px'} /> : <RxHamburgerMenu size={'18px'} />}
           
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex  w={{base:'initial',md:'100%'}} justifyContent={'space-between'}>
          <Image className="responsive-logo "
            src={"/logo.webp"}
            height={"40"}
            width={"160"} 
            alt="Company Logo"
          />

          
          <Flex display={{ base: "none", md: "flex" }}  gap={1}>
            {NavLinks.map((item, idx) => (
              <CustomNavLink data={item} key={idx} />
            ))}
          </Flex>
        </Flex>

         
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container >
  );
}

 

 

const MobileNav = () => {
  return (
    <Stack
      bgColor={Theme.bgDarkShade}
      p={4}
      display={{ md: "none" }} color={'white'}
    >
      {NavLinks.map((navItem) => (
        <MobileNavItem key={navItem.href} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ name, children, href }) => {
 

  return (
    <Stack spacing={4}  >
      <Box  
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text color={'whiteAlpha.800'}
          fontWeight={600}
        >
          {name}
        </Text>
        
      </Box>

  
    </Stack>
  );
};
