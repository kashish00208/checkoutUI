import React from "react";
import Image from "next/image";

type dataType = {
  image: string;
};

const data: dataType[] = [
  { image: "/spon/comp1.webp" },
  { image: "/spon/comp2.webp" },
  { image: "/spon/comp3.webp" },
  { image: "/spon/comp4.webp" },
  { image: "/spon/comp5.webp" },
  { image: "/spon/comp6.webp" },
  { image: "/spon/comp7.webp" },
];

const Companies = () => {
  return (
    <div className="w-full py-8 flex justify-center bg-white">
      {/* Centered scroll container */}
      <div className="w-full max-w-screen-xl overflow-hidden">
        <div className="flex w-max animate-scroll space-x-6 px-4">
          {[...data, ...data].map((item, index) => (
            <div
              key={index}
              className="min-w-[100px] h-[60px] relative flex-shrink-0 rounded-md bg-white p-2 transition-transform hover:scale-105 duration-300 ease-in-out shadow-sm border"
            >
              <Image
                src={item.image}
                alt={`Company ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
