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
    <div className="p-5 w-screen bg-white shadow-lg text-black border-b-2 border-gray-400/10 flex justify-between items-center fixed z-50 ">
      <div className="h-10 w-[120px] bg-white flex items-center justify-center overflow-hidden">
        <Image
          src="/logo.png"
          alt="logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="flex justify-between gap-10 items-center text-slate-500 text-base font-bold">
        {navItems.map((id, key) => (
          <a
            key={key}
            className="flex items-center justify-center gap-2"
            href={id.link}
          >
            {id.title}
            <AiOutlineDown />
          </a>
        ))}
      </div>
      <div className="flex gap-5 text-lg justify-center items-center">
        <div className="text-slate-600 font-extrabold">Log In</div>
        <div className="bg-[#509ee3] p-2 rounded-xl px-4 text-white mr-3">Get Started</div>
      </div>
    </div>
  );
};

export default Header;

