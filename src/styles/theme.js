import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"Plus Jakarta Sans", sans-serif',
    body: '"Plus Jakarta Sans", sans-serif',
    mono: '"Plus Jakarta Sans", sans-serif',
  },
  breakpoints: {
    xs: "414px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  colors: {
    primary: "#0282C6",
    secondary: "#D3DD18",
  },
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _light: "#FDFDFD",
      },
    },
  },
});
