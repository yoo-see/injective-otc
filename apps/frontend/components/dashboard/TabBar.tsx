import { useRecoilState } from "recoil";

import { tabState } from "../../states";

const TabBar = () => {
  const [activeTab, setActiveTab] = useRecoilState(tabState);

  return (
    <div className="flex">
      <div
        key={"Buyer"}
        className={`px-[32px] py-[5px] cursor-pointer text-[17px] rounded-t-md ${
          activeTab.tab === "Buyer"
            ? "bg-omi-blue text-white font-semibold text-[17px]"
            : "text-omi-blue font-normal border-b-[1px] border-b-omi-blue border-solid bg-[#22252D]"
        }`}
        onClick={() => setActiveTab({ tab: "Buyer" })}
      >
        Buyer
      </div>
      <div
        key={"Seller"}
        className={`px-[32px] py-[5px] cursor-pointer text-[17px] rounded-t-md ${
          activeTab.tab === "Seller"
            ? "bg-omi-blue text-white font-semibold text-[17px]"
            : "text-omi-blue font-normal border-b-[1px] border-b-omi-blue border-solid bg-[#22252D]"
        }`}
        onClick={() => setActiveTab({ tab: "Seller" })}
      >
        Seller
      </div>
    </div>
  );
};

export default TabBar;
