import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function CustomNavLink({ data }) {
  return (
    <Link passHref href={data.href}>
      <Box _hover={{ color: "gray.500" }} color={"gray.200"} py={4} px={{base:2,lg:4}}>
        <Text
          textTransform={"uppercase"}
          transition={"all 0.15s ease-in-out"}
          fontWeight={500}
          fontSize={{base:'16px',lg:'18px'}}
        >
          {data.name}
        </Text>
      </Box>
    </Link>
  );
}
