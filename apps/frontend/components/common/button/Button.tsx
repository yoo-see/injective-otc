import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  text,
  onClick,
  disabled = false,
}) => {
  const disabledClassName = disabled ? "bg-grey/5 " : "bg-omi-blue";
  const mergedClassName = twMerge(
    `w-[428px] h-14 rounded-lg Poppins text-white leading-6 font-normal text-base`,
    disabledClassName,
    className,
  );

  return (
    <button className={mergedClassName} onClick={onClick}>
      <span>{text ? text : "Go to history"}</span>
    </button>
  );
};

export default Button;
