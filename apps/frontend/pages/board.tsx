import BoardItem from "components/dashboard/BoardItem";
import TabBar from "components/dashboard/TabBar";
import { NextPage } from "next";
import { useRecoilValue } from "recoil";

import { tabState } from "../states";

const BoardPage: NextPage = () => {
  const activeTab = useRecoilValue(tabState);
  const data = {
    buyer: [
      {
        orderId: "#12345678",
        createdAt: "2023/03/24 09:29",
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "expired",
      },
      {
        orderId: "#12345678",
        createdAt: "2023/03/24 09:29",
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "processing",
      },
      {
        orderId: "#12345678",
        createdAt: "2023/03/24 09:29",
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "completed",
      },
    ],
    seller: [
      {
        orderId: "#12345678",
        createdAt: "2023/03/24 09:29",
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "expired",
      },
      {
        orderId: "#12345678",
        createdAt: "2023/03/24 09:29",
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "processing",
      },
      {
        orderId: "#12345678",
        createdAt: "2023/03/24 09:29",
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "completed",
      },
    ],
  };

  return (
    <div className="px-6 py-8">
      <p className="font-medium text-[28px] text-white">Exchange Status</p>
      <div className="pt-6 pb-4">
        <TabBar />
      </div>
      <div className="grid gap-4 grid-cols">
        {data[activeTab.tab].map((ele) => (
          <BoardItem
            key={ele.orderId}
            activeTab={activeTab.tab}
            orderId={ele.orderId}
            createdAt={ele.createdAt}
            amount={ele.amount}
            price={ele.price}
            token={ele.token}
            count={ele.count}
            status={ele.status}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
