import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Box, Flex, AspectRatio, Heading, Text, Button, Spacer } from "@chakra-ui/react";

export default function Vaksin({ ...props }) {
  return (
    <Flex direction={{ base: "column", lg: "row" }} alignItems="center" {...props} mr="3rem">
      <AspectRatio ratio={241 / 237} position="relative" minW={{ base: "35vw", sm: "25vw", lg: "15vw" }} ml="3.5rem">
        <Image src="/assets/vaksin.png" layout="fill" />
      </AspectRatio>
      <Box mr={{ base: "0", lg: "5rem" }} color="brand.200">
        <Heading textAlign={{ base: "center", lg: "left" }} as="h1" size="xl" mt="2" mb="5" ml="3rem">
          Terimakasih sudah vaksin
        </Heading>
        <Container ml="2rem">
          <Text>Karena kamu sudah divaksin, sekarang kamu mendapatkan penawaran atau fasilitas add-on gratis untuk camping serasa hotel nyaman di berbagai tempat di Indonesia!</Text>
        </Container>
      </Box>
      <Spacer />
      <Box mt={{ base: "4rem", lg: "0rem" }} ml={{ base: "2rem", lg: "0rem" }}>
        <Link href="/shop">
          <Button
            bg="brand.300"
            color="brand.200"
            _hover={{
              bg: "brand.300",
            }}
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Booking
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
