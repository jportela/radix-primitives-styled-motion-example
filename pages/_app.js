import Head from "next/head";
import "../styles/globals.css";

import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }) {
  return (
    <IdProvider>
      <Head>
        <title>Radix Primitives with styled-components and framer-motion</title>
      </Head>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
