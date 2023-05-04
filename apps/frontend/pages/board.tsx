import TabBar from "components/dashboard/TabBar";
import { NextPage } from "next";

const BoardPage: NextPage = () => {
  return (
    <div className="px-6 py-8">
      <p className="font-medium text-[28px] text-white">Exchange Status</p>
      <div className="pt-6 pb-4">
        <TabBar />
      </div>
    </div>
  );
};

export default BoardPage;
