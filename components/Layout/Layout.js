import React from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      overflowX="hidden"
      {...props}
    >
       <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}