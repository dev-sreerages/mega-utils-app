"use client";

import * as React from "react";
import { Icon } from "@iconify/react";

const NavigationBar = () => {
  return (
    <div className="h-[60px] overflow-hidden grid grid-cols-3 justify-center items-center">
      <button type="button" className="h-full w-full">
        <Icon icon="solar:home-2-outline" className="w-8 h-8" />
      </button>
      <button type="button" className="h-full w-full">
        <Icon icon="solar:user-outline" className="w-8 h-8" />
      </button>
      <button type="button" className="h-full w-full">
        <Icon icon="solar:settings-outline" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default NavigationBar;
