import React from "react";
import Link from "next/link";
import { Box, Text, Flex, Spacer, Grid } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="brand.300"
      minW="100vw"
      p="1.5rem"
      color="white"
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
      }}
      gridTemplateRows={{
        base: "0px repeat(2, 1fr)",
        md: "1fr",
      }}
      gridGap={{
        base: "0.5em",
        md: "0",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Spacer />
      <Text textAlign="center">&copy; Glampy Team</Text>
      <Grid
        cursor="pointer"
        gridTemplateColumns="repeat(3, 2rem)"
        gridGap="0.5rem"
        justifyContent="center"
        alignItems="center"
        justifySelf={{
          base: "center",
          md: "flex-end",
        }}
      ></Grid>
    </Box>
  );
}
