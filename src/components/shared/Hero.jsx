



"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

const Banner = () => {
  return (
    
    <div className="min-h-[50vh] md:h-[60vh] w-full relative flex items-center rounded-lg shadow-2xl overflow-hidden mt-6 md:mt-10">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="relative w-full h-full bg-black/60 flex items-center py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left text-white w-full">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-2xl mx-auto md:mx-0 leading-tight"
          >
            Upgrade Your Skills Today
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-gray-200"
          >
            Enhance your knowledge and advance your career with our expert-led courses.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <Link href="/signup" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-linear-to-r from-[#AD6350] to-[#00D6B7] text-white border-none font-semibold px-8">
                Enrol Now
              </Button>
            </Link>

            <Link href="/pricing" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-purple-500 text-white hover:bg-purple-600 flex items-center justify-center gap-2 font-semibold px-8">
                Subscribe
                <MdEmail className="text-lg" />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;