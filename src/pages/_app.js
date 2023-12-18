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

        {router.pathname != "/storyboard/[year]/[month]/[slug]" && (
          <>
            <meta property="og:title" content={"Mujadid's Corner"} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={router.basePath + router.asPath} />

            <meta property="og:image" content={getFullUrl("/favicon.ico")} />

            <meta name="twitter:image:alt" content={"Mujadid's Corner"} />

            <meta name="twitter:card" content="summary_large_image" />

            <meta
              property="og:description"
              content={"The introvert corner of Yazid Zaidan Mujadid"}
            />
            <meta property="og:site_name" content={"Mujadid's Story"} />
          </>
        )}
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
