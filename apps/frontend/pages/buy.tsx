import { useEffect, useState } from "react";

import { Coin } from "@keplr-wallet/types";
import BuyList from "components/buy/BuyList";
import OrderInformation from "components/buy/OrderInformation";
import CompletedContainer from "components/common/container/CompletedContainer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import { tabState } from "../states";

export interface Listing {
  token: Coin;
  price: Coin;
  collateral: Coin;
  createAt: string;
}

const BuyPage: NextPage = () => {
  const router = useRouter();
  const [currentListing, setCurrentListing] = useState<Listing | null>(null);
  const [buyList, setBuyList] = useState<Listing[]>([]);
  const [isOrdering, setIsOrdering] = useState<boolean>(false);
  const setActiveTab = useSetRecoilState(tabState);

  const goToBack = () => {
    setCurrentListing(null);
  };

  const goToOTCMarket = () => {
    setIsOrdering(false);
    setCurrentListing(null);
  };

  const goToDashboard = () => {
    setActiveTab({ tab: "buyer" });
    router.push("/board");
  };

  useEffect(() => {
    const buyListString = localStorage.getItem("buyList");
    const newBuyList: Listing[] = buyListString
      ? JSON.parse(buyListString)
      : [];
    setBuyList(newBuyList);
  }, []);

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
          {currentListing ? (
            <OrderInformation
              listing={currentListing}
              goToBack={goToBack}
              setIsOrdering={setIsOrdering}
            />
          ) : (
            <BuyList
              buyList={buyList}
              setListing={(listing: Listing) => setCurrentListing(listing)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BuyPage;
