import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="min-h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <div className="w-full h-full bg-grey/10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
