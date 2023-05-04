import React, {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import type { Keplr, Window as KeplrWindow, Key } from "@keplr-wallet/types";

const getKeplrFromWindow: () => Promise<Keplr> = () => {
  if (typeof window === "undefined") {
    throw new Error("Cannot get keplr without a window");
  }

  const win = window as KeplrWindow;
  const keplr = win.keplr;
  if (keplr !== undefined) {
    return Promise.resolve(keplr);
  } else if (document.readyState === "complete") {
    throw new Error("Please install the Keplr extension");
  }

  return new Promise<Keplr>((resolve, reject) => {
    const onDocumentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === "complete"
      ) {
        const innerKeplr = win.keplr;
        if (innerKeplr) {
          resolve(innerKeplr);
        } else {
          reject("Please install the Keplr extension");
        }

        document.removeEventListener("readystatechange", onDocumentStateChange);
      }
    };

    document.addEventListener("readystatechange", onDocumentStateChange);
  });
};

export type KeplrContextData = Readonly<{
  isOpen: boolean;
  key: Key | undefined;
  address: string | undefined;
  connect: () => Promise<void>;
  signArbitrary: Keplr["signArbitrary"];
  toggleNotifiCard: () => void;
  getAccountsKeplr: () => Promise<void>;
}>;

const KeplrContext = createContext<KeplrContextData>({
  isOpen: false,
  key: undefined,
  address: undefined,
  connect: () => {
    throw new Error("Unimplemented");
  },
  signArbitrary: () => {
    throw new Error("Unimplemented");
  },
  toggleNotifiCard: () => {
    return;
  },
  getAccountsKeplr: () => {
    throw new Error("Unimplemented");
  },
});

export const useKeplrContext = () => useContext(KeplrContext);

export const KeplrWalletProvider: FC<PropsWithChildren<{}>> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [keplr, setKeplr] = useState<Keplr | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [key, setKey] = useState<Key | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getKeplrFromWindow()
      .then(async (keplr) => {
        setKeplr(keplr);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError(`Unknown error: ${e}`);
        }
      });
  });

  const connect = useCallback(async () => {
    if (keplr === undefined) {
      setError("Wait for initialization");
      return;
    }

    await keplr.enable("injective-1");
    const offlineSigner = keplr.getOfflineSigner("injective-1");
    const accounts = await offlineSigner.getAccounts();
    const address = accounts[0].address;
    const key = await keplr.getKey("injective-1");

    setAddress(address);
    setKey(key);
  }, [keplr]);

  const toggleNotifiCard = () => {
    setIsOpen(!isOpen);
  };

  const getAccountsKeplr = useCallback(async () => {
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
          setAddress(address);
        } catch {
          alert("Failed to suggest the chain");
        }
      } else {
        alert("Please use the recent version of keplr extension");
      }
    }
  }, []);

  const signArbitrary = useCallback<Keplr["signArbitrary"]>(
    async (chainId: string, signer: string, data: string | Uint8Array) => {
      if (keplr !== undefined) {
        const result = await keplr.signArbitrary(chainId, signer, data);
        return result;
      }

      throw new Error("Wait for initialization");
    },
    [keplr],
  );

  return (
    <KeplrContext.Provider
      value={{
        key,
        address,
        connect,
        signArbitrary,
        isOpen,
        toggleNotifiCard,
        getAccountsKeplr,
      }}
    >
      <div>
        {error !== undefined ? <p>{error}</p> : null}
        {children}
      </div>
    </KeplrContext.Provider>
  );
};
