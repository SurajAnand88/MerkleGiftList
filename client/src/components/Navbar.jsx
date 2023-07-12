import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Flex px={6} py={2} justify={"center"}>
      <Text fontSize={"2rem"} fontWeight={"bold"}>
        MerKleGift Lister
      </Text>
    </Flex>
  );
};
