import React from "react";
import { Flex, Box, Image, Heading, Text, ListItem, UnorderedList, Grid, GridItem, Link } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import Searchbar from "../Landing/Searchbar";

export default function ItemCard(...props) {
  return (
    <Flex {...props} direction="column" justifyContent="center" alignItems="center">
      <Box mt="3rem" mb="5rem">
        <Searchbar minW={{ md: "60vw" }} />
      </Box>
      <Grid gap="5rem">
        <GridItem>
          <Link href="/shop/glamping-legok-kendoy">
            <Box overflow="hidden" color="white" cursor="pointer" fontWeight="light">
              <Flex>
                <Box maxW="md">
                  <Image src="/assets/item/1.png" />
                </Box>

                <Box ml="5rem">
                  <Flex alignItems="baseline">
                    <Heading fontSize="2xl" mr="5rem">
                      Glamping Legok Kendoy, Ciwedey
                    </Heading>

                    <Box>
                      <Box d="flex" mt="2" alignItems="center" color="brand.200">
                        <Box color="brand.300">
                          <AiFillStar />
                        </Box>
                        4.8
                      </Box>
                      124 Ratings
                    </Box>
                  </Flex>

                  <Box lineHeight="tight">Ciwedey, Bandung</Box>

                  <Box lineHeight="tight" mt="5">
                    Jarak
                  </Box>
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

                    <Box>
                      <Box>mulai dari</Box>
                      <Box fontWeight="semibold" as="h2">
                        Rp 1.299.000/ malam
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Box overflow="hidden" color="white" cursor="pointer" fontWeight="light">
            <Flex>
              <Box maxW="md">
                <Image src="/assets/item/2.png" />
              </Box>

              <Box ml="5rem">
                <Flex alignItems="baseline">
                  <Heading fontSize="2xl" mr="5rem">
                    Glamping Legok Kendoy, Ciwedey
                  </Heading>

                  <Box>
                    <Box d="flex" mt="2" alignItems="center" color="brand.200">
                      <Box color="brand.300">
                        <AiFillStar />
                      </Box>
                      4.8
                    </Box>
                    124 Ratings
                  </Box>
                </Flex>

                <Box lineHeight="tight">Ciwedey, Bandung</Box>

                <Box lineHeight="tight" mt="5">
                  Jarak
                </Box>
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

                  <Box>
                    <Box>mulai dari</Box>
                    <Box fontWeight="semibold" as="h2">
                      Rp 1.299.000/ malam
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          <Box overflow="hidden" color="white" cursor="pointer" fontWeight="light">
            <Flex>
              <Box maxW="md">
                <Image src="/assets/item/3.png" />
              </Box>

              <Box ml="5rem">
                <Flex alignItems="baseline">
                  <Heading fontSize="2xl" mr="5rem">
                    Glamping Legok Kendoy, Ciwedey
                  </Heading>

                  <Box>
                    <Box d="flex" mt="2" alignItems="center" color="brand.200">
                      <Box color="brand.300">
                        <AiFillStar />
                      </Box>
                      4.8
                    </Box>
                    124 Ratings
                  </Box>
                </Flex>

                <Box lineHeight="tight">Ciwedey, Bandung</Box>

                <Box lineHeight="tight" mt="5">
                  Jarak
                </Box>
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

                  <Box>
                    <Box>mulai dari</Box>
                    <Box fontWeight="semibold" as="h2">
                      Rp 1.299.000/ malam
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
