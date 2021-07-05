import React from "react";
import Image from "next/image";
import { Container, Box, Flex, AspectRatio, Heading, Text, Button, Spacer } from "@chakra-ui/react";

export default function VaksinStaff({ ...props }) {
  return (
    <Flex direction={{ base: "column-reverse", lg: "row" }} alignItems="center" {...props}>
      <Box mr={{ lg: "5rem" }} color="brand.200">
        <Heading textAlign={{ base: "center", lg: "left" }} as="h1" size="xl" mt="2" mb="5" ml={{ lg: "3rem" }}>
          Apakah masih bisa liburan aman dan nyaman di kala pandemi?
        </Heading>
        <Container ml={{ lg: "2rem" }}>
          <Text>Staff dan Karyawan Glampy sudah terverivikasi sesuai standart protokol dan regulasi pemerintahan Negara Indonesia</Text>
        </Container>
      </Box>
      <Spacer />
      <AspectRatio ratio={625 / 480} position="relative" minW={{ base: "75vw", sm: "65vw", lg: "35vw" }}>
        <Image src="/assets/vaksinstaff.png" layout="fill" />
      </AspectRatio>
    </Flex>
  );
}
