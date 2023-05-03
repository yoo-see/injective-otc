import BuyList from "components/buy/BuyList";
// import OrderInformation from "components/buy/OrderInformation";
// import CompletedContainer from "components/common/container/CompletedContainer";
import { NextPage } from "next";

const BuyPage: NextPage = () => {
  const goToBack = () => console.log("back");

  return (
    <div className="h-full">
      <BuyList />
      {/* <OrderInformation
        balance={345}
        price={1234}
        token={"On ethereum"}
        chain={"5ETH"}
        goToBack={goToBack}
      /> */}
      {/* <CompletedContainer
        backText={"OTC Market"}
        goToBack={() => console.log("뒤로가기")}
        title={"test"}
        description={"If the seller transfers the coins to you,"}
        subDescription={
          "you can receive the coins through a push notification message."
        }
        goToButton={() => console.log("go to Dashboard")}
      /> */}
    </div>
  );
};

export default BuyPage;
