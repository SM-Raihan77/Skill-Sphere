"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
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
          <ul className="flex items-center  text-sm gap-3">
            <li>
              <NavLink href={"/signup"}>SignUp</NavLink>
            </li>
            <li>
              <NavLink href={"/signin"}>SignIn</NavLink>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;