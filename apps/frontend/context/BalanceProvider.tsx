import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useKeplrContext } from "context/KeplrWalletProvider";

export type BalanceContextData = Readonly<{
  inj: number;
  wETH: number;
  USDT: number;
}>;

interface Balances {
  denom: string;
  amount: string;
}

export const BalanceContext = createContext<BalanceContextData>({
  inj: 0,
  wETH: 0,
  USDT: 0,
});

export const useBalanceContext = () => useContext(BalanceContext);

export const BalanceProvider: FC<PropsWithChildren<{}>> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { address, getAccountsKeplr } = useKeplrContext();
  const [inj, setINJ] = useState(0);
  const [wETH, setWETH] = useState(0);
  const [USDT, setUSDT] = useState(0);

  useEffect(() => {
    getAccountsKeplr();
    if (address) {
      fetch(
        ` https://lcd-injective.keplr.app/cosmos/bank/v1beta1/balances/${address}`,
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.balances.length) {
            response.balances.forEach((ele: Balances) => {
              console.log(ele.amount);
              if (ele.denom == "inj") setINJ(Number(ele.amount));
              if (
                ele.denom == "peggy0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
              )
                setWETH(Number(ele.amount));
              if (
                ele.denom == "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7"
              )
                setUSDT(Number(ele.amount));
            });
          }
        })
        .catch((error) => {
          throw error;
        });
    }
  }, []);

  return (
    <BalanceContext.Provider value={{ inj, wETH, USDT }}>
      {children}
    </BalanceContext.Provider>
  );
};
