import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import LoginForm from "../components/Register/LoginForm";

export default function RegisterPage() {
  return (
    <Flex>
      <Head>
        <title>Glampy | Register</title>
      </Head>

      <main>
        <LoginForm />
      </main>
    </Flex>
  );
}
