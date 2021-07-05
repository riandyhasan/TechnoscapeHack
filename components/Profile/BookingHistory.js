import React from "react";
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

export default function CampType(...props) {
  return (
    <Flex {...props} my="3rem" d="column">
      <Heading color="white" ml="2rem">
        Booking History
      </Heading>
      <Box overflow="hidden" color="white" bg="#272727" w="100%" mt="5">
        <Flex>
          <Box maxW="md" color="white" my="2rem" ml="2rem">
            <Image src="/assets/bookinghistory/1.png" />
          </Box>

          <Box ml="2rem" mt="2rem">
            <Flex alignItems="baseline" justifyContent="space-between">
              <Box>
                <Text fontSize="2xl" mr="5rem" fontWeight="light">
                  Glamping Legok Kendoy, Ciwedey
                </Text>
                <Heading fontSize="lg" mt="2">
                  Ciwedey, Bandung
                </Heading>
                <Text fontWeight="light" color="brand.300" mt="2">
                  5/6/21 - 9/6/21
                </Text>
              </Box>
              <Box>
                <Box ml="18rem">
                  <Text fontSize="2xl" fontWeight="light" fontSize="xl">
                    Rp 3.499.000
                  </Text>
                  <Text color="brand.300" mt="2">
                    Super camp
                  </Text>
                  <Text mt="2">5 guest</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box overflow="hidden" color="white" bg="#272727" w="100%" mt="5">
        <Flex>
          <Box maxW="md" color="white" my="2rem" ml="2rem">
            <Image src="/assets/bookinghistory/2.png" />
          </Box>

          <Box ml="2rem" mt="2rem">
            <Flex alignItems="baseline" justifyContent="space-between">
              <Box>
                <Text fontSize="2xl" mr="5rem" fontWeight="light">
                  Glamping Daun Ijo
                </Text>
                <Heading fontSize="lg" mt="2">
                  Cibubur, Bogor
                </Heading>
                <Text fontWeight="light" color="brand.300" mt="2">
                  1/3/21 - 7/3/21
                </Text>
              </Box>
              <Box>
                <Box ml="29rem">
                  <Text fontSize="2xl" fontWeight="light" fontSize="xl">
                    Rp 5.499.000
                  </Text>
                  <Text color="brand.300" mt="2">
                    Super camp
                  </Text>
                  <Text mt="2">5 guest</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
