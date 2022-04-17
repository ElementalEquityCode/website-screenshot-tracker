import Router from "next/router";
import "../styles/styles.css";
import WebsiteContext, { WebsiteContextProvider } from "../contexts/website";

function MyApp({ Component, pageProps }) {
  return (
    <WebsiteContextProvider>
      <Component {...pageProps} />
    </WebsiteContextProvider>
  );
}

export default MyApp;
