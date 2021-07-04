import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FONTS } from "../constant";
import { Global } from "@emotion/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    brand: {
      100: "#000000",
      200: "#ffffff",
      300: "#FFBB1C",
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={FONTS} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
