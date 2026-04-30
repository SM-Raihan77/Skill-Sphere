"use client";

import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-content1 text-content2 border-t border-divider mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            SkillSphere
          </h2>
          <p className="mt-2 text-sm">
            Learn modern skills and grow your career with expert-led courses.
          </p>
            <Image
                    src="/skillsphere logo.png"
                      alt="logo"
                      loading="eager"
                      width={50}
                      height={50}
                      className="object-cover h-auto w-auto mt-4 mr-4"
                    />

        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium text-foreground mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link href="/courses" className="hover:text-primary transition">Courses</Link></li>
            <li><Link href="/my-profile" className="hover:text-primary transition">My Profile</Link></li>
            <li><Link href="#" className="hover:text-primary transition">Terms</Link></li>
            <li><Link href="#" className="hover:text-primary transition">Privacy</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-medium text-foreground mb-2">Contact</h3>
          <p className="text-sm">support@skillsphere.com</p>
          <p className="text-sm mb-4">+880 1234-567890</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-primary/10 transition"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full hover:bg-red-400/10 transition"
            >
              <FaLinkedin size={18} className="" />
            </a>

            <a
              href="#"
              className="p-2 rounded-full hover:bg-primary/10 transition"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-divider my-4" />

      {/* Bottom */}
      <div className="text-center py-4 text-sm text-default-500">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;