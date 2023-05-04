import { SvgIcon } from "public/icon";
import { twMerge } from "tailwind-merge";

import { TabType } from "../../states";

interface Props {
  activeTab: TabType;
  orderId: string;
  createdAt: string;
  amount: string;
  price: number;
  token: string;
  count: number;
  status: string;
}

const BoardItem: React.FC<Props> = ({
  activeTab,
  orderId,
  createdAt,
  amount,
  price,
  token,
  count,
  status,
}) => {
  const date = new Date(createdAt);

  const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "expired":
        return "text-[#FF6060]";

      case "processing":
        return "text-[#52E77C]";

      case "completed":
        return "text-[#57F5FF]";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "expired":
        return <SvgIcon.CloseRed />;

      case "processing":
        return <SvgIcon.MoreHorizontal />;

      case "completed":
        return <SvgIcon.CheckCheck />;
    }
  };

  const getDepositButton = (status: string, activeTab: TabType) => {
    switch (status) {
      case "expired":
        return activeTab === "buyer" ? (
          <button className="bg-[#FF3AEB] rounded-[14px] py-[9px] px-3 ml-3 text-white font-semibold text-[15px]">
            Claim Deposit
          </button>
        ) : null;

      case "processing":
        return activeTab === "seller" ? (
          <button className="bg-[#FF3AEB] rounded-[14px] py-[6px] px-3 ml-3 text-white font-semibold text-[15px] flex">
            Deposit
            <SvgIcon.ArrowRightCircle className="ml-1" />
          </button>
        ) : null;

      default:
        return null;
    }
  };

  const getTimeRemaining = () => {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const timeLeft = date.getTime() + oneDay - now.getTime();
    if (timeLeft < 0) return;

    const elapsedSeconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours % 24 > 0) {
      return (
        <div className="flex items-center">
          <SvgIcon.AlarmClock />
          <p className="font-normal text-xs text-white ml-1 mr-2">
            {hours % 24}hours and {minutes % 60}min left
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex items-center">
          <SvgIcon.AlarmClockRed />
          <p className="font-normal text-xs text-[#FF6060] ml-1 mr-2">
            {minutes % 60}min left
          </p>
        </div>
      );
    }
  };

  const textMergedClassName = twMerge(
    "font-normal text-[13px] mr-1",
    getStatusStyle(status),
  );

  return (
    <div className="bg-[#1F212C] px-6 pt-6 pb-[34px] rounded-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="font-semibold text-lg text-white mr-[9px]">
            Order ID {orderId}
          </p>
          <p className="font-normal text-[13px] text-[rgba(255,255,255,0.72)]">
            Created on {formattedDate}
          </p>
        </div>
        <div className="flex items-center">
          {status === "processing" &&
            activeTab === "seller" &&
            getTimeRemaining()}
          <p className={textMergedClassName}>Order {status}</p>
          {getStatusIcon(status)}
          {getDepositButton(status, activeTab)}
        </div>
      </div>
      <div className="flex items-end mt-5">
        <div className="w-full">
          <p className="font-normal text-[15px] text-white mb-3">
            {activeTab === "buyer" ? "Amount" : "You Sell"}
          </p>
          <div className="bg-[#383943] rounded-[10px] py-4 px-5 flex items-center justify-between">
            <div className="flex items-center">
              {activeTab === "buyer" ? (
                <SvgIcon.Usdt className="w-8 h-8 mr-2" />
              ) : (
                <SvgIcon.Weth className="w-8 h-8 mr-2" />
              )}

              <p className="font-normal text-[17px] text-[rgba(255,255,255,0.8)]">
                | {activeTab === "buyer" ? amount : token}
              </p>
            </div>
            <p className="font-medium text-[32px] text-white">
              {activeTab === "buyer" ? price.toFixed(2) : count.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mx-[14px] mb-6">
          <SvgIcon.ArrowLeftRightWhite />
        </div>
        <div className="w-full">
          <p className="font-normal text-[15px] text-white mb-3">
            {activeTab === "buyer" ? "You Buy" : "You will receive"}
          </p>
          <div className="bg-[#383943] rounded-[10px] py-4 px-5 flex items-center justify-between">
            <div className="flex items-center">
              {activeTab === "buyer" ? (
                <SvgIcon.Weth className="w-8 h-8 mr-2" />
              ) : (
                <SvgIcon.Usdt className="w-8 h-8 mr-2" />
              )}

              <p className="font-normal text-[17px] text-[rgba(255,255,255,0.8)]">
                | {activeTab === "buyer" ? token : amount}
              </p>
            </div>
            <p className="font-medium text-[32px] text-white">
              {activeTab === "buyer" ? count.toFixed(2) : price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardItem;
