import React from "react";
import Link from "next/link";
import { Flex, Text, Heading, Box, Container, Image, Button } from "@chakra-ui/react";

export default function ChooseGlamping({ ...props }) {
  return (
    <Container {...props} w="100%" maxW={["95vw", null, "60vw"]}>
      <Heading color="brand.200" textAlign={{ base: "center", lg: "left" }} as="h1" size="lg" mt="3rem" mb="3rem">
        Pilih Tempat Glampingmu !
      </Heading>
      <Flex justifyContent="space-around" color="white">
        <Box cursor="pointer">
          <Image src="/assets/gunung.png" />
          <Heading textAlign="center" size="md" mt="1.5rem">
            Gunung
          </Heading>
        </Box>
        <Box ml="2rem" cursor="pointer">
          <Image src="/assets/pantai.png" />
          <Heading textAlign="center" size="md" mt="1.5rem">
            Pantai
          </Heading>
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center">
        <Text color="white" textAlign="center" mt="5rem">
          Punya tempat Glamping?
        </Text>
        <Link href="/">
          <Button
            bg="brand.300"
            color="#3B3B3B"
            _hover={{
              bg: "brand.300",
            }}
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            mt="3"
          >
            Daftarkan Tempat Glampingmu!
          </Button>
        </Link>
      </Flex>
    </Container>
  );
}
