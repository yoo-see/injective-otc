import { useState } from "react";

import EtherIcon from "public/svg/ether-icon.svg";
import UsdcIcon from "public/svg/usdc-icon.svg";
import Vector from "public/svg/vector.svg";

const Listing = () => {
  const [amountValue, setAmountValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [collateralValue, setCollateralValue] = useState(0);

  const handleAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(e.target.valueAsNumber);
  };
  const handlePriceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.valueAsNumber);
  };
  const handleCollateral = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollateralValue(e.target.valueAsNumber);
  };

  return (
    <div className="bg-[#1F212C] w-[492px] px-8 py-11 rounded-[20px]">
      <div className="Poppins w-[198px] h-[42px] font-semibold text-white text-[28px] leading-[42px] tracking-[-0.24px]">
        Listing
      </div>

      <div className="mt-6">
        <div>
          <div className=" flex flex-col items-start p-0 gap-6">
            <div>
              <span className="font-normal text-[15px] leading-[18px] text-[#EAEAEA]">
                Amount
              </span>
              <div className="bg-white flex flex-row justify-between items-center w-[428px] h-[52px] px-5 py-[15px] rounded-[10px] mt-2">
                <div className="flex flex-row items-center gap-2 p-0 hover:cursor-pointer">
                  <div className="flex flex-row items-center gap-1.5 w-[61px] h-[27px] p-0">
                    <EtherIcon />
                    <div className="font-midium text-base leading-[27px] text-[#191B23]">
                      ETH
                    </div>
                  </div>
                  <Vector />
                </div>
                <input
                  type="number"
                  onChange={handleAmountValue}
                  className={`Pretendard font-medium text-xl leading-6 text-[#191B23] text-right focus:outline-0 ${
                    amountValue === 0 && "text-[#E0E0E0]"
                  }`}
                />
              </div>
            </div>
            <div>
              <span className="font-normal text-[15px] leading-[18px] text-[#EAEAEA]">
                Price
              </span>
              <div className="bg-white flex flex-row justify-between items-center w-[428px] h-[52px] px-5 py-[15px] rounded-[10px] mt-2">
                <div className="flex flex-row items-center gap-2 p-0 hover:cursor-pointer">
                  <UsdcIcon />
                </div>
                <input
                  type="number"
                  onChange={handlePriceValue}
                  className={`Pretendard font-medium text-xl leading-6 text-[#191B23] text-right focus:outline-0 ${
                    priceValue === 0 && "text-[#E0E0E0]"
                  }`}
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <span className="font-normal text-[15px] leading-[18px] text-[#EAEAEA]">
                Collateral
              </span>
              <div className="bg-white flex flex-row justify-between items-center w-[428px] h-[52px] px-5 py-[15px] rounded-[10px] mt-2">
                <div className="flex flex-row items-center gap-2 p-0 hover:cursor-pointer">
                  <div className="flex flex-row items-center gap-1.5 w-[61px] h-[27px] p-0">
                    <EtherIcon />
                    <div className="font-midium text-base leading-[27px] text-[#191B23]">
                      ETH
                    </div>
                  </div>
                  <Vector />
                </div>
                <input
                  type="number"
                  onChange={handleCollateral}
                  className={`Pretendard font-medium text-xl leading-6 text-[#191B23] text-right focus:outline-0 ${
                    collateralValue === 0 && "text-[#E0E0E0]"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-11">
          <button className="bg-[#2864ff] w-full h-14 rounded-lg left-0 top-0 font-normal text-base leading-6 text-white">
            Make a list to sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
