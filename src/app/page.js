import PopularCourses from "@/components/PopularCourses";
import Hero from "@/components/shared/Hero";
import Image from "next/image";
import LearningTips from "../components/LearningTips";
import TopInstructors from "@/components/TopInstructors";

export default function Home() {
  return (
   <div>
    <Hero />
    <PopularCourses />
    <LearningTips/>
    <TopInstructors/>
   </div>
  );
}
