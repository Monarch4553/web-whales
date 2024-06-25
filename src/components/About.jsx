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
      <Container px={2} py={16} maxW={"6xl"}>
        <Flex gap={16}>
          <Flex w={"50%"}>
            <AnimationWrapper variants={imageVariants}>
              <Box borderRadius={24} overflow={"hidden"} mt={-36}>
                <Image
                  objectFit={"cover"}
                  transition={"all 0.4s ease"}
                  transform={"scale(1)"}
                  _hover={{ transform: "scale(1.1)" }}
                  src={"/about-image-2.png"}
                  height={"700"}
                  width={"500"}
                  alt="About us image"
                />
              </Box>
            </AnimationWrapper>
          </Flex>
          <Flex flexDir={"column"} w={"50%"}>
            <SectionTitle
              title={"About Us"}
              heading={
                "We have been developing mobile apps and websites since 2018"
              }
            />
            <Text
              mt={4}
              fontSize={"18px"}
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
        <Flex mt={14} gap={16}>
          <Flex mt={24} flexDir={"column"} w={"50%"}>
            <SectionTitle
              title={"About me "}
              heading={"The Technology Stack that we use."}
            />
            <Text
              mt={4}
              fontSize={"18px"}
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
          <Flex w={"50%"}>
            <AnimationWrapper variants={bottomImageVariant}>
              <Box borderRadius={24} overflow={"hidden"} mb={-36}>
                <Image
                  objectFit={"cover"}
                  transition={"all 0.4s ease"}
                  transform={"scale(1)"}
                  _hover={{ transform: "scale(1.1)" }}
                  alt="About us image"
                  src={"/about-image-1.jpeg"}
                  height={"700"}
                  width={"500"}
                />
              </Box>
            </AnimationWrapper>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
