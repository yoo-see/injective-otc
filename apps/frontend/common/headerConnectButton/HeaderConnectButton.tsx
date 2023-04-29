interface Props {}

const HeaderConnectBt: React.FC<Props> = ({}) => {
  return (
    <div
      className={
        "flex flex-row justify-center items-center bg-grey/9 gap-2 w-[155px] h-11 px-4 py-2.5 rounded-[100px]"
      }
    >
      <div
        className={
          "Pretendard w-[103px] h-[21px] text-white text-[15px] leading-[142.34%] flex items-center text-center text-[#EAEAEA]"
        }
      >
        OxEB60...4315
      </div>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="#2864FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default HeaderConnectBt;
