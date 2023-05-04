import { Listing } from "pages/buy";
import { SvgIcon } from "public/icon";
import { twMerge } from "tailwind-merge";

interface Props {
  buyList: Listing[];
  setListing: (listing: Listing) => void;
}

const BuyList: React.FC<Props> = ({ buyList, setListing }) => {
  const h1MergedClassName = twMerge(
    "Poppins w-[165px] h-[42px] not-italic font-medium text-[28px] leading-[42px] text-white opacity-80",
  );
  const h2MergedClassName = twMerge(
    "Poppins w-[33px] h-[27px] not-italic font-normal text-lg leading-[27px] text-[#EAEAEA]",
  );

  const onClickBuy = (listing: Listing) => {
    setListing(listing);
  };

  return (
    <div className="px-6 py-8">
      <header>
        <div className="flex flex-row items-center gap-2 w-[214px] h-[42px] p-0">
          <h1 className={h1MergedClassName}>OTC Market</h1>
          <div className="w-[11px] h-0 rotate-90 border-[0.4px] border-solid border-[rgba(255,255,255,0.63)]"></div>
          <h2 className={h2MergedClassName}>Buy</h2>
        </div>
      </header>
      <div className="mt-5 w-full">
        <table className="block w-full text-[#FFFFFF] font-normal text-[15px] leading-[18px]">
          <thead className="w-full flex flex-row items-center justify-between h-10 text-[#FFFFFF]  font-normal text-[15px] leading-[18px] bg-[#22252E]">
            <tr className="flex flex-row justify-between w-full">
              <th className="pl-3 w-full flex justify-start font-normal p-0">
                All
              </th>
              <th className="w-full flex justify-start font-normal p-0">
                Price
              </th>
              <th className="w-full flex justify-start font-normal p-0">
                Collateral
              </th>
              <th className="w-full flex justify-start font-normal p-0">
                Time
              </th>
              <th className="w-full flex justify-start font-normal text-center p-0">
                Transaction
              </th>
            </tr>
          </thead>
          <tbody className="block w-full max-h-[594px] font-normal overflow-y-scroll scrollbar-hide">
            {buyList.map((listing: Listing, index: number) => (
              <tr
                key={index}
                className="h-[66px] flex flex-row items-center justify-between w-full"
              >
                <td className="align-middle w-full flex flex-row items-center">
                  <div className="flex items-center gap-2 ml-3 p-0">
                    <div>{index + 1}.</div>
                    <SvgIcon.Injective className="h-6 w-6" />
                    <span className="flex flex-row items-center gap-0.5">
                      <div>{listing.token.amount}</div>
                      <div>{listing.token.denom}</div>
                    </span>
                  </div>
                </td>
                <td className="w-full flex flex-row items-center">
                  <div className="flex flex-row items-center gap-1.5 p-0">
                    <SvgIcon.Usdt className="w-6 h-6" />
                    <span>{listing.price.amount}</span>
                  </div>
                </td>
                <td className="w-full align-middle gap-2 p-0 flex flex-row items-center">
                  <div className="flex items-center gap-2 p-0">
                    <SvgIcon.Injective className="h-6 w-6" />
                    <span className="flex flex-row items-start gap-0.5">
                      <div>{listing.collateral.amount}</div>
                      <div>{listing.collateral.denom}</div>
                    </span>
                  </div>
                </td>
                <td className="w-full mr-3 flex flex-row items-center">
                  <span>{listing.createdAt}</span>
                </td>
                <td className="w-full align-middle text-center p-0 flex flex-row items-center">
                  <button
                    className="bg-omi-blue w-[79px] h-8 rounded-[14px]"
                    onClick={() => onClickBuy(listing)}
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
            {/* {Data.map((ele) => {
              return handleCreateTr(ele);
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyList;
