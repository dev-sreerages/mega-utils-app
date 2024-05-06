"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const MenuItems = [
  {
    name: "Home",
    href: "/",
    icon: "solar:home-2-outline",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: "solar:user-outline",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "solar:settings-outline",
  },
];

const NavigationBar = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div className="h-[70px] overflow-hidden grid grid-cols-3 justify-center items-center fade-in">
      {MenuItems.map((item, idx) => (
        <button
          type="button"
          onClick={() => {
            router.push(item.href);
            setCurrentPage(idx + 1);
          }}
          className={`h-full w-full border-none ${
            currentPage === idx + 1 ? "text-primary" : "text-dark"
          } bg-gray-100`}>
          <Icon
            icon={item.icon}
            className={`w-7 h-7  px-[20px] py-1 rounded-full ${
              currentPage === idx + 1 ? "bg-primary-light text-primary" : ""
            } `}
          />
          <p
            className={`text-xs transition-all ease-in-out duration-300 font-semibold overflow-hidden ${
              currentPage === idx + 1
                ? "h-[15px] text-primary"
                : "h-[0px] text-white"
            }`}>
            {item.name}
          </p>
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
