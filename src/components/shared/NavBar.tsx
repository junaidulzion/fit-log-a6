import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";

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

        {/* Desktop / Tablet Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          <Link
            href="/workout"
            className="group relative py-5 text-sm font-medium text-gray-400 transition hover:text-[#C2F800] lg:text-base"
          >
            Workouts
            <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/my-plan"
            className="group relative py-5 text-sm font-medium text-gray-400 transition hover:text-[#C2F800] lg:text-base"
          >
            My Plan
            <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          <button className="text-sm font-medium text-gray-400 transition hover:text-white lg:text-base">
            Plan
          </button>

          <button className="text-sm font-medium text-gray-400 transition hover:text-white lg:text-base">
            Saved
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-sm text-white hover:bg-gray-800"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-xl border border-gray-700 bg-gray-900 p-3 shadow-xl"
          >
            <li>
              <Link
                href="/workout"
                className="text-gray-300 hover:text-white"
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className="text-gray-300 hover:text-white"
              >
                My Plan
              </Link>
            </li>

            <li>
              <button className="text-gray-300 hover:text-white">
                Plan
              </button>
            </li>

            <li>
              <button className="text-gray-300 hover:text-white">
                Saved
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;