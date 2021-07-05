import React from "react";
import { Flex, Box, Image, Heading, Text, Spacer } from "@chakra-ui/react";
import { FaCoins, FaCheckCircle } from "react-icons/fa";

export default function User(...props) {
  return (
    <Flex {...props} color="white" alignItems="center">
      <Box maxW="xl" my="2rem" ml="5rem">
        <Image src="/assets/user.png" />
      </Box>

      <Box ml="2rem">
        <Flex>
          <Box>
            <Heading fontSize="3xl">Ravi Deevan</Heading>
            <Box my="2rem">Bandung, Jawa Barat</Box>
            <Flex justifyContent="space-between">
              <Box color="brand.300">
                <Text>My Points</Text>
                <Flex alignItems="center">
                  <FaCoins />
                  <Text ml="4" color="white">
                    Rp 550.000{" "}
                  </Text>
                </Flex>
              </Box>
              <Spacer />
              <Flex ml="22rem" alignItems="center">
                <Box fontWeight="light">
                  <Flex justifyContent="space-around" alignItems="center">
                    <Heading fontSize="lg" mr="5rem">
                      Certificate
                    </Heading>
                    <Box color="brand.300">
                      <FaCheckCircle size="1.2rem" />
                    </Box>
                  </Flex>
                  verified
                </Box>
                <Box maxW="md" ml="5rem">
                  <Image src="/assets/certificate.png" />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
