import Theme from "@/theme/Theme";
import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import AnimationWrapper from "./AnimationWrapper";

export default function About() {
  const imageVariants = {
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 1, delay: 0.3 },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  const bottomImageVariant = {
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 1, delay: 0.3 },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <Box id="about-us" bgColor={Theme.bgDarkShade}>
      <Container px={4} py={16} maxW={"6xl"}>
        <Flex
          mx={"auto"}
          flexDir={{ base: "column", md: "row" }}
          maxW={{ base: "400px", md: "initial" }}
          gap={{ base: 8, md: 10 }}
        >
          <Flex w={{ base: "100%", md: "50%" }}>
            <AnimationWrapper variants={imageVariants}>
              <Box
                borderRadius={24}
                overflow={"hidden"}
                mt={{ base: 0, md: -36 }}
              >
                <Image
                  objectFit={"cover"}
                  transition={"all 0.4s ease"}
                  transform={"scale(1)"}
                  _hover={{ transform: "scale(1.1)" }}
                  src={"/about-image-2.png"}
                  maxW={{ base: "full", sm: "400px", md: "full" }}
                  height={{ base: "500px", md: "700px" }}
                  alt="About us image"
                />
              </Box>
            </AnimationWrapper>
          </Flex>
          <Flex flexDir={"column"} w={{ base: "100%", md: "50%" }}>
            <SectionTitle
              title={"About Us"}
              heading={
                "We have been developing mobile apps and websites since 2018"
              }
            />
            <Text
              mt={4}
              fontSize={{ base: "16px", md: "18px" }}
              textAlign={"justify"}
              color={"gray.400"}
            >
              At WebWhales, we are committed to excellence, combining creativity
              and technical expertise to transform ideas into reality. Partner
              with us to navigate the digital landscape and achieve your online
              goals with confidence and precision.
            </Text>
          </Flex>
        </Flex>

        {/* Lower Card */}
        <Flex
          mt={{ base: 32, md: 14 }}
          mx={"auto"}
          maxW={{ base: "400px", md: "initial" }}
          gap={{ base: 8, md: 10 }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Flex
            mt={{ base: 8, md: 24 }}
            flexDir={"column"}
            w={{ base: "100%", md: "50%" }}
          >
            <SectionTitle
              title={"About me "}
              heading={"The Technology Stack that we use."}
            />
            <Text
              mt={4}
              fontSize={{ base: "16px", md: "18px" }}
              textAlign={"justify"}
              color={"gray.400"}
            >
              We leverage the latest technologies to build high-quality web and
              mobile applications. Our expertise includes ReactJS, React Native,
              Node.js, and Python, ensuring robust, scalable, and dynamic
              solutions. By integrating modern frameworks and tools, we deliver
              exceptional user experiences and maintain the highest standards of
              performance and security.
            </Text>
          </Flex>
          <Flex w={{ base: "100%", md: "50%" }}>
            <AnimationWrapper variants={imageVariants}>
              <Box
                borderRadius={24}
                overflow={"hidden"}
                mb={{ base: 0, md: -36 }}
              >
                <Image
                  objectFit={"cover"}
                  transition={"all 0.4s ease"}
                  transform={"scale(1)"}
                  _hover={{ transform: "scale(1.1)" }}
                  src={"/about-image-1.jpeg"}
                  w={{base:"400px",md:'initial'}}
                  maxW={{ base: "full", sm: "400px", md: "full" }}
                  height={{ base: "500px", md: "700px" }}
                  alt="About us image"
                />
              </Box>
            </AnimationWrapper>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
