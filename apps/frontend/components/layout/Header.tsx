import { useEffect, useState } from "react";

import ConnectButton from "../common/button/ConnectButton";

const Header: React.FC = () => {
  const [connectText, setConnectText] = useState<string>("");

  const getAccountsKeplr = async () => {
    if (!window.getOfflineSigner || !window.keplr) {
      alert("Please install keplr extension");
    } else {
      if (window.keplr.experimentalSuggestChain) {
        try {
          await window.keplr.experimentalSuggestChain({
            rpc: "https://rpc-injective.keplr.app",
            rest: "https://lcd-injective.keplr.app",
            chainId: "injective-1",
            chainName: "Injective",
            chainSymbolImageUrl:
              "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
            bech32Config: {
              bech32PrefixAccPub: "injpub",
              bech32PrefixValPub: "injvaloperpub",
              bech32PrefixAccAddr: "inj",
              bech32PrefixConsPub: "injvalconspub",
              bech32PrefixValAddr: "injvaloper",
              bech32PrefixConsAddr: "injvalcons",
            },
            bip44: {
              coinType: 60,
            },
            stakeCurrency: {
              coinDenom: "INJ",
              coinDecimals: 18,
              coinMinimalDenom: "inj",
              coinGeckoId: "injective-protocol",
            },
            currencies: [
              {
                coinDenom: "INJ",
                coinDecimals: 18,
                coinMinimalDenom: "inj",
                coinGeckoId: "injective-protocol",
              },
            ],
            feeCurrencies: [
              {
                coinDenom: "INJ",
                coinDecimals: 18,
                coinMinimalDenom: "inj",
                coinGeckoId: "injective-protocol",
                gasPriceStep: {
                  low: 500000000,
                  average: 1000000000,
                  high: 1500000000,
                },
              },
            ],
            features: ["eth-address-gen", "eth-key-sign"],
          });

          const chainId = "injective-1";
          await window.keplr.enable(chainId);
          const offlineSigner = window.getOfflineSigner(chainId);
          const accounts = await offlineSigner.getAccounts();

          const address = accounts[0].address;
          const shortenedAddress =
            address.substring(0, 6) +
            "..." +
            address.substring(address.length - 4);

          localStorage.setItem(
            "KEPLR_ADDRESS",
            JSON.stringify(shortenedAddress),
          );
          setConnectText(shortenedAddress);
        } catch {
          alert("Failed to suggest the chain");
        }
      } else {
        alert("Please use the recent version of keplr extension");
      }
    }
  };

  const loadAddress = async () => {
    const address = localStorage.getItem("KEPLR_ADDRESS");
    if (address) {
      const parsedAddress = JSON.parse(address);
      setConnectText(parsedAddress);
      return;
    }
    await getAccountsKeplr();
  };

  useEffect(() => {
    loadAddress();
  }, []);

  return (
    <div className="flex flex-row items-center justify-end gap-3 w-full h-[84px] pt-10 pb-0 px-6 bg-grey/10">
      <ConnectButton text={connectText} />
    </div>
  );
};

export default Header;
