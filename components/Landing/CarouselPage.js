import React from "react";
import Carousel from "./Carousel";
import { Container, Heading, Flex } from "@chakra-ui/react";

export default function CarouselPage({ ...props }) {
  return (
    <Flex {...props} d="column">
      <Heading color="brand.200" textAlign={{ base: "center", lg: "left" }} ml={{ base: "0rem", lg: "5rem" }} as="h1" size="lg" mt="2" mb="3rem">
        Nikmati Liburan Unik <br />
        Glamping
      </Heading>
      <Container mt="5" w="100%" maxW="95vw">
        <Carousel />
      </Container>
    </Flex>
  );
}
