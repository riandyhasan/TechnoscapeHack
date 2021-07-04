import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ProductDetail from "../../components/Shop/ProductDetail";
import ProductPhotos from "../../components/Shop/ProductPhotos";

export default function ShopPage() {
  return (
    <Layout>
      <Head>
        <title>Glampy | Shop</title>
      </Head>

      <main>
        <ProductDetail my="5rem" />
        <ProductPhotos my="5rem" />
      </main>
    </Layout>
  );
}
