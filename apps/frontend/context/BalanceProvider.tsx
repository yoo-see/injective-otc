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
  const { address } = useKeplrContext();
  const [inj, setINJ] = useState(0);
  const [wETH, setWETH] = useState(0);
  const [USDT, setUSDT] = useState(0);

  useEffect(() => {
    if (address) {
      fetch(
        `https://k8s.testnet.lcd.injective.network/cosmos/bank/v1beta1/balances/${address}`,
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.balances.length) {
            response.balances.forEach((ele: Balances) => {
              if (ele.denom == "inj")
                setINJ(Number(ele.amount.substring(0, 9)) / 10000000);
              if (
                ele.denom == "peggy0x44C21afAaF20c270EBbF5914Cfc3b5022173FEB7"
              )
                setWETH(Number(ele.amount.substring(0, 9)) / 10000000);
              if (
                ele.denom == "peggy0x87aB3B4C8661e07D6372361211B96ed4Dc36B1B5"
              ) {
                setUSDT(Number(ele.amount) / 1000000);
              }
            });
          }
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [address]);

  return (
    <BalanceContext.Provider value={{ inj, wETH, USDT }}>
      {children}
    </BalanceContext.Provider>
  );
};
