// "use client";

// import { Books } from "@gravity-ui/icons";
// import { Card } from "@heroui/react";
// import Image from "next/image";
// import { FaBook } from "react-icons/fa";

// const LearningTips = () => {
//     return (
//         <div className="max-w-7xl mx-auto px-6 py-12">
//             {/* Header Section */}
//             <div className="flex justify-center mb-10">
//                 <h2 className="text-3xl font-bold flex items-center gap-3">

//                     <FaBook className="text-purple-500" />
//                     <span>Learning Tips</span>
//                 </h2>
//             </div>


//             <div className="grid md:grid-cols-2 gap-6">

//                 {/* Study Techniques */}
//                 <Card className="overflow-hidden border border-divider">
//                     <div className="h-40 w-full relative">
//                         <Image
//                             src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
//                             alt="study"
//                             fill

//                             className="object-cover rounded-xl h-auto w-auto"
//                         />
//                     </div>

//                     <div className="p-6">
//                         <h3 className="text-xl font-semibold mb-4 text-primary">
//                             Study Techniques
//                         </h3>

//                         <ul className="space-y-2 text-sm text-default-600">
//                             <li>✔ Pomodoro Technique</li>
//                             <li>✔ Active Recall</li>
//                             <li>✔ Practice with projects</li>
//                             <li>✔ Regular revision</li>
//                         </ul>
//                     </div>
//                 </Card>

//                 {/* Time Management */}
//                 <Card className="overflow-hidden border border-divider">
//                     <div className="h-40 w-full relative">
//                         <Image
//                             src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
//                             alt="time"
//                             fill

//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             className="object-cover rounded-xl"
//                         />
//                     </div>

//                     <div className="p-6">
//                         <h3 className="text-xl font-semibold mb-4 text-secondary">
//                             Time Management
//                         </h3>

//                         <ul className="space-y-2 text-sm text-default-600">
//                             <li>✔ Plan your day</li>
//                             <li>✔ Set clear goals</li>
//                             <li>✔ Avoid distractions</li>
//                             <li>✔ Track your time</li>
//                         </ul>
//                     </div>
//                 </Card>

//             </div>
//         </div>
//     );
// };

// export default LearningTips;






"use client";

import { Books } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import Image from "next/image";
import { FaBook } from "react-icons/fa";
import { motion } from "motion/react";

const LearningTips = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">

            {/* Header Section */}
            <div className="flex justify-center mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold flex items-center gap-3"
                >
                    <FaBook className="text-purple-500" />
                    <span>Learning Tips</span>
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Study Techniques */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="overflow-hidden border border-divider transition hover:-translate-y-2 hover:shadow-xl">

                        {/* Image */}
                        <div className="h-40 w-full relative overflow-hidden">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full h-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                                    alt="study"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Study Techniques
                            </h3>

                            <ul className="space-y-2 text-sm text-default-600">
                                <li>✔ Pomodoro Technique</li>
                                <li>✔ Active Recall</li>
                                <li>✔ Practice with projects</li>
                                <li>✔ Regular revision</li>
                            </ul>
                        </div>
                    </Card>
                </motion.div>

                {/* Time Management */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="overflow-hidden border border-divider transition hover:-translate-y-2 hover:shadow-xl">

                        {/* Image */}
                        <div className="h-40 w-full relative overflow-hidden">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full h-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
                                    alt="time"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4 text-secondary">
                                Time Management
                            </h3>

                            <ul className="space-y-2 text-sm text-default-600">
                                <li> Plan your day</li>
                                <li>✔ Set clear goals</li>
                                <li>✔ Avoid distractions</li>
                                <li>✔ Track your time</li>
                            </ul>
                        </div>
                    </Card>
                </motion.div>

            </div>
        </div>
    );
};

export default LearningTips;