import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>title</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <Navbar />
      <main className="min-h-screen content">{children}</main>
      <Footer />
    </>
  );
}