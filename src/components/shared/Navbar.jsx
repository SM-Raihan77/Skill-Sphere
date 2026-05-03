"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import ThemeSwitch from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user)

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center justify-center">
          <Image
          src="/skillsphere logo.png"
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-courses"}>Courses</NavLink>
          </li>
          
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
         {!user &&(

         <ul className="flex items-center  text-sm gap-4">
            {/* <li>
              <NavLink href={"/signup"}>SignUp</NavLink>
            </li> */}
            <li>
              <NavLink href={"/signin"}>SignIn</NavLink>
            </li>
            
          </ul>)
         }



        {
          user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )
        }
       <div>
         
              <ThemeSwitch />
            
       </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;




// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import NavLink from "./Navlink";
// import ThemeSwitch from "./ThemeSwitch";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";

// const Navbar = () => {
//   const { data } = authClient.useSession();
//   const user = data?.user;

//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <header className="border-b sticky top-0 bg-white z-50">
//       <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/skillsphere logo.png"
//             alt="SkillSphere Logo"
//             width={40}
//             height={40}
//             priority
//           />
//           <h3 className="font-bold text-lg">SkillSphere</h3>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6 text-sm">
//           <li><NavLink href="/">Home</NavLink></li>
//           <li><NavLink href="/all-courses">Courses</NavLink></li>
//           <li><NavLink href="/profile">My Profile</NavLink></li>
//         </ul>

//         {/* Right Section */}
//         <div className="hidden md:flex items-center gap-4">
//           {!user ? (
//             <>
//               <NavLink href="/signup">SignUp</NavLink>
//               <NavLink href="/signin">SignIn</NavLink>
//             </>
//           ) : (
//             <div className="flex items-center gap-3">
//               <Avatar size="sm">
//                 <Avatar.Image
//                   src={user?.image}
//                   alt={user?.name}
//                   referrerPolicy="no-referrer"
//                 />
//                 <Avatar.Fallback>
//                   {user?.name?.charAt(0)}
//                 </Avatar.Fallback>
//               </Avatar>

//               <Button size="sm" color="danger" onClick={handleSignOut}>
//                 SignOut
//               </Button>
//             </div>
//           )}

//           <ThemeSwitch />
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-2xl"
//           aria-label="Toggle Menu"
//         >
//           ☰
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           menuOpen ? "max-h-[400px]" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col items-center gap-4 py-4 bg-white shadow-md">
          
//           {/* Links */}
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/all-courses">Courses</NavLink>
//           <NavLink href="/profile">My Profile</NavLink>

//           {/* Auth */}
//           {!user ? (
//             <>
//               <NavLink href="/signup">SignUp</NavLink>
//               <NavLink href="/signin">SignIn</NavLink>
//             </>
//           ) : (
//             <>
//               <Avatar size="sm">
//                 <Avatar.Image
//                   src={user?.image}
//                   alt={user?.name}
//                 />
//                 <Avatar.Fallback>
//                   {user?.name?.charAt(0)}
//                 </Avatar.Fallback>
//               </Avatar>

//               <Button size="sm" color="danger" onClick={handleSignOut}>
//                 SignOut
//               </Button>
//             </>
//           )}

//           <ThemeSwitch />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;