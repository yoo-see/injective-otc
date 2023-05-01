import { useState } from "react";

import { SvgIcon } from "public/icon";

interface Props {
  className?: string;
  placeholder?: string;
  onClick?: () => void;
}

const SearchInput: React.FC<Props> = ({ className, placeholder, onClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto">
      <form>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SvgIcon.Search />
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

export default SearchInput;
