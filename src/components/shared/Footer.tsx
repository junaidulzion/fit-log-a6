import Image from "next/image";
import React from "react";
import FooterLogo from "@/assets/SVG.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0d0f12]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-7 sm:flex-row">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={FooterLogo}
            alt="FitLog"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          <h2 className="text-xl font-bold tracking-tight text-white">
            Fit<span className="text-emerald-500">log</span>
          </h2>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

