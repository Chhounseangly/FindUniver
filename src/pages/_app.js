import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
