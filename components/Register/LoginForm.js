import React from "react";
import { Flex, Text, Box, FormControl, FormLabel, Input, Spacer, Grid, GridItem, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function LoginForm(props) {
  const router = useRouter();

  return (
    <Flex {...props}>
      <Box cursor="pointer" maxW="10rem" p="1.25em" maxH="2rem" display={{ base: "none", xl: "block" }}>
        <Link href="/">
          <Image src="/assets/Logo.png" height={40} width={150} />
        </Link>
      </Box>

      <Flex alignItems="center">
        <Box justifyContent="center" textAlign="center" display={{ base: "none", xl: "block" }}>
          <Image src="/assets/login.png" height={573} width={517} />
          <Text color="brand.200">Mulai liburan dengan gaya baru bersama temanmu secara aman</Text>
        </Box>

        <Box style={{ boxShadow: "0px 4px 100px #FFB302" }} color="brand.200" ml={{ base: "0", md: "5rem", lg: "15rem", xl: "8rem" }} minW={{ base: "0", sm: "700", xl: "550" }}>
          <Flex flexDirection="column" alignItems="center" mt="5rem">
            <Box cursor="pointer" display={{ base: "block", xl: "none" }} mb="5rem">
              <Link href="/">
                <Image src="/assets/Logo.png" height={40} width={150} />
              </Link>
            </Box>
            <Navbar selected="login" />
            <form>
              <Grid p="5rem" gap="1.5rem" mt="1.5rem">
                <GridItem>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input />
                    <Text color="#696969" mt="3">
                      Belum punya akun? {""}
                      <a style={{ color: "#FFB302", cursor: "pointer" }} onClick={() => router.push("/register")}>
                        Klik disini!
                      </a>
                    </Text>
                  </FormControl>
                </GridItem>
                <GridItem justifySelf="center" mt="5">
                  <Button color="brand.100" bg="#FFBB1C" borderRadius="1.5rem" style={{ filter: "drop-shadow(0px 0px 20px #F0B019)" }}>
                    Login
                  </Button>
                </GridItem>
              </Grid>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
