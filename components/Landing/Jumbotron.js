import React from "react";
import Image from "next/image";
import { Flex, Text, Heading, Box } from "@chakra-ui/react";

export default function JumbotronLanding() {
  return (
    <Flex w="100vw" minH="754px" bgImg="url('/assets/jumbotronlanding.png')" bgRepeat="no-repeat" bgSize="cover" px={["1.5em", "4em", "6em"]} pb={["1.5em", "1.5em", "2.5em"]} direction="column" justifyContent="flex-start" color="white">
      <Box
        style={{ background: "rgba(0, 0, 0, 0.25)" }}
        maxW={{
          base: "90vw",
          sm: "70vw",
          md: "60vw",
          lg: "50vw",
        }}
        h="452px"
        mt="2rem"
        ml={{
          base: "0rem",
          sm: "2rem",
          md: "5rem",
          lg: "15rem",
          xl: "28rem",
        }}
      >
        <Flex alignItems="center">
          <Image src="/assets/logonyala.png" height={115} width={111} />
          <Heading as="h1" size="2xl">
            Camping <br />
            serasa hotel
          </Heading>
        </Flex>
        <Box ml="7rem">
          <Text mr="3">
            Glamping atau yang biasa disebut sebagai Glamour Camping adalah cara baru camping dengan fasilitas mewah seperti tempat tidur, listrik, air, bak air panas dan beranda pribadi. Dengan glamping, kamu bisa merasakan camping serasa
            menginap di hotel sambil melakukan hal-hal yang biasa dilakukan saat sedang camping seperti membuat firecamp, dan memasak barbeque di malam hari bersama teman-temanmu. Nah, dengan Glampy, kamu bisa memesan pengalaman glamping
            yang aman, nyaman, dan yang pastinya seru.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
