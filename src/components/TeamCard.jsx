import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function TeamCard({ data }) {
  return (
    <Flex
      minW={"250px"}
      alignItems={"center"}
      color={"white"}
      flexDir={"column"}
    >
      <Image 
        transition={"transform 0.4s cubic-bezier(0, 0.55, 0.45, 1)"}
        transform={"scale(1)"}
        _hover={{ transform: "scale(1.1)" }}
        objectPosition={"top"}
        mb={4}
        objectFit={"cover"}
        alt="Team member image"
        src={data?.image}
        borderRadius={"50%"}
        height={"200px"}
        width={"200px"}
      />

      <Heading
        mb={3}
        as={"h6"}
        fontWeight={700}
        fontSize={"30px"}
        noOfLines={2}
      >
        {data?.name}
      </Heading>
      <Flex alignItems={"center"} flexDir={"column"} gap={2}>
        {data?.designations.map((item, idx) => (
          <Text
            key={idx}
            fontWeight={400}
            fontSize={"20px"}
            color={"gray.400"}
            noOfLines={2}
          >
            - {item}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}
