import { useNotifiClient } from "@notifi-network/notifi-react-hooks";
import { useMemo } from "react";

import Button from "components/common/button/Button";
import { useBalanceContext } from "context/BalanceProvider";
import { useKeplrContext } from "context/KeplrWalletProvider";
import { Listing } from "pages/buy";
import { SvgIcon } from "public/icon";
import { twMerge } from "tailwind-merge";

interface Props {
  listing: Listing;
  goToBack: () => void;
  setIsOrdering: (IsOrdering: boolean) => void;
}

const OrderInformation: React.FC<Props> = ({
  listing,
  goToBack,
  setIsOrdering,
}) => {
  const { USDT } = useBalanceContext();
  const { key } = useKeplrContext();
  const keyBase64 = useMemo(
    () => (key !== undefined ? Buffer.from(key.pubKey).toString("base64") : ""),
    [key],
  );

  const isLowBalance = USDT < Number(listing.price.amount);
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

  const { broadcastMessage, getTopics } = useNotifiClient({
    dappAddress: "injectiveotc",
    walletPublicKey: keyBase64,
    walletBlockchain: "INJECTIVE",
    env: "Development",
    accountAddress: key?.bech32Address ?? "",
  });

  const onClickOrdering = async () => {
    if (isLowBalance) return;

    // broadcastMessage(
    //   {
    //     topic: t,
    //     subject: s,
    //     message: m,
    //     isHolderOnly: i,
    //   },
    //   signer,
    // );
    setIsOrdering(true);
  };

  return (
    <div className="px-6 py-8">
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
                <SvgIcon.Usdt className="w-8 h-8" />
                <p className="ml-2 text-grey/4 font-normal text-[15px]">
                  Available |
                </p>
                <p className={textMergedClassName}>{USDT}</p>
              </div>
              <p className="text-grey/1 font-semibold text-lg">
                {listing.price.amount}
              </p>
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
                <SvgIcon.Injective className="w-8 h-8" />
              </div>
              <p className="text-grey/1 font-semibold text-lg">
                {listing.token.amount} {listing.token.denom}
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Button
              text={"Create order"}
              disabled={isLowBalance}
              onClick={onClickOrdering}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
