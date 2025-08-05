import React from "react";
import Image from "next/image";
import { GrNotes } from "react-icons/gr";

const Custom = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#509ee3]">
              Custom pages for every product
            </h1>
            <h2 className="text-xl text-gray-600">
              Create checkout pages for anything you sell
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes /> Checkout pages
                </h3>
                <p className="text-gray-600">
                  Make selling easy with custom checkouts. Boost conversions and
                  keep more of what you earn.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800  flex gap-2">
                 <GrNotes /> Event pages
                </h3>
                <p className="text-gray-600">
                  Sell more tickets and manage registrations easily with no
                  per-ticket fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800  flex gap-2">
                 <GrNotes /> Form pages
                </h3>
                <p className="text-gray-600">
                  Easily capture leads, gather valuable data, and grow your
                  audience with custom forms.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end h-full">
            <div className="h-[100%] md:h-[400px] w-full relative">
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
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end h-full">
            <div className="h-[100%] md:h-[400px] w-full relative">
              <Image
                src="/page2.webp"
                alt="Custom pages preview"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#509ee3]">
              Convert more customers
            </h1>
            <h2 className="text-xl text-gray-600">
              Maximize conversions with flexible billing and payment options
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes /> Payment methods
                </h3>
                <p className="text-gray-600">
                  Expand your reach and improve conversion rates by accepting
                  payments from anywhere in the world.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes />Manual payments
                </h3>
                <p className="text-gray-600">
                  Go beyond standard online payments by supporting manual
                  payments like invoices, deposits, and cash on delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes />Fees and surcharges
                </h3>
                <p className="text-gray-600">
                  Transparently recover processing costs by adding fixed or
                  percentage-based fees to specific payment methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#509ee3]">
              Convert more customers
            </h1>
            <h2 className="text-xl text-gray-600">
              Maximize conversions with flexible billing and payment options
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes /> Payment methods
                </h3>
                <p className="text-gray-600">
                  Expand your reach and improve conversion rates by accepting
                  payments from anywhere in the world.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes />Manual payments
                </h3>
                <p className="text-gray-600">
                  Go beyond standard online payments by supporting manual
                  payments like invoices, deposits, and cash on delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex gap-2">
                  <GrNotes />Fees and surcharges
                </h3>
                <p className="text-gray-600">
                  Transparently recover processing costs by adding fixed or
                  percentage-based fees to specific payment methods.
                </p>
              </div>
            </div>
          </div>
           {/* Image Section */}
          <div className="flex justify-center md:justify-end h-full">
            <div className="h-[100%] md:h-[400px] w-full relative">
              <Image
                src="/page2.webp"
                alt="Custom pages preview"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Custom;
