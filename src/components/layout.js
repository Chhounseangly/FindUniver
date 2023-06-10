import Navbar from "./navBar/navbar";
import Footer from "./footer/footer";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children, icon, title }) {
  return (
    <>
      <Head>
        <meta
          name="Find University in Cambodia"
          content="Generated by create next app"
        />  
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keyword" content="find university, university" />
        <meta name="decription" content="for user find university" />

        <link rel="icon" type="image/png" sizes="16x16" href={icon} />
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className={`min-h-screen content dark:bg-gray-900`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
