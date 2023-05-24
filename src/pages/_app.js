import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";


export default function App({ Component, pageProps, session }) {
  if (Component.getLayout) {
    return (
      <>
        <NextNProgress color="#209cee" options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <NextNProgress color="linear-gradient(to right, #8a2387, #e94057, #f27121)" options={{ showSpinner: false }} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
