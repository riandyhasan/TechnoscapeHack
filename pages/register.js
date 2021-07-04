import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import RegisterForm from "../components/Register/RegisterForm";

export default function RegisterPage() {
  return (
    <Flex>
      <Head>
        <title>Glampy | Register</title>
      </Head>

      <main>
        <RegisterForm />
      </main>
    </Flex>
  );
}
