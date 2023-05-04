import { SvgIcon } from "public/icon";

interface Props {
  onClick: () => void;
}

const NotificationButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={"relative w-11 h-11"}>
      <button
        onClick={onClick}
        className={`flex justify-center items-center bg-grey/9 w-11 h-11 rounded-[999px]`}
      >
        <SvgIcon.Bell />
      </button>
      {/* <div
        className={`absolute flex justify-center align-center right-0 top-0 Pretendard text-xs font-semibold bg-red-600 text-white w-4 h-4 rounded-[39px] z-[99]`}
      >
        <span>3</span>
      </div> */}
    </div>
  );
};

export default NotificationButton;
