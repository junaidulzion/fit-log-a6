"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-white"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-gray-800 bg-black px-4 py-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <Link
              href="/workout"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#C2F800]"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#C2F800]"
            >
              My Plan
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;