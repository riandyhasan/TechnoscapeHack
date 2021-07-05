import React from "react";
import { Flex, Box, Image, Heading, Text, ListItem, UnorderedList, Grid, GridItem, Link, Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

export default function ProductDetails(...props) {
  return (
    <Flex {...props} my="3rem">
      <Box overflow="hidden" color="white" fontWeight="light" w="100%">
        <Flex>
          <Box maxW="md" ml="2rem" color="white">
            <Image src="/assets/item/1.png" />
            <Flex mt="5">
              <Button bg=" #272727">Facility</Button>
              <Button bg=" #272727" ml="5">
                Camp Types
              </Button>
              <Button bg=" #272727" ml="5">
                Review
              </Button>
            </Flex>
          </Box>

          <Box ml="5rem">
            <Flex alignItems="baseline" justifyContent="space-between">
              <Box>
                <Heading fontSize="2xl" mr="5rem">
                  Glamping Legok Kendoy, Ciwedey
                </Heading>
                Ciwedey, Bandung
              </Box>
              <Box>
                <Box>
                  <Box d="flex" mt="2" alignItems="center" color="brand.200">
                    <Box color="brand.300">
                      <AiFillStar />
                    </Box>
                    4.8
                  </Box>
                  124 Ratings
                </Box>

                <Button
                  mt="2"
                  bg="brand.300"
                  color="brand.100"
                  _hover={{
                    bg: "brand.300",
                  }}
                  style={{ boxShadow: "0px 4px 25px #FFF06A" }}
                >
                  Book Now
                </Button>
              </Box>
            </Flex>

            <Box lineHeight="tight">Jarak</Box>
            <Box fontWeight="semibold" as="h4">
              349 km
            </Box>
            <Box lineHeight="tight" mt="5">
              Fasilitas
            </Box>
            <Box>
              <UnorderedList>
                <ListItem>BBQ</ListItem>
                <ListItem>Toilet</ListItem>
                <ListItem>WiFi</ListItem>
                <ListItem>Pool</ListItem>
              </UnorderedList>
            </Box>

            <Flex alignItems="baseline" justifyContent="space-between">
              <Box mt="3rem">7-15 guests</Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
