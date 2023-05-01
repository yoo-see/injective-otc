import Link from "next/link";
import { useRouter } from "next/router";
import { SvgIcon } from "public/icon";

const Sidebar = () => {
  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <nav className="flex flex-col justify-between h-screen w-64 bg-gray-800 px-4 py-8">
      <Link href="/" className="py-4">
        <SvgIcon.Logo />
      </Link>
      <div className="flex flex-col h-full mt-36">
        <div className="py-4 px-4 text-white border-b-[0.5px] border-b-[rgba(255,255,255,0.12)] border-solid">
          OTC Market
        </div>
        <div className="flex flex-col h-full py-3 gap-1">
          <Link
            href="/buy"
            className={`py-3.5 px-4 text-white rounded-[10px] ${
              isActive("/buy")
                ? "bg-gray-900 text-[#2E63F6] border-l-2 border-solid border-[#2E63F6]"
                : "hover:bg-gray-700"
            }`}
          >
            Buy
          </Link>
          <Link
            href="/sell"
            className={`py-3.5 px-4 text-white rounded-[10px] ${
              isActive("/sell")
                ? "bg-gray-900 text-[#2E63F6] border-l-2 border-solid border-[#2E63F6]"
                : "hover:bg-gray-700"
            }`}
          >
            Sell
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
