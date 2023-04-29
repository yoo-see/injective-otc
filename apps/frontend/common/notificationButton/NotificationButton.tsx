interface Props {}

const Notification: React.FC<Props> = ({}) => {
  return (
    <div className={"relative w-11 h-11"}>
      <button
        className={`flex justify-center items-center bg-grey/9 w-11 h-11 rounded-[999px]`}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5.33331C12 4.27245 11.5786 3.25503 10.8284 2.50489C10.0783 1.75474 9.06087 1.33331 8 1.33331C6.93913 1.33331 5.92172 1.75474 5.17157 2.50489C4.42143 3.25503 4 4.27245 4 5.33331C4 9.99998 2 11.3333 2 11.3333H14C14 11.3333 12 9.99998 12 5.33331Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        className={`absolute flex justify-center align-center right-0 top-0 Pretendard text-xs font-semibold bg-red-600 text-white w-4 h-4 rounded-[39px] z-[99]`}
      >
        <span>3</span>
      </div>
    </div>
  );
};

export default Notification;
