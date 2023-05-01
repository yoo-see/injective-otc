import EtherIcon from "public/svg/ether-icon.svg";
import { twMerge } from "tailwind-merge";

const BuyList = () => {
  const h1MergedClassName = twMerge(
    "Poppins w-[165px] h-[42px] not-italic font-medium text-[28px] leading-[42px] text-white opacity-80",
  );
  const h2MergedClassName = twMerge(
    "Poppins w-[33px] h-[27px] not-italic font-normal text-lg leading-[27px] text-[#EAEAEA]",
  );

  return (
    <section>
      <header>
        <div className="flex flex-row items-center gap-2 w-[214px] h-[42px] p-0">
          <h1 className={h1MergedClassName}>OTC Market</h1>
          <div className="w-[11px] h-0 rotate-90 border-[0.4px] border-solid border-[rgba(255,255,255,0.63)]"></div>
          <h2 className={h2MergedClassName}>Buy</h2>
        </div>
      </header>
      <body className="mt-5">
        <table className="w-[884px] Pretendard text-[#FFFFFF] font-normal text-[15px] leading-[18px]">
          <thead className="h-10 Pretendard text-[#FFFFFF]  font-normal text-[15px] leading-[18px]">
            <tr className="text-left ">
              <th className="pl-3 font-normal">All</th>
              <th className="font-normal">Price</th>
              <th className="font-normal">Collateral</th>
              <th className="font-normal">Time</th>
              <th className="font-normal">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {/* {responseData.map(ele)=>{
              return ( <tr>
                <td className="flex">
                  <div>1.</div>
                  <image></image>
                  <div>
                    <span>5 ETH</span>
                    <span>On ethereum</span>
                  </div>
                </td>
                <td>
                  <image></image>
                  <span></span>
                </td>
                <td>
                  {" "}
                  <image></image>
                  <div>
                    <span>5 ETH</span>
                    <span>On ethereum</span>
                  </div>
                </td>
                <td>
                  <span>2023.03.25 16:00</span>
                </td>
                <td></td>
              </tr>)
 
            }} */}
            <tr className="">
              <td>
                <div className="flex items-center h-[66px] gap-2 ml-3 p-0">
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
              <td>
                <div className="flex flex-row items-center gap-1.5 p-0">
                  {" "}
                  <EtherIcon />
                  <span>1519.00</span>
                </div>
              </td>
              <td className="flex items-center h-[66px] gap-2 p-0">
                <div className="flex items-center h-[66px] gap-2 ml-3 p-0">
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
              <td className="mr-3">
                <span>2023.03.25 16:00</span>
              </td>
              <td>
                <button>buy</button>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </section>
  );
};

export default BuyList;
