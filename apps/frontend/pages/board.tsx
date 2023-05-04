import BoardItem from "components/dashboard/BoardItem";
import TabBar from "components/dashboard/TabBar";
import { NextPage } from "next";
import { useRecoilValue } from "recoil";

import { tabState } from "../states";

const BoardPage: NextPage = () => {
  const activeTab = useRecoilValue(tabState);
  const date1 = new Date("2023.5.2 12:30").toISOString();
  const date2 = new Date("2023.5.3 19:40").toISOString();
  const date3 = new Date("2023.5.4 17:15").toISOString();

  const data = {
    buyer: [
      {
        orderId: "#1",
        createdAt: date1,
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "expired",
      },
      {
        orderId: "#12",
        createdAt: date2,
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "processing",
      },
      {
        orderId: "#123",
        createdAt: date3,
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "completed",
      },
    ],
    seller: [
      {
        orderId: "#1234",
        createdAt: date1,
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "expired",
      },
      {
        orderId: "#12345",
        createdAt: date2,
        amount: "On ethereum",
        price: 300,
        token: "On ethereum",
        count: 1,
        status: "processing",
      },
      {
        orderId: "#123456",
        createdAt: date3,
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
