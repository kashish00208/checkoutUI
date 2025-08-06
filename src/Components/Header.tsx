"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Link from "next/link";

type item = {
  title: string;
  link: string;
};

const navItems: item[] = [
  { title: "Home", link: "/" },
  { title: "Features", link: "/Features" },
  { title: "Use cases", link: "/Use-Case" },
  { title: "Case studies", link: "/Case-studies" },
  { title: "Blog", link: "/Blog" },
  { title: "Pricing", link: "/Pricing" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center h-14 sm:h-16 md:h-20">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={180}
            className="w-auto h-full object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-slate-600 text-sm font-medium">
          {navItems.map((item, key) => (
            <Link
              key={key}
              href={item.link}
              className="flex items-center gap-1 hover:text-black transition"
            >
              {item.title}
              <AiOutlineDown size={12} />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-slate-700"
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        <div className="hidden md:flex gap-4 items-center text-sm">
          <button className="text-slate-700 font-semibold hover:underline">
            Log In
          </button>
          <button className="bg-[#509ee3] text-white px-4 py-1.5 rounded-md font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4 text-slate-600 text-sm font-medium">
            {navItems.map((item, key) => (
              <Link
                key={key}
                href={item.link}
                className="flex items-center gap-1 hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
                <AiOutlineDown size={12} />
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-2">
              <button className="text-slate-700 font-semibold text-left hover:underline">
                Log In
              </button>
              <button className="bg-[#509ee3] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
