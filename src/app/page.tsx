import HeroSection from "@/components/homePage/HeroSection";
import WorkoutLibrary from "@/components/homePage/WorkoutLibrary";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WorkoutLibrary/>
    </div>
  )
}
