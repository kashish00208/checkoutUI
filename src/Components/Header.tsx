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
    <div className="p-5 bg-white/50 shadow-lg text-black border-b-2 border-gray-400/10 flex justify-between items-center sticky -z-50 ">
      <div className="w-[100px] h-[100px] flex items-center justify-center">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain w-full h-full"
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
        <div className="text-slate-500">Log In</div>
        <div className="bg-[#509ee3] p-2 rounded-xl px-4">Get Started</div>
      </div>
    </div>
  );
};

export default Header;

// Design a bold, modern logo for "Checkout Page," a no-code platform that lets users create beautiful, branded checkout experiences. The logo should convey speed, ease of use, flexibility, and growth for digital sellers. Emphasize customization (matching brands and layouts), seamless payment integration (Stripe, Apple Pay, Google Pay), and a friendly, human touch. Use clean lines, a sense of motion, and a palette that suggests trust and innovation. The vibe should be empowering for small businesses and startups—professional, but approachable—with subtle hints at digital payments or e-commerce. It should stand out on a tech website, reflecting lightning-fast performance and 0% transaction fees.
