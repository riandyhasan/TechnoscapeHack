import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// SHOW MODE
// 0 = SHOW BOTH, when user is logged in  or not
// 1 = SHOW FOR LOGGED IN USER, when user is logged in
// 2 = SHOW FOR NOT LOGGED IN USER, when user is not logged in

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Register",
    path: "/register",
  },
];

export default function Header({ ...props }) {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" p="0.75em" paddingLeft={["2em", "4em", "6em"]} paddingRight={["2em", "4em", "6em"]} bgColor="brand.100" {...props}>
      <Box cursor="pointer" maxW="25vw">
        <Link href="/">
          <Image src="/assets/logo.png" height={40} width={150} />
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box display={{ base: menuOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack mt={{ base: menuOpen ? "1em" : "0", md: "0" }} spacing={10} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]}>
          {LINKS.map((link) => (
            <Box key={link.name + "-nav"}>
              <Link href={link.path} key={link.name + "-nav"}>
                <Text
                  fontSize="0.85em"
                  fontWeight={500}
                  cursor="pointer"
                  textAlign="center"
                  color={router.asPath == link.path ? "brand.300" : "brand.200"}
                  _hover={{
                    color: "brand.300",
                  }}
                >
                  {link.name}
                </Text>
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
}
