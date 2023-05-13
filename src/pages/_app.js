import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps, session }) {
  if (Component.getLayout) {
    return (
      <>
        <NextNProgress color="#209cee" />
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <NextNProgress color="#209cee" />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
