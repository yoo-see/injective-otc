import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ className, text, onClick }) => {
  const mergedClassName = twMerge(
    `bg-omi-blue w-[428px] h-14 rounded-lg Poppins text-white leading-6 font-normal text-base`,
    className,
  );
  return (
    <button className={mergedClassName} onClick={onClick}>
      <span>{text ? text : "Go to history"}</span>
    </button>
  );
};

export default Button;
