import React from "react";
import { useRouter } from "next/router";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

export default function Navbar({ selected }) {
  const router = useRouter();

  return (
    <Flex>
      <Box style={{ filter: "drop-shadow(0px 4px 10px #FFF06A)" }} bg="brand.100">
        <Flex>
          <Box color="brand.100" cursor="pointer" bg={selected === "register" ? "brand.300" : ""} onClick={() => router.push("/register")} p="2">
            <Flex alignItems="center">
              <Heading as="h2" size="lg" color={selected === "register" ? "brand.100" : "brand.200"} mr="2rem" ml="0.5rem">
                Daftar
              </Heading>
              <CgProfile size="1.5rem" />
            </Flex>
          </Box>

          <Box color="brand.100" cursor="pointer" bg={selected === "login" ? "brand.300" : ""} onClick={() => router.push("/login")} p="2">
            <Flex alignItems="center">
              <Heading as="h2" size="lg" color={selected === "login" ? "brand.100" : "brand.200"} mr="2rem" ml="0.5rem">
                Login
              </Heading>
              <CgProfile size="1.5rem" />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
