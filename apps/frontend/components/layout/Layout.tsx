import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="w-full h-full bg-grey/10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
