import { useEffect, useState } from "react";

import { Coin } from "@keplr-wallet/types";
import SelectTokenModal from "components/sell/SelectTokenModal";
import { useBalanceContext } from "context/BalanceProvider";
import { SvgIcon } from "public/icon";

interface Props {
  setIsSelling: (IsSelling: boolean) => void;
}

interface Listing {
  token: Coin;
  price: Coin;
  collateral: Coin;
  createdAt: string;
}

//list of Tokens & collateral Tokens
const listTokensArray = [{ token: "INJ" }, { token: "wETH" }];
const collateralTokensArray = [
  { token: "INJ" },
  { token: "wETH" },
  { token: "USDT" },
];

const Listing: React.FC<Props> = ({ setIsSelling }) => {
  // amount of INJ in wallet
  const { inj, wETH } = useBalanceContext();

  // quantities of tokens
  const [amountValue, setAmountValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [collateralValue, setCollateralValue] = useState(0);

  // type of tokens
  const [listToken, setListToken] = useState(listTokensArray[0].token);
  const [collateralToken, setCollateralToken] = useState(
    collateralTokensArray[0].token,
  );

  // modal handle state
  const [amountModalOpen, setAmountModalOpen] = useState(false);
  const [collateralModalOpen, setCollateralModalOpen] = useState(false);

  // bringing select tokens string from modal
  const getTokenSelect = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.innerText);
    if (amountModalOpen) {
      setListToken(event.currentTarget.innerText);
      setAmountModalOpen(!amountModalOpen);
    }
    if (collateralModalOpen) {
      setCollateralToken(event.currentTarget.innerText);
      setCollateralModalOpen(!collateralModalOpen);
    }
  };

  // bringing amonut of each item
  const handleGetCoinValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "amount":
        setAmountValue(e.target.valueAsNumber);
        break;
      case "price":
        setPriceValue(e.target.valueAsNumber);
        break;
      case "collateral":
        setCollateralValue(e.target.valueAsNumber);
        break;
    }
  };

  // handle select token modal open state
  const handleAmountModalState = () => {
    setAmountModalOpen(!amountModalOpen);
  };
  const handleCollateralModalState = () => {
    setCollateralModalOpen(!collateralModalOpen);
  };

  //list to sell button active & inactive
  const [sellButtonActive, setSellButtonActive] = useState(false);

  const onClickSelling = () => {
    const buyListString = localStorage.getItem("buyList");
    const buyList: Listing[] = buyListString ? JSON.parse(buyListString) : [];
    const newBuyList = buyList.concat([
      {
        token: {
          denom: listToken,
          amount: String(amountValue),
        },
        price: {
          denom: "USDT",
          amount: String(priceValue),
        },
        collateral: {
          denom: collateralToken,
          amount: String(collateralValue),
        },
        createdAt: new Date().toJSON(),
      },
    ]);
    localStorage.setItem("buyList", JSON.stringify(newBuyList));
    setIsSelling(true);
  };

  useEffect(() => {
    if (amountValue && priceValue && collateralValue) {
      setSellButtonActive(true);
    } else {
      setSellButtonActive(false);
    }
  }, [amountValue, priceValue, collateralValue]);

  return (
    <div className="flex justify-center mt-[55px]">
      <div className="bg-[#1F212C] px-8 py-11 rounded-[20px]">
        <div className="font-semibold text-white text-[28px] leading-[42px] tracking-[-0.24px]">
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
                  <div className=" flex flex-row items-center gap-2 p-0   hover:cursor-pointer">
                    <div
                      onClick={handleAmountModalState}
                      className="flex flex-row items-center gap-1.5 h-[27px] p-0 "
                    >
                      {listToken === "INJ" && (
                        <SvgIcon.Injective className="h-6 w-6" />
                      )}
                      {listToken === "wETH" && (
                        <SvgIcon.Weth className="h-6 w-6" />
                      )}

                      <div className="font-midium text-base leading-[27px] text-[#191B23]">
                        {listToken}
                      </div>
                    </div>

                    <SvgIcon.Vector
                      onClick={handleAmountModalState}
                      className="hover:scale-150"
                    />
                    <div className="flex items-center hover:cursor-default">
                      <p className="ml-1 text-[13px] text-grey/5">
                        Available |
                      </p>
                      <p className="ml-1 text-[13px] text-grey/5">
                        {listToken === "INJ" && inj}
                        {listToken === "wETH" && wETH}
                      </p>
                    </div>
                  </div>

                  <input
                    type="number"
                    name="amount"
                    onChange={handleGetCoinValues}
                    className={`Pretendard font-medium text-xl leading-6 text-[#191B23] text-right focus:outline-0 max-w-[130px]`}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <span className="font-normal text-[15px] leading-[18px] text-[#EAEAEA]">
                  Price
                </span>
                <div className="bg-white flex flex-row justify-between items-center w-[428px] h-[52px] px-5 py-[15px] rounded-[10px] mt-2">
                  <div className="flex flex-row items-center gap-2 p-0">
                    <SvgIcon.Usdt className="w-6 h-6" />
                  </div>
                  <input
                    type="number"
                    name="price"
                    onChange={handleGetCoinValues}
                    className={`Pretendard font-medium text-xl leading-6 text-[#191B23] text-right focus:outline-0 `}
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <span className="font-normal text-[15px] leading-[18px] text-[#EAEAEA]">
                  Collateral
                </span>
                <div className="bg-white flex flex-row justify-between items-center w-[428px] h-[52px] px-5 py-[15px] rounded-[10px] mt-2">
                  <div
                    onClick={handleCollateralModalState}
                    className="flex flex-row items-center gap-2 p-0 hover:cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-1.5 h-[27px] p-0">
                      {collateralToken === "INJ" && (
                        <SvgIcon.Injective className="h-6 w-6" />
                      )}
                      {collateralToken === "wETH" && (
                        <SvgIcon.Weth className="h-6 w-6" />
                      )}
                      {collateralToken === "USDT" && (
                        <SvgIcon.Usdt className="h-6 w-6" />
                      )}
                      <div className="font-midium text-base leading-[27px] text-[#191B23]">
                        {collateralToken}
                      </div>
                    </div>
                    <SvgIcon.Vector
                      onClick={handleCollateralModalState}
                      className="hover:scale-150"
                    />
                  </div>
                  <input
                    type="number"
                    name="collateral"
                    onChange={handleGetCoinValues}
                    className={`Pretendard font-medium text-xl leading-6 text-[#191B23] text-right focus:outline-0 `}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-11">
            {sellButtonActive ? (
              <button
                onClick={onClickSelling}
                className={`bg-[#2864ff] w-full h-14 rounded-lg left-0 top-0 font-normal text-base leading-6 text-white`}
              >
                Make a list to sell
              </button>
            ) : (
              <button
                className={`bg-grey/5 w-full h-14 rounded-lg left-0 top-0 font-normal text-base leading-6 text-white`}
              >
                Make a list to sell
              </button>
            )}
          </div>
        </div>
        {amountModalOpen && (
          <SelectTokenModal
            handleModalFunc={handleAmountModalState}
            getTokenSelect={getTokenSelect}
            tokens={listTokensArray}
          />
        )}
        {collateralModalOpen && (
          <SelectTokenModal
            handleModalFunc={handleCollateralModalState}
            getTokenSelect={getTokenSelect}
            tokens={collateralTokensArray}
          />
        )}
      </div>
    </div>
  );
};

export default Listing;
