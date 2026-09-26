import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeroImage from "@/assets/banner.png";

const HeroSection = () => {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#14161b] shadow-2xl">
          
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl sm:h-64 sm:w-64" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl sm:h-80 sm:w-80" />

          {/* Main Content */}
          <div className="relative grid items-center lg:grid-cols-2">

            {/* ================= LEFT CONTENT ================= */}
            <div className="z-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

              {/* Label */}
              <div className="mb-5 flex items-center gap-2 sm:mb-6">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                <span className="text-[10px] font-bold tracking-[0.18em] text-lime-400 sm:text-xs sm:tracking-[0.2em]">
                  WORKOUT LIBRARY
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                Train With Intent.
                <br />
                <span className="text-lime-400">
                  Log Every Set.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7">
                FitLog is a dark, no-nonsense gym companion. Pick a lift,
                lock it into today's plan, and watch your week's work add up.
              </p>

              {/* Button */}
              <div className="mt-7 sm:mt-8">
                <Link
                  href="/workouts"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] sm:w-auto"
                >
                  Browse Workouts

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative flex min-h-[280px] items-center justify-center px-6 pb-8 sm:min-h-[350px] sm:px-10 lg:min-h-[430px] lg:px-8 lg:pb-0">

              {/* Image Glow */}
              <div className="absolute h-52 w-52 rounded-full bg-lime-400/10 blur-3xl sm:h-64 sm:w-64" />

              {/* Image */}
              <div className="relative z-10 w-full max-w-[350px] sm:max-w-[420px] lg:max-w-[500px]">
                <Image
                  src={HeroImage}
                  alt="Workout training"
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;