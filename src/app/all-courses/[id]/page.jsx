import Image from 'next/image';
import React from 'react';

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://skill-sphere-36md.vercel.app/data.json",);
    const courses = await res.json();
    const course = courses.find(c => c.id == id);
    console.log(course, "course details");
    return (
        <div>
            
                <h1 className='text-3xl font-bold mb-6'>Course Details</h1>
                
                <h2 className='text-2xl font-semibold mb-4'>{course.title}</h2>
                <p className='text-lg text-gray-700 mb-4'>{course.description}</p>
                <p className='text-sm text-gray-500'>Rating: {course.rating}</p>
                <p className='text-sm text-gray-500'>Level: {course.level}</p>
                <img
                            src={course.image}
                            alt={course.title}
                            width={400}
                            height={160}
                        /> 
             
        </div>
    );
};

export default CourseDetailsPage;