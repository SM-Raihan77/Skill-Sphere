
// import { Button } from "@heroui/react";
// import Link from "next/link";


// const Banner = () => {
//   return (
//     <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
//       {/* Overlay */}
//       <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
//         <div className="max-w-7xl mx-auto px-6 text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
//           Upgrade Your Skills Today
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
//             Enhance your knowledge and advance your career with our expert-led courses.
//           </p>

//           <div className="flex gap-4">
//             <Link href="#">
//               <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
//                 Enrol Now
//               </Button>
//             </Link>

//             <Link href="/pricing">
//               <Button variant="outline" className="text-white">
//                 Subscribe
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import { Button } from "@heroui/react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
      style={{
        backgroundImage:
          "url('https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
             Upgrade Your Skills Today
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Enhance your knowledge and advance your career with our expert-led courses.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-gradient-to-r from-[#AD6350] via-white-500 to-[#00D6B7] text-white border-none">
                Enrol Now
              </Button>
            </Link>

            <Link href="/pricing">
             <Button className="bg-purple-500 text-white hover:bg-purple-600">
                Subscribe
                <MdEmail /> 
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;