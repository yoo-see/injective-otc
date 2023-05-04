import Link from "next/link";
import { useRouter } from "next/router";
import { SvgIcon } from "public/icon";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <nav className="flex flex-col justify-between h-full w-64 bg-[#242731] px-4 py-8">
      <Link
        href="/"
        className="flex items-center py-4 gap-2 text-white text-xl"
      >
        <SvgIcon.Injective className="h-6 w-6" />
        Injective OTC
      </Link>
      <div className="flex flex-col h-full mt-28">
        <div className="flex items-center py-4 border-b-[0.5px] border-b-[rgba(255,255,255,0.12)] border-solid">
          <SvgIcon.ArrowLeftRight />
          <div className="pl-2 text-white text-lg">OTC Market</div>
        </div>
        <div className="flex flex-col py-3 gap-1">
          <Link
            href="/buy"
            className={`py-3.5 px-4 text-white text-base rounded-[10px] ${
              isActive("/buy")
                ? "bg-grey/10 text-[#2E63F6] border-l-2 border-solid border-[#2E63F6]"
                : "hover:bg-gray-700"
            }`}
          >
            Buy
          </Link>
          <Link
            href="/sell"
            className={`py-3.5 px-4 text-white text-base rounded-[10px] ${
              isActive("/sell")
                ? "bg-grey/10 text-[#2E63F6] border-l-2 border-solid border-[#2E63F6]"
                : "hover:bg-gray-700"
            }`}
          >
            Sell
          </Link>
        </div>
        <Link href="/board" className="flex items-center mt-12">
          <SvgIcon.Dashboard />
          <div className="pl-2 text-white font-semibold text-lg">Dashboard</div>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
