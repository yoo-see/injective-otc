import { AppProps } from "next/app";

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
