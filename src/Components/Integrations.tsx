import React from "react";
import Image from "next/image";

type dataType = {
  image: string;
};

const data: dataType[] = [
  { image: "/integrate/comp1.webp" },
  { image: "/integrate/comp2.webp" },
  { image: "/integrate/comp3.webp" },
  { image: "/integrate/comp4.webp" },
  { image: "/integrate/comp5.webp" },
  { image: "/integrate/comp6.webp" },
  { image: "/integrate/comp7.webp" },
];


const Integrations = () => {
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

export default Integrations;
