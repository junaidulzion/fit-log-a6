import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import NavActions from "@/context/NavAction";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="FITLOG Logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />

          <span className="text-lg font-bold tracking-wide text-white sm:text-xl">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          <Link
            href="/workout"
            className="text-sm font-medium text-gray-400 hover:text-[#C2F800] lg:text-base"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-medium text-gray-400 hover:text-[#C2F800] lg:text-base"
          >
            My Plan
          </Link>
        </div>

        {/* Client Component */}
        <NavActions />

        {/* Mobile Menu */}
        {/* ... */}
        
      </div>
    </nav>
  );
};

export default NavBar;