import "../styles/styles.css";
import { WebsiteContextProvider } from "../contexts/website";

function MyApp({ Component, pageProps }) {
  return (
    <WebsiteContextProvider>
      <Component {...pageProps} />
    </WebsiteContextProvider>
  );
}

export default MyApp;
