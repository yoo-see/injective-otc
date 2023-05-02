import { twMerge } from "tailwind-merge";

interface Props {
  text?: string;
  onClick?: () => void;
}

const ConnectButton: React.FC<Props> = ({ text, onClick }) => {
  const connectClassName = text
    ? "bg-grey/9 font-semibold text-grey/2"
    : "bg-white font-medium text-omi-blue";

  const mergedClassName = twMerge(
    "px-4 py-2.5 rounded-[100px] text-[15px]",
    connectClassName,
  );

  return (
    <button className={mergedClassName} onClick={onClick}>
      {text ? text : "Connect"}
    </button>
  );
};

export default ConnectButton;
