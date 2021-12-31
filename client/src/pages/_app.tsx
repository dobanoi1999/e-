import { AppProps } from "next/dist/shared/lib/router/router";

import { store } from "@store/index";
import { Provider } from "react-redux";
import Modal from "@components/ui/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Modal />
    </Provider>
  );
}

export default MyApp;
