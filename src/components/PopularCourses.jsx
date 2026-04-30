import React from 'react';
import CourseCard from './CourseCard';

const PopularCourses = async() => {
    const res = await fetch("https://skill-sphere-36md.vercel.app/data.json",);
    const courses = await res.json();
    const popularCourses = [...courses]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);
    console.log(popularCourses, "popular courses");
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4  text-center'>Popular Courses</h2>
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