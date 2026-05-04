

import React from 'react';

import CourseCard from './CourseCard';
import { HiTrendingUp } from 'react-icons/hi';



const PopularCourses = async () => {

    const res = await fetch("https://skill-sphere-36md.vercel.app/data.json");

    const courses = await res.json();

    const popularCourses = [...courses]

        .sort((a, b) => b.rating - a.rating)

        .slice(0, 3);

    // console.log(popularCourses, "popular courses");

    return (

        <div>
            <h1 className='text-3xl font-bold flex items-center justify-center gap-2 m-10'>
                <HiTrendingUp className='text-purple-500'/>
                <span>Popular Courses</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                {popularCourses.map(course => (

                    <div key={course.id} className='border rounded-lg p-4 shadow-md'>

                        <CourseCard course={course} />

                    </div>

                ))}

            </div>



        </div>

    );

};



export default PopularCourses;