import React from "react";
import { Flex, Box, Image, Text, Spacer } from "@chakra-ui/react";

export default function Facility(...props) {
  return (
    <Flex {...props} alignItems="center" justityContent="space-between" ml="2rem" my="3rem" color="white">
      <Box ml="2rem">
        <Text fontWeight="semibold" mt="5">
          Facility
        </Text>
        <Text mt="5">Spa</Text>
        <Text mt="5">Barbaque</Text>
        <Text mt="5">Fliying fox</Text>
      </Box>
      <Spacer />
      <Flex alignItems="center">
        <Box ml="10rem">
          <Image src="/assets/facility/2.png" mr="5" _hover={{ transform: "scale(1.05)", opacity: "0.3" }} />
          <Image src="/assets/facility/3.png" mt="5" _hover={{ transform: "scale(1.05)", opacity: "0.3" }} />
        </Box>
        <Box>
          <Image src="/assets/facility/1.png" _hover={{ transform: "scale(1.05)", opacity: "0.3" }} />
        </Box>
      </Flex>
    </Flex>
  );
}
