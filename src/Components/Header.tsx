import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";

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
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="h-8 w-[100px] flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={15}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-slate-600 text-sm font-medium">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.link}
              className="flex items-center gap-1 hover:text-black transition"
            >
              {item.title}
              <AiOutlineDown size={12} />
            </a>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex gap-4 items-center text-sm">
          <button className="text-slate-700 font-semibold hover:underline">Log In</button>
          <button className="bg-[#509ee3] text-white px-4 py-1.5 rounded-md font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
