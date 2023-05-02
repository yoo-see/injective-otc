import EtherIcon from "public/svg/ether-icon.svg";
import { twMerge } from "tailwind-merge";

const BuyList = () => {
  const h1MergedClassName = twMerge(
    "Poppins w-[165px] h-[42px] not-italic font-medium text-[28px] leading-[42px] text-white opacity-80",
  );
  const h2MergedClassName = twMerge(
    "Poppins w-[33px] h-[27px] not-italic font-normal text-lg leading-[27px] text-[#EAEAEA]",
  );

  const handleCreateTr = (ele: string) => {
    const tr = (
      <tr className="h-[66px] w-full">
        <td className="align-middle w-[170px]">
          <div className="flex items-center gap-2 ml-3 p-0">
            <div>1.</div>
            <EtherIcon />
            <div className="flex flex-col items-start gap-0.5 h-9 p-0">
              <span className="flex flex-row items-start gap-0.5">
                <div>5</div>
                <div>ETH</div>
              </span>
              <span className="Pretendard font-normal text-[13px] leading-4 text-[#C6C6C6]">
                On ethereum
              </span>
            </div>
          </div>
        </td>
        <td className="w-[170px]">
          <div className="flex flex-row items-center gap-1.5 p-0">
            <EtherIcon />
            <span>1519.00</span>
          </div>
        </td>
        <td className="w-[170px] align-middle gap-2 p-0">
          <div className="flex items-center gap-2 p-0">
            <EtherIcon />
            <div className="flex flex-col items-start gap-0.5 h-9 p-0">
              <span className="flex flex-row items-start gap-0.5">
                <div>5</div>
                <div>ETH</div>
              </span>
              <span className="Pretendard font-normal text-[13px] leading-4 text-[#C6C6C6]">
                On ethereum
              </span>
            </div>
          </div>
        </td>
        <td className="w-[170px] mr-3">
          <span>2023.03.25 16:00</span>
        </td>
        <td className="w-[170px] align-middle text-center p-0">
          <button className="bg-omi-blue w-[79px] h-8 rounded-[14px]">
            Buy
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="px-6 ">
      <header>
        <div className="flex flex-row items-center gap-2 w-[214px] h-[42px] p-0">
          <h1 className={h1MergedClassName}>OTC Market</h1>
          <div className="w-[11px] h-0 rotate-90 border-[0.4px] border-solid border-[rgba(255,255,255,0.63)]"></div>
          <h2 className={h2MergedClassName}>Buy</h2>
        </div>
      </header>
      <div className="mt-5">
        <table className="block w-[884px] Pretendard text-[#FFFFFF] font-normal text-[15px] leading-[18px]">
          <thead className="w-[884px] h-10 Pretendard text-[#FFFFFF]  font-normal text-[15px] leading-[18px] bg-[#22252E]">
            <tr className="text-left">
              <th className="pl-3 w-[170px] font-normal p-0">All</th>
              <th className="w-[170px] font-normal p-0">Price</th>
              <th className="w-[170px] font-normal p-0">Collateral</th>
              <th className="w-[170px] font-normal p-0">Time</th>
              <th className="w-[170px] font-normal text-center p-0">
                Transaction
              </th>
            </tr>
          </thead>
          <tbody className="block w-full max-h-[594px] font-normal overflow-y-scroll scrollbar-hide">
            <tr className="h-[66px] w-full">
              <td className="align-middle w-[170px]">
                <div className="flex items-center gap-2 ml-3 p-0">
                  <div>1.</div>
                  <EtherIcon />
                  <div className="flex flex-col items-start gap-0.5 h-9 p-0">
                    <span className="flex flex-row items-start gap-0.5">
                      <div>5</div>
                      <div>ETH</div>
                    </span>
                    <span className="Pretendard font-normal text-[13px] leading-4 text-[#C6C6C6]">
                      On ethereum
                    </span>
                  </div>
                </div>
              </td>
              <td className="w-[170px]">
                <div className="flex flex-row items-center gap-1.5 p-0">
                  <EtherIcon />
                  <span>1519.00</span>
                </div>
              </td>
              <td className="w-[170px] align-middle gap-2 p-0">
                <div className="flex items-center gap-2 p-0">
                  <EtherIcon />
                  <div className="flex flex-col items-start gap-0.5 h-9 p-0">
                    <span className="flex flex-row items-start gap-0.5">
                      <div>5</div>
                      <div>ETH</div>
                    </span>
                    <span className="Pretendard font-normal text-[13px] leading-4 text-[#C6C6C6]">
                      On ethereum
                    </span>
                  </div>
                </div>
              </td>
              <td className="w-[170px] mr-3">
                <span>2023.03.25 16:00</span>
              </td>
              <td className="w-[170px] align-middle text-center p-0">
                <button className="bg-omi-blue w-[79px] h-8 rounded-[14px]">
                  Buy
                </button>
              </td>
            </tr>
            {/* {Data.map((ele)=>{
              return handleCreateTr(ele)
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyList;
