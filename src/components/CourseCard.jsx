import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    return (
        <Card className="p-4 shadow-sm border border-gray-100">
            
                <Image
                    src={course.image}
                    alt={course.title}
                    width={400} 
                    height={160}
                    className='w-full h-40 object-cover rounded-md mb-4'
                  
                />
                <h3 className='text-lg font-semibold mb-2 line-clamp-1'>{course.title}</h3>
                <p className='text-sm text-gray-600 mb-2 line-clamp-2 h-10'>
                    {course.description}
                </p>
                
                <div className='flex justify-between'>
                <div className="flex items-center mb-4">
                    <p className='text-sm font-bold text-blue-600'>
                         {course.rating.toFixed(1)}
                    </p>
                   <p>
                    <FaStar className='text-yellow-400' />
                   </p>
                </div>
                <p> {course.instructor}</p>
                </div>

                <Link href={`/all-courses/${course.id}`} className="w-full">
                    <Button 
                        color="primary" 
                        variant="flat" 
                        className="w-full font-medium"
                    >
                        View Details
                    </Button>
                </Link>
            
        </Card>
    );
};

export default CourseCard;