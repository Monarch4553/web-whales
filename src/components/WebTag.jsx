import { Flex, Text } from "@chakra-ui/react";
 

export default function WebTag({ children }) {
  return (
    <Flex
      borderRadius={12}
      bgColor={"gray.500"}
      justifyContent={"center"}
      alignItems={"center"}
      py={2}
      px={4}
    >
      <Text color={'gray.200'}  fontWeight={800}>
        {children}
      </Text>
    </Flex>
  );
}
