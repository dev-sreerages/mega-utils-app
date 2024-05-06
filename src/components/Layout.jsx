"use client";

import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { StatusBar } from "@capacitor/status-bar";
import { CSSTransition } from "react-transition-group";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  // const hideStatusBar = async () => {
  //   await StatusBar.hide();
  // };

  // useEffect(() => {
  //   hideStatusBar();
  // });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <div className="h-screen w-screen overflow-hidden">
      {isLoading ? (
        <div className="loader-container transition-all ease-in-out duration-300">
          <div className="loader">
            <div className="loader-small"></div>
            <div className="loader-large"></div>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <div className="h-[calc(100vh-70px)] overflow-y-auto no-scrollbar">
            {children}
          </div>
          <NavigationBar />
        </div>
      )}
    </div>
  );
};

export default Layout;
