import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/Landing/Jumbotron";
import Vaksin from "../components/Landing/Vaksin";
import CarouselPage from "../components/Landing/CarouselPage";
import VaksinStaff from "../components/Landing/VaksinStaff";
import Search from "../components/Landing/Search";
import ChooseGlamping from "../components/Landing/ChooseGlamping";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Glampy</title>
      </Head>

      <main>
        <Jumbotron />
        <Vaksin my="5rem" />
        <CarouselPage mb="5rem" />
        <VaksinStaff mb="5rem" />
        <Search mb="5rem" />
        <ChooseGlamping mb="5rem" />
      </main>
    </Layout>
  );
}
