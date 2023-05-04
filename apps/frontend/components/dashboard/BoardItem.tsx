import Image from "next/image";
import { SvgIcon } from "public/icon";
import { PngImage } from "public/img";

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
  return (
    <div className="bg-[#1F212C] px-6 pt-6 pb-[34px] rounded-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="font-semibold text-lg text-white mr-[9px]">
            Order ID {orderId}
          </p>
          <p className="font-normal text-[13px] text-[rgba(255,255,255,0.72)]">
            Created on {createdAt}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-normal text-[13px] text-[#FF6060]">
            Order expired
          </p>
          <button className="bg-[#FF3AEB] rounded-[14px] py-[9px] px-3 ml-3 text-white font-semibold text-[15px]">
            Claim Deposit
          </button>
        </div>
      </div>
      <div className="flex items-end mt-5">
        <div className="w-full">
          <p className="font-normal text-[15px] text-white mb-3">
            {activeTab === "buyer" ? "Amount" : "You Sell"}
          </p>
          <div className="bg-[#383943] rounded-[10px] py-4 px-5 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                className="mr-2"
                src={activeTab === "buyer" ? PngImage.USDC : PngImage.ImgToken}
                alt="Sample Image"
                width={32}
                height={32}
              />
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
              <Image
                className="mr-2"
                src={activeTab === "buyer" ? PngImage.ImgToken : PngImage.USDC}
                alt="Sample Image"
                width={32}
                height={32}
              />
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
