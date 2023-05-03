import { SvgIcon } from "public/icon";

interface Props {
  handleModalFunc: () => void;
  getTokenSelect: any;
  tokens?: any[];
}

const SelectTokenModal: React.FC<Props> = ({
  handleModalFunc,
  getTokenSelect,
  tokens,
}) => {
  return (
    <div
      onClick={handleModalFunc}
      className="fixed w-full h-full bg-[rgba(0,0,0,0.65)] flex justify-center items-center left-0 top-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white w-[428px] h-[371px] rounded-[20px] left-0 top-0 ml-64"
      >
        <div className="flex flex-row justify-between items-center w-[423px] h-[62px] px-6 py-4 left-0 top-0">
          <div className="Poppins font-medium text-lg leading-[30px] text-[#3A3A3C]">
            Select Token
          </div>
          <SvgIcon.Close
            onClick={handleModalFunc}
            className="hover:cursor-pointer hover:bg-grey/3 rounded-[100px]"
          />
        </div>
        <div className="block h-[300px] rounded-[20px] gap-7 px-6 py-2 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-h-5 scrollbar-thumb-[#959595] scrollbar-track-none scrollbar-thumb-rounded ">
          {tokens?.map((ele, idx) => {
            return (
              <div key={`${ele.token} + ${idx}`} className="flex">
                <div
                  onClick={getTokenSelect}
                  className="flex flex-row items-center gap-2 py-1 px-3 mb-4 rounded-[20px] hover:bg-grey/3 hover:cursor-pointer"
                >
                  <SvgIcon.Ether />
                  <div className="Pretendard font-normal text-[15px] leading-[18px] text-[#22252E]">
                    {ele.token}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectTokenModal;
