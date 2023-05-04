import { useEffect, useState } from "react";

import { Coin } from "@keplr-wallet/types";
import Button from "components/common/button/Button";
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
  const [walletUsdtAmount, setWalletUsdtAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState(
    "inj1wlqjas72cwpxhc5mj2hr6d60jxa35arunsqeg7",
  );

  useEffect(() => {
    fetch(
      `https://k8s.testnet.lcd.injective.network/cosmos/bank/v1beta1/balances/${walletAddress}`,
    )
      .then((response) => response.json())
      .then((response) => {
        const usdt = response.balances.find(
          (balance: Coin) =>
            balance.denom === "peggy0x87aB3B4C8661e07D6372361211B96ed4Dc36B1B5",
        );
        let usdtAmount = usdt.amount / 1000000;
        setWalletUsdtAmount(usdtAmount);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  const isLowBalance = walletUsdtAmount < Number(listing.price.amount);
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

  const onClickOrdering = () => {
    if (isLowBalance) return;
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
                <p className={textMergedClassName}>{walletUsdtAmount}</p>
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
