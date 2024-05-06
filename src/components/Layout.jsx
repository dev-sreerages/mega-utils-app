import React from "react";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="h-[calc(100vh-60px)]">{children}</div>
      <NavigationBar />
    </div>
  );
};

export default Layout;
