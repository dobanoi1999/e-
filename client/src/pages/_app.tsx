import { AppProps } from "next/dist/shared/lib/router/router";
import { GlobalStyle } from "@utils/GlobalStyle";
import { store } from "@store/index";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Modal from "@components/ui/Modal";

const theme = {
  body: "#5A5A5A",
  heading: "#212121",
  input: "#1D1E1F",
  black: "#000",
  white: "#fff",
  linen: "#FBF1E9",
  linenSecondary: "#ECE7E3",
  olive: "#3D9970",
  maroon: "#B03060",
  brown: "#C7844B",
  placeholder: "#707070",
  borderBottom: "#f7f7f7",
  gray: {
    50: "#FBFBFB",
    100: "#F1F1F1",
    150: "#F4F4F4",
    200: "#F9F9F9",
    300: "#E6E6E6",
    350: "#E9ECEF",
    400: "#999999",
    500: "#D8D8D8",
    600: "#3A3A3A",
    700: "#292929",
    800: "#707070",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Modal />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
