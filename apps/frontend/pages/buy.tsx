import OrderInformation from "components/buy/OrderInformation";
import { NextPage } from "next";

const BuyPage: NextPage = () => {
  const goToBack = () => console.log("back");

  return (
    <div className="h-full">
      <OrderInformation
        balance={345}
        price={1234}
        token={"On ethereum"}
        chain={"5ETH"}
        goToBack={goToBack}
      />
    </div>
  );
};

export default BuyPage;
