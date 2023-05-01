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
        <table className="w-[884px] text-[#EAEAEA]">
          <thead className="p-12">
            <tr className="text-left">
              <th>All</th>
              <th>Price</th>
              <th>Collateral</th>
              <th>Time</th>
              <th>Transaction</th>
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
            <tr>
              <td className=" flex flex-row items-center gap-2 p-0;">
                <div>1.</div>
                <EtherIcon />
                <div className="flex flex-col items-start gap-0.5 h-9 p-0">
                  <span className="flex flex-row items-start gap-0.5 p-0;">
                    <div>5</div>
                    <div>ETH</div>
                  </span>
                  <span className="Pretendard font-normal text-[13px] leading-4 text-[#C6C6C6]">
                    On ethereum
                  </span>
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
            </tr>
          </tbody>
        </table>
      </body>
    </section>
  );
};

export default BuyList;
