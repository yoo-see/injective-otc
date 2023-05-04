import { useState } from "react";

import BuyList from "components/buy/BuyList";
import OrderInformation from "components/buy/OrderInformation";
import CompletedContainer from "components/common/container/CompletedContainer";
import { useBalanceContext } from "context/BalanceProvider";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import { tabState } from "../states";

const BuyPage: NextPage = () => {
  const router = useRouter();
  const [isOrdering, setIsOrdering] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [chain, setChain] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const { USDT } = useBalanceContext();

  const setActiveTab = useSetRecoilState(tabState);

  const goToBack = () => {
    setIsSelected(false);
  };

  const goToOTCMarket = () => {
    setIsOrdering(false);
    setIsSelected(false);
  };

  const goToDashboard = () => {
    setActiveTab({ tab: "buyer" });
    router.push("/board");
  };

  return (
    <div className="h-full">
      {isOrdering ? (
        <CompletedContainer
          backText={"OTC Market"}
          goToBack={goToOTCMarket}
          description={"If the seller transfers the coins to you,"}
          subDescription={
            "you can receive the coins through a push notification message."
          }
          goToButton={goToDashboard}
        />
      ) : (
        <>
          {isSelected ? (
            <OrderInformation
              balance={USDT}
              count={count}
              price={price}
              token={token}
              chain={chain}
              goToBack={goToBack}
              setIsOrdering={setIsOrdering}
            />
          ) : (
            <BuyList
              setIsSelected={setIsSelected}
              setChain={setChain}
              setToken={setToken}
              setCount={setCount}
              setPrice={setPrice}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BuyPage;
