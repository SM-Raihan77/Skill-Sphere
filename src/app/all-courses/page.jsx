
"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Button } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://skill-sphere-36md.vercel.app/data.json"
            );
            const data = await res.json();
            setCourses(data);
        };

        getData();
    },

        []


    );

    //filter logic 

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSearch = () => {
        setQuery(searchText);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center mt-2">All Courses</h1>

           
            <div className="flex gap-2 mb-6 justify-end">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border p-1 w-48 rounded-md text-sm"
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <Button
                    onClick={handleSearch}
                    className="bg-purple-500 text-white hover:bg-purple-600"
                >
                    <FaSearch />
                </Button>
            </div>
            {/* Courses */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="border rounded-lg p-4 mb-4 shadow-md"
                    >
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;