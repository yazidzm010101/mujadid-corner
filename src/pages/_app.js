import "@/styles/globals.css";
import "animate.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "@/styles/theme";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href={getFullUrl("/favicon.ico")} sizes="any" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
