import CourseCard from '@/components/CourseCard';
import React from 'react';

const CoursesPage =async () => {
    const res = await fetch("https://skill-sphere-36md.vercel.app/data.json",);
    const courses = await res.json();
    // console.log(courses, "all courses");
    return (
        <div>
            <h1 className='text-3xl font-bold mb-6'>All Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {courses.map(course => (
                    <div key={course.id} className='border rounded-lg p-4 mb-4 shadow-md'>
                       <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;