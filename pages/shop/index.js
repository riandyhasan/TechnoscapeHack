import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ItemCard from "../../components/Shop/ItemCard";

export default function ShopPage() {
  return (
    <Layout>
      <Head>
        <title>Glampy | Shop</title>
      </Head>

      <main>
        <ItemCard />
      </main>
    </Layout>
  );
}
