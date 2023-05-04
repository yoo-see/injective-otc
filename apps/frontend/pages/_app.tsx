import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
