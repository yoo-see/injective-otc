import Button from "components/common/button/Button";
import Image from "next/image";
import { SvgIcon } from "public/icon";
import { PngImage } from "public/img";
import { twMerge } from "tailwind-merge";

interface Props {
  balance: number;
  price: number;
  token: string;
  chain: string;
  goToBack: () => void;
}

const OrderInformation: React.FC<Props> = ({
  balance,
  price,
  token,
  chain,
  goToBack,
}) => {
  const isLowBalance = balance < price;
  const amountBoxClassName = isLowBalance
    ? "border-[0.8px] border-solid border-[#FF6060]"
    : "";
  const balanceTextClassName = isLowBalance ? "text-[#FF6060]" : "text-grey/3";

  const boxMergedClassName = twMerge(
    "flex items-center justify-between p-4 bg-[#383943] rounded-[10px]",
    amountBoxClassName,
  );
  const textMergedClassName = twMerge(
    "ml-1 font-normal text-[15px]",
    balanceTextClassName,
  );

  return (
    <div className="px-8 py-8">
      <button className="flex items-center" onClick={goToBack}>
        <SvgIcon.ChevronLeft />
        <p className="ml-1 font-medium text-xl text-white">Back</p>
      </button>
      <div className="mt-[42px] flex justify-center h-full">
        <div className=" px-8 py-11 bg-[#1F212C] rounded-[20px]">
          <p className="font-semibold text-[28px] text-white">Order</p>
          <p className="font-semibold text-[28px] text-white mb-6">
            Information
          </p>

          <div className="mb-4">
            <p className="font-normal text-base text-grey/4 pb-2.5">
              Your amount / Item Price
            </p>
            <div className={boxMergedClassName}>
              <div className="flex items-center">
                <Image
                  src={PngImage.USDC}
                  alt="Sample Image"
                  width={32}
                  height={32}
                />
                <p className="ml-2 text-grey/4 font-normal text-[15px]">
                  Available |
                </p>
                <p className={textMergedClassName}>{balance}</p>
              </div>
              <p className="text-grey/1 font-semibold text-lg">{price}</p>
            </div>
            {isLowBalance && (
              <div className="flex items-center mt-2">
                <SvgIcon.AlertCircle />
                <p className="ml-1 font-normal text-[13px] text-[#FF6060]">
                  Balance low. Recharge to proceed
                </p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <p className="font-normal text-base text-grey/4 pb-2.5">You Buy</p>
            <div className="flex items-center justify-between p-4 bg-[#383943] rounded-[10px]">
              <div className="flex items-center">
                <Image
                  src={PngImage.USDC}
                  alt="Sample Image"
                  width={32}
                  height={32}
                />
                <p className="ml-2 text-grey/4 font-normal text-[15px]">|</p>
                <p className="ml-1 text-[rgba(255,255,255,0.8)] font-normal text-[17px]">
                  {token}
                </p>
              </div>
              <p className="text-grey/1 font-semibold text-lg">{chain}</p>
            </div>
          </div>

          <div className="pt-6">
            <Button text={"Create order"} disabled={isLowBalance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
