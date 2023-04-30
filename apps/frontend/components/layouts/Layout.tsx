import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="w-full h-full bg-gray-900">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
