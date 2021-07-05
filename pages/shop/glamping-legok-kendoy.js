import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ProductDetail from "../../components/Shop/ProductDetail";
import ProductPhotos from "../../components/Shop/ProductPhotos";
import Facility from "../../components/Shop/Facility";
import CampType from "../../components/Shop/CampType";
import Review from "../../components/Shop/Review";

export default function ShopPage() {
  return (
    <Layout>
      <Head>
        <title>Glampy | Shop</title>
      </Head>

      <main>
        <ProductDetail my="5rem" />
        <ProductPhotos my="5rem" />
        <Facility my="5rem" />
        <CampType my="5rem" />
        <Review my="5rem" />
      </main>
    </Layout>
  );
}
