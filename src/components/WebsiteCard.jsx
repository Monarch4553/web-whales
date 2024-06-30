import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import WebTag from "./WebTag";

export default function WebsiteCard({
  data,
  hoveredIndex,
  setHoveredIndex,
  idx,
}) {
  return (
    <Flex
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
      mt={6}
      transform={hoveredIndex === idx ? "scale(1.05)" : "scale(1)"}
      transition={
        "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) , opacity 0.2s linear"
      }
      opacity={hoveredIndex !== null && hoveredIndex !== idx ? 0.1 : 1}
      overflow={"hidden"}
      pt={8}
      bgColor={"gray.700"}
      borderRadius={16}
      gap={8}
      justifyContent={"space-between"}
      flexDir={"column"}
    >
      <Flex gap={2}  px={6}  >
        {data?.tags.map((item, idx) => (
          <WebTag key={idx}>{item}</WebTag>
        ))}
      </Flex>
      <Flex mb={10} px={6} gap={4} w={{base:'100%',md:"60%"}} flexDir={"column"}>
        <Heading
          fontSize={"28px"}
          as={"h6"}
          fontWeight={400}
          color={"gray.300"}
        >
          {data?.heading}
        </Heading>

        <Heading color={"gray.100"} fontSize={"28px"} as={"h6"}>
          {data?.subheading}
        </Heading>
      </Flex>

      <Image
        transition={"transform 1s cubic-bezier(0.16, 1, 0.3, 1)"}
        transform={hoveredIndex === idx ? "scale(1.1)  " : "scale(1) "}
        w={"100%"}
        h={{base:'250px',sm:"500px"}}
        objectFit={"cover"}
        src={data?.image}
        alt="Portfolio websites"
      />
    </Flex>
  );
}
