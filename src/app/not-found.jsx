import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

const NotFound = () => {
    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white px-6">
            {/* Main Container */}
            <div className="text-center">
          
                <h1 className="text-[120px] md:text-[180px] font-black leading-none text-gray-100 select-none">
                    404
                </h1>
                
          {/* massage section */}
                <div className="-mt-10 md:-mt-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto text-base md:text-lg font-light leading-relaxed mb-8">
                        The page you are looking for doesn't exist or has been moved. 
                        Let's get you back on track.
                    </p>
                </div>

                {/* action btn */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button 
                            color="primary"
                            radius="md"
                            size="lg"
                            className="px-8 font-semibold shadow-md"
                        >
                            Go to Home
                        </Button>
                    </Link>
                    
                    <Link href="/all-courses">
                        <Button 
                            variant="primary"
                            color="default"
                            radius="md"
                            size="lg"
                            className="px-8 font-semibold"
                        >
                            Browse Courses
                        </Button>
                    </Link>
                </div>
            </div>

            
            <div className="absolute bottom-10 text-gray-300 text-sm tracking-widest uppercase">
                SkillSphere &bull; Academy
            </div>
        </div>
    );
};

export default NotFound;