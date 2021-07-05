import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import LoginForm from "../components/Register/LoginForm";

export default function LoginPage() {
  return (
    <Flex>
      <Head>
        <title>Glampy | Login</title>
      </Head>

      <main>
        <LoginForm />
      </main>
    </Flex>
  );
}
