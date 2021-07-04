import React from "react";
import { Flex, Text, Box, Heading, FormControl, FormLabel, Input, Spacer, Grid, GridItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";

export default function RegisterForm(props) {
  return (
    <Flex {...props}>
      <Box cursor="pointer" maxW="20rem" p="1.25em" maxH="10rem" display={{ base: "none", xl: "block" }}>
        <Link href="/">
          <Image src="/assets/Logo.png" height={40} width={150} />
        </Link>
      </Box>

      <Flex alignItems="center">
        <Box textAlign="center" display={{ base: "none", xl: "block" }}>
          <Image src="/assets/register.png" height={573} width={517} />
          <Text color="brand.200">Mulai liburan dengan gaya baru bersama temanmu secara aman</Text>
        </Box>

        <Box style={{ boxShadow: "0px 4px 100px #FFB302" }} color="brand.200" ml={{ base: "0rem", lg: "8rem" }}>
          <Flex flexDirection="column" alignItems="center" mt="5rem">
            <Box cursor="pointer" display={{ base: "block", xl: "none" }} mb="5rem">
              <Link href="/">
                <Image src="/assets/Logo.png" height={40} width={150} />
              </Link>
            </Box>
            <Navbar selected="register" />
            <form>
              <Grid p="5rem" gap="1.5rem">
                <GridItem>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl id="nama">
                    <FormLabel>Nama</FormLabel>
                    <Input />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <Flex gap="1rem">
                    <FormControl id="provinsi">
                      <FormLabel>Provinsi</FormLabel>
                      <Input />
                    </FormControl>
                    <FormControl id="kabupaten" ml="5">
                      <FormLabel>Kabupaten</FormLabel>
                      <Input />
                    </FormControl>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Heading fontSize="xl" mt="3">
                    Upload Sertifikat Vaksin
                  </Heading>
                  <Text fontSize="md" mt="3">
                    Jika sudah terverifikasi, kamu bisa mendapat puluhan voucher dan diskon-diskon menarik
                  </Text>
                  <Upload>
                    <Button borderColor="#EDEDED" color="brand.100" mt="3">
                      Upload Files
                      <UploadOutlined style={{ marginLeft: "1rem" }} />
                    </Button>
                  </Upload>
                </GridItem>
                <GridItem justifySelf="center" mt="5">
                  <Button color="brand.200" bg="#FFBB1C" borderRadius="1.5rem" style={{ filter: "drop-shadow(0px 0px 20px #F0B019)" }}>
                    Register
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
