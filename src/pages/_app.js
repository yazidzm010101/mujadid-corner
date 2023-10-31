import "@/styles/globals.css";
import "aos/dist/aos.css";
import "animate.css";

import AOS from "aos";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
