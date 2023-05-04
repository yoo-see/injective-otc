import { BalanceProvider } from "context/BalanceProvider";
import { KeplrWalletProvider } from "context/KeplrWalletProvider";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <KeplrWalletProvider>
      <BalanceProvider>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </BalanceProvider>
    </KeplrWalletProvider>
  );
}

export default App;
