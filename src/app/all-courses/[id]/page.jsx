
import Image from "next/image";
import React from "react";
import { FaSterlingSign } from "react-icons/fa6";

const CourseDetailsPage = async ({ params }) => {
  
  const { id } = await params;
    const res = await fetch("https://skill-sphere-36md.vercel.app/data.json",);
     const courses = await res.json();
     const course = courses.find(c => c.id == id);
     // console.log(course, "course detail

  if (!course) {
    return <p className="text-red-500">Course not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SIDE - Course Details */}
        <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6">
          <h1 className="text-3xl text-center font-bold mb-4">Course Details</h1>

          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={300}
            className="rounded-lg mb-4 items-center"
          />

          <h2 className="text-2xl font-semibold mb-2 text-center">{course.title}</h2>

          <p className="text-gray-700 mb-4">
            {course.description}
          </p>

          <div className="flex gap-4 text-sm text-gray-600">
            <p><FaSterlingSign />Rating: {course.rating}</p>
            <p>📊 Level: {course.level}</p>
          </div>
        </div>

        {/* RIGHT SIDE - Static Curriculum */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4 text-center">
            Full Course Curriculum
          </h2>

          <ul className="space-y-3 text-gray-700 text-center">
            <li>✔ Introduction to the Course</li>
            <li>✔ Basic Concepts</li>
            <li>✔ Hands-on Projects</li>
            <li>✔ Advanced Topics</li>
            <li>✔ Real-world Applications</li>
            <li>✔ Final Project</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;