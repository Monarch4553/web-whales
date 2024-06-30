import Theme from "@/theme/Theme";
import {
  Box,
  Button,
  Container,
   
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import TypingEffect from "./TypingEffect";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


export default function Hero() {
  
  const words = [
    { text: 'A',className:'text-8xl' },
    { text: 'Complete', className: 'text-8xl' },
    { text: 'Web+App', className: 'text-8xl' },
    { text: 'Solution', className: 'text-8xl' },
    { text: 'Tech', className: 'text-8xl' },
  ];

  const bgImg = `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='72' height='43.875' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='m14.296 7.185 7.236 7.234L36.002-.048l14.47 14.47 7.236-7.233L36-14.518Zm-7.275 7.251 7.258 7.26 7.259-7.26-7.258-7.259zm-28.798 14.76 7.237 7.237L-.023 21.916 14.452 36.39l7.26-7.258L0 7.42Zm50.746 7.193-7.258-7.258-7.26 7.258 7.26 7.26zm57.568.046 7.24-7.238L72 7.42 50.282 29.137l7.259 7.259L72.02 21.918Zm-28.993-.042-7.26-7.258-7.258 7.258 7.26 7.26zm.233 14.742L36 29.358 14.223 51.135l7.258 7.258L36 43.875l14.518 14.517ZM50.453 14.45l7.259 7.26 7.258-7.26-7.258-7.257z'  stroke-width='1' stroke='hsla(219, 83%, 49%, 0.1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`;
  return (
    <Box bg={bgImg}>
      <Container maxW={"6xl"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          pb={32}
          gap={12}
          minH={"90vh"}
        >
          <Flex alignItems={"center"} flexDir={"column"} gap={4} maxW={"4xl"}>
            <Heading textShadow={`0px 0px 14px ${Theme.primaryColor}`}
              textAlign={"center"}
              color={"gray.100"}
              fontWeight={700}
              lineHeight={1.3}
              fontSize={"80px"}
            >
              We Are{" "}
              <Text textShadow={'0px 0px'} color={Theme.primaryColor} as={"span"} fontWeight={700}>
                WebWhales
              </Text>
              <br /> A complete Web+App Solution tech.
            </Heading>

            <TypewriterEffectSmooth
        words={words}
        className="typewriter-effect-smooth"
        cursorClassName="smooth-cursor h-20"
      />

           <Text>
           Need a budget-friendly, cross-platform mobile app and website using React Native, Expo, and modern web technologies? You’re in the right place.
           </Text>
             
             
        <a href="https://api.whatsapp.com/send?phone=918837793351" target="_blank">
        <Button 
              color={"white"}
              rightIcon={<FaArrowRight size={"20px"} />}
              transform="scale(1)"
              fontSize={"18px"}
              transition="all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
              _hover={{
                bgColor: Theme.secondaryColor,
                transform: "scale(1.1)",
              }}
              bgColor={Theme.primaryColor}
              borderRadius={32}
              py={8}
              px={10}
              w={"fit-content"}
            >
              Chat on WhatsApp
            </Button>
        </a>
            
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
