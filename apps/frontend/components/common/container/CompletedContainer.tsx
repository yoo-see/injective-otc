import Button from "components/common/button/Button";
import { SvgIcon } from "public/icon";

interface Props {
  backText: string;
  goToBack: () => void;
  title?: string;
  description: string;
  subDescription: string;
  goToButton: () => void;
}

const CompletedContainer: React.FC<Props> = ({
  backText,
  goToBack,
  title,
  description,
  subDescription,
  goToButton,
}) => {
  return (
    <div className="px-6 py-8 h-full">
      <button className="flex items-center" onClick={goToBack}>
        <SvgIcon.ChevronCircleLeft />
        <p className="ml-1 font-medium text-xl text-white">
          Back to {backText}
        </p>
      </button>
      <div className="flex justify-center pt-[20vh] h-full">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-[28px] text-white mb-2">
            Order {title} completed!
          </p>
          <p className="font-normal text-base text-grey/2">{description}</p>
          <p className="font-normal text-base text-grey/2">{subDescription}</p>
          <Button
            className="mt-[52px]"
            text="Go to Dashboard"
            onClick={goToButton}
          />
        </div>
      </div>
    </div>
  );
};

export default CompletedContainer;
