import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { Noto_Serif_Khmer } from "next/font/google";

const khBtB = Noto_Serif_Khmer({
  subsets: ["khmer"],
  display: "block",
  weight: ["400"],
  variable: "--Battambang",
});

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
      <NextNProgress
        color="linear-gradient(to right, #8a2387, #e94057, #f27121)"
        options={{ showSpinner: false }}
      />
      <SessionProvider session={session}>
        <main className={`${khBtB.variable}`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}
