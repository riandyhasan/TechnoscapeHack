import React from "react";
import { Flex, Box, Image, Heading, Text, Link, Button, useDisclosure } from "@chakra-ui/react";
import Reserve from "./ReserveForm";
import Modal from "../Modal/Modal";

export default function CampType(...props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex {...props} my="3rem" d="column">
      <Modal
        title="Reservation"
        content={
          <>
            <Reserve />
          </>
        }
        isOpen={isOpen}
        onClose={onClose}
      />
      <Heading color="brand.300">Camp Types</Heading>
      <Box overflow="hidden" color="white" bg="#272727" w="100%" mt="5">
        <Flex>
          <Box maxW="md" color="white" my="2rem">
            <Image src="/assets/standardcamp.png" />
          </Box>

          <Box ml="2rem" mt="2rem">
            <Flex alignItems="baseline" justifyContent="space-between">
              <Box>
                <Heading fontSize="2xl" mr="5rem">
                  Standard Camp
                </Heading>
                max 7 guests
              </Box>
              <Box>
                <Box ml="15rem">
                  <Heading fontSize="xl">Rp 1.250.000</Heading>3 camps left
                </Box>
              </Box>
            </Flex>

            <Box lineHeight="tight">Jarak</Box>
            <Box fontWeight="semibold" as="h4">
              349 km
            </Box>
            <Box lineHeight="tight" mt="5">
              Fasilitas
            </Box>
            <Box mt="5">
              <Text>3 single bed</Text>
              <Text>2 double bed</Text>
              <Text>2 restroom</Text>
            </Box>

            <Flex alignItems="baseline" justifyContent="flex-end">
              <Button
                mt="2"
                bg="brand.300"
                color="brand.100"
                _hover={{
                  bg: "brand.300",
                }}
                onClick={onOpen}
              >
                Reserve
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
