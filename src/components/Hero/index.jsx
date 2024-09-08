import Theme from "@/theme/Theme";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  const bgImg = `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(12) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='rgba(255, 255, 255, 0)'/><path d='M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z'  stroke-width='0.5' stroke='hsla(219, 83%, 49%, 0.1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`;

  
  return (
    <Box  bg={bgImg}>
      <Container my={"auto"} maxW={"6xl"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={12}
          minH={"90vh"}
        >
 
          <Flex alignItems={"center"} flexDir={"column"} gap={4} maxW={"4xl"}>
            <Heading
              textShadow={`0px 0px 14px ${Theme.secondaryColor}`}
              textAlign={"center"}
              color={"gray.100"}
              fontWeight={700}
              lineHeight={1.3}
              fontSize={{ base: "34px", sm: "40px", md: "80px" }}
            >
              We Are{" "}
              <Text 
                textShadow={"0px 0px"}
                color={Theme.secondaryColor}
                as={"span"}
                fontWeight={700}
              >
                WebWhales
              </Text>
              <br /> A complete Web+App Solution tech.
            </Heading>

            <a
              href="https://api.whatsapp.com/send?phone=918837793351"
              target="_blank"
            >
              <Button
                mt={8}
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
