import App from "../src/App";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <App title={Component.pageTitle}>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;