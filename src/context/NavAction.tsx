"use client";

import React, { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutContext";

const NavActions = () => {
  const { todaysPlan, saveForLater } = useContext(WorkoutsContext);

  return (
    <div className="hidden items-center gap-3 md:flex lg:gap-5">
      <button className="text-sm font-medium text-gray-400 transition hover:text-white lg:text-base">
        Plan
        <span className="ml-1 rounded-full bg-[#C2F10D] px-2 py-0.5 text-xs font-bold text-black">
          {todaysPlan.length}
        </span>
      </button>

      <button className="text-sm font-medium text-gray-400 transition hover:text-white lg:text-base">
        Saved
        <span className="ml-1 rounded-full bg-[#C2F10D] px-2 py-0.5 text-xs font-bold text-black">
          {saveForLater.length}
        </span>
      </button>
    </div>
  );
};

export default NavActions;