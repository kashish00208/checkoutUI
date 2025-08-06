import React from "react";
import Image from "next/image";
import { GrNotes } from "react-icons/gr";
import Companies from "./Companies";
import Integrations from "./Integrations";
import { FaArrowTurnDown } from "react-icons/fa6";

const Custom = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="px-4 sm:px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#509ee3]">Custom pages for every product</h1>
            <h2 className="text-lg sm:text-xl text-gray-600">Create checkout pages for anything you sell</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Checkout pages", text: "Make selling easy with custom checkouts. Boost conversions and keep more of what you earn." },
                { title: "Event pages", text: "Sell more tickets and manage registrations easily with no per-ticket fees." },
                { title: "Form pages", text: "Easily capture leads, gather valuable data, and grow your audience with custom forms." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex gap-2 items-start">
                    <GrNotes /> {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
              <Image
                src="/page1.webp"
                alt="Custom pages preview"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-4 sm:px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
              <Image
                src="/page2.webp"
                alt="Convert more customers"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#509ee3]">Convert more customers</h1>
            <h2 className="text-lg sm:text-xl text-gray-600">
              Maximize conversions with flexible billing and payment options
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Payment methods", text: "Expand your reach and improve conversion rates by accepting payments from anywhere in the world." },
                { title: "Manual payments", text: "Support invoices, deposits, and cash on delivery." },
                { title: "Fees and surcharges", text: "Add fixed or percentage-based fees to specific payment methods." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex gap-2 items-start">
                    <GrNotes /> {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Header */}
      <p className="text-xl sm:text-2xl text-center font-bold text-black/70 flex gap-2 justify-center items-center px-4">
        Supported payment methods include credit/debit cards, more <FaArrowTurnDown />
      </p>

      {/* Companies section */}
      <Companies />

      {/* Section 3: Upsells */}
      <section className="px-4 sm:px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#509ee3]">Earn more from sales</h1>
            <h2 className="text-lg sm:text-xl text-gray-600">Increase average order value with seamless upsells</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Order bumps",
                  text: "Present one-time or recurring offers directly on your checkout pages."
                },
                {
                  title: "One-click upsells",
                  text: "Generate more revenue with effortless upsell offers shown after purchase."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex gap-2 items-start">
                    <GrNotes /> {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
              <Image
                src="/page3.webp"
                alt="Earn more"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Integrations */}
      <section className="px-4 sm:px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
              <Image
                src="/page2.webp"
                alt="Integrate tools"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#509ee3]">Simplify your checkout flow</h1>
            <h2 className="text-lg sm:text-xl text-gray-600">
              Checkout Page integrates with your tools and processes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Conversion tracking",
                  text: "Track PPC performance and understand which campaigns are driving sales."
                },
                {
                  title: "UTM tracking",
                  text: "Capture UTM values to understand traffic sources and campaigns."
                },
                {
                  title: "Connect your marketing stack",
                  text: "Pass data to/from your checkout to power automation tools."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex gap-2 items-start">
                    <GrNotes /> {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Label + Component */}
      <p className="text-xl sm:text-2xl text-center font-bold text-black/70 flex gap-2 justify-center items-center px-4">
        Checkout page integrates <FaArrowTurnDown />
      </p>
      <Integrations />
    </>
  );
};

export default Custom;
