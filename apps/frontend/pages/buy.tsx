import { useState } from "react";

import BuyList from "components/buy/BuyList";
import OrderInformation from "components/buy/OrderInformation";
import CompletedContainer from "components/common/container/CompletedContainer";
import { NextPage } from "next";

const BuyPage: NextPage = () => {
  const [isOrdering, setIsOrdering] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [chain, setChain] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const goToBack = () => {
    setIsSelected(false);
  };

  const goToOTCMarket = () => {
    setIsOrdering(false);
    setIsSelected(false);
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
          goToButton={() => console.log("go to Dashboard")}
        />
      ) : (
        <>
          {isSelected ? (
            <OrderInformation
              balance={341115}
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
