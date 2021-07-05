import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import User from "../components/Profile/User";
import BookingHistory from "../components/Profile/BookingHistory";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>Glampy | Profile</title>
      </Head>

      <main>
        <User />
        <BookingHistory />
      </main>
    </Layout>
  );
}
