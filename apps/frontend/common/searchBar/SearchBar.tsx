import { useState } from "react";

interface Props {
  className?: string;
  placeholder?: string;
  onClick?: () => void;
}

const SearchBar: React.FC<Props> = ({ className, placeholder, onClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto">
      <form>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-4 w-4" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                clip-rule="evenodd"
                stroke="white"
              ></path>
              <path
                d="M14 14L11.1 11.1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="sr-only">Search</span>
          <input
            type="text"
            onChange={handleInputValue}
            name="search"
            className="block text-[#EAEAEA] gap-2 bg-grey/9 w-full border rounded-3xl py-4 pl-9 pr-3 shadow-sm placeholder:
            Pretendard placeholder:text-[#EAEAEA] focus:placeholder-transparent focus:outline-none caret-[#EAEAEA] sm:text-sm"
            placeholder={
              placeholder
                ? placeholder
                : "Please enter the name of the cryptocurrency"
            }
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;

// <div>
//   <input
//     type="text"
//     placeholder={placeholder ? placeholder : "search"}
//     className={`flex flex-row items-center gap-2 w-[666px] h-11 px-7 py-4 rounded-3xl bg-grey/9 placeholder-font-light placeholder-text-[15px] placeholder-text-[#C6C6C6] placeholder-bg-[url('/img/hero-pattern.svg')] focus:outline-none focus:ring-1  ${className}`}
//   />
//   <div className="bg-[url('/asset/search.svg')] w-4 h-4"></div>
// </div>
