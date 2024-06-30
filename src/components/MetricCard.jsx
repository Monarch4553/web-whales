import { Divider, Flex, Heading } from "@chakra-ui/react";
 
import Counting from "./Counting"; 
 
export default function MetricCard({ data }) {
  return (
    <Flex mb={{base:12,lg:0}}
      gap={{base:2,lg:4}}
      flexDir={"column"}
      color={"white"}
      justifyContent={"center"}
      alignItems={"center"}
    >

    <Flex gap={2}>
     {data?.icon}
    <Heading color={"gray.400"} fontWeight={500} fontSize={"30px"} as={"h4"}>
        {data?.name}
      </Heading>
    </Flex>
      <Counting num={data?.num} />
      <Divider width={"200px"} borderBottom={"4px solid white"} />
    </Flex>
  );
}
