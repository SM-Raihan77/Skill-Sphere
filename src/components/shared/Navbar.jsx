
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

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b sticky top-0 bg-white/90 dark:bg-black/90 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto w-full px-4 py-3">
        
        {/* Top Row: Logo, Theme, and Profile */}
        <div className="flex justify-between items-center mb-3 md:mb-0">
          <div className="flex gap-2 items-center">
            <Image
              src="/skillsphere logo.png"
              alt="logo"
              width={35}
              height={35}
              className="object-contain"
            />
            <h3 className="font-black text-lg tracking-tight">SkillSphere</h3>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSwitch />
            
            {user ? (
              <div className="flex items-center gap-2">
                <Avatar 
                  size="sm" 
                  src={user?.image} 
                  name={user?.name?.charAt(0)} 
                  isBordered 
                  color="primary" 
                />
                <Button 
                  onClick={handleSignOut} 
                  size="sm" 
                  variant="flat" 
                  color="danger"
                  className="hidden sm:flex"
                >
                  SignOut
                </Button>
              </div>
            ) : (
              <Link href="/signin">
                <Button size="sm" variant="flat" color="primary">SignIn</Button>
              </Link>
            )}
          </div>
        </div>

        
        <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <ul className="flex items-center gap-6 text-sm font-medium overflow-x-auto no-scrollbar whitespace-nowrap pb-1 md:pb-0">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/all-courses">Courses</NavLink></li>
            <li><NavLink href="/profile">My Profile</NavLink></li>
            
            {user && (
               <li className="sm:hidden">
                  <button onClick={handleSignOut} className="text-red-500 font-bold">Logout</button>
               </li>
            )}
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;