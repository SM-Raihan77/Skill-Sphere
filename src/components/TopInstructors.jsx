"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { motion } from "motion/react";
import { GraduationCap } from "@gravity-ui/icons";
import { CiMedal } from "react-icons/ci";

const instructors = [
  {
    id: 1,
    name: "Jhankar Mahbub",
    role: "Web Development",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchQaWL31oza9TgPbZamoQOmLqyu55-_TIfg&s",
  },
//   {
//     id: 2,
//     name: "Sarah Khan",
//     role: "UI/UX Design",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
  {
    id: 3,
    name: "Khalid Farhan",
    role: "Digital Marketing",
    image: "https://yt3.googleusercontent.com/5dxYD3ECa6JrqQi63o4_elDB5rkyJxBsRLCkYzcI_nY3_LIPnPWfhHsdYO3CVUaXVoWFRr_eygI=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Data Science",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TopInstructors = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 "
      >
        <CiMedal className="text-purple-500 text-3xl font-extrabold "/>
        Top Instructors
      </motion.h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {instructors.map((ins, index) => (
          <motion.div
            key={ins.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 text-center border border-divider hover:shadow-xl transition transform hover:-translate-y-2">

              {/* Image */}
              <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={ins.image}
                  alt={ins.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold">{ins.name}</h3>

              {/* Role */}
              <p className="text-sm text-gray-500">{ins.role}</p>

            </Card>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default TopInstructors;