import PopularCourses from "@/components/PopularCourses";
import Hero from "@/components/shared/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    <PopularCourses />
   </div>
  );
}
