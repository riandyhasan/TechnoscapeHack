import React from "react";
import Link from "next/link";
import { Flex, Text, Heading, Box, Button } from "@chakra-ui/react";
import Searchbar from "./Searchbar";

export default function JumbotronLanding() {
  return (
    <Flex bgImg="url('/assets/backgroundsearchbar.png')" bgRepeat="no-repeat" bgSize="cover" direction="column" justifyContent="center" alignItems="center" color="white">
      <Box mt="8rem" minW={{ md: "60vw" }}>
        <Searchbar />
      </Box>
      <Box my="5rem">
        <Flex direction="column" alignItems="center">
          <Text>Tidak tahu harus kemana dan kapan?</Text>
          <Link href="/">
            <Button
              bg="brand.300"
              color="brand.200"
              _hover={{
                bg: "brand.300",
              }}
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              mt="5"
            >
              Bawa saya
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
