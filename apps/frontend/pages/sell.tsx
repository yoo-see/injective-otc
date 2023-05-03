import { useState } from "react";

import CompletedContainer from "components/common/container/CompletedContainer";
import Listing from "components/sell/Listing";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SellPage: NextPage = () => {
  const router = useRouter();
  const [isSelling, setIsSelling] = useState<boolean>(false);

  const goToListing = () => {
    setIsSelling(false);
  };

  const goToDashboard = () => {
    router.push("/board");
  };

  return (
    <div>
      {isSelling ? (
        <CompletedContainer
          backText={"Listing"}
          goToBack={goToListing}
          title={"listing is"}
          description={
            "Deliver coins within 24 hrs after purchase or collateral transfers to buyer."
          }
          subDescription={
            "We'll send push notifications to help you meet the deadline."
          }
          goToButton={goToDashboard}
        />
      ) : (
        <Listing setIsSelling={setIsSelling} />
      )}
    </div>
  );
};

export default SellPage;
