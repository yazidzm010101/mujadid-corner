import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
