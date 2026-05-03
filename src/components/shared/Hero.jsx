
"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="h-[60vh] w-full relative flex items-center rounded-lg shadow-2xl overflow-hidden mt-10">

      {/* Background  */}
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
      <div className="relative w-full h-full bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl"
          >
            Upgrade Your Skills Today
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl mb-6 max-w-xl text-gray-200"
          >
            Enhance your knowledge and advance your career with our expert-led courses.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-4"
          >
            <Link href="/signup">
              <Button className="bg-linear-to-r from-[#AD6350] to-[#00D6B7] text-white border-none">
                Enrol Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button className="bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-2">
                Subscribe
                <MdEmail />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;