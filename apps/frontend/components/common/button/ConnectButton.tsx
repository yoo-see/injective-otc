interface Props {}

const ConnectButton: React.FC<Props> = ({}) => {
  return (
    <div
      className={
        "flex flex-row justify-center items-center bg-grey/9 gap-2 w-[155px] h-11 px-4 py-2.5 rounded-[100px]"
      }
    >
      <div
        className={
          "Pretendard w-[103px] h-[21px] text-[15px] leading-[142.34%] flex items-center text-center text-[#EAEAEA]"
        }
      >
        OxEB60...4315
      </div>
    </div>
  );
};

export default ConnectButton;
