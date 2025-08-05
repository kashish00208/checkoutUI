import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="text-black p-16 pt-48">
      {/* Description section */}
      <div className="">
        <div className="">
          <div className="text-center text-5xl text-black/80 font-semibold pb-6">
            Customizable checkout pages that convert
          </div>
          <div className="text-center text-xl p-1 gap-1 text-slate-500 font-bold">
            <p>
              Create high-converting, branded checkout pages{" "}
              <span className="text-[#509ee3]">— no code needed.</span>
            </p>
            <p>Customize everything to match your business, live in minutes.</p>
            <p>
              Built on Stripe. Trusted by thousands. Flat pricing, real support.
            </p>
            <p>Say goodbye to slow, clunky tools and hidden fees.</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-10">
          <a
            href="/Login"
            className=" bg-[#509ee3]  p-4 text-xl rounded-2xl text-white flex justify-between items-center gap-3"
          >
            Start your 7 Days free trial <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Video section here */}
      <div className="w-3/4 h-2/4 flex justify-center items-center mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full rounded-lg shadow-md"
        >
          <source src="/checkout-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Why US section */}

      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-black/80 ">
          WHY US?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#509ee3] mb-4">
              Tired of clunky checkout tools?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              There are lots of ways to take payments online, and chances are,
              you've tried a few. But most are hard to set up, slow to load, and
              not made for you. They hurt your sales, force branding you don’t
              want, and charge high per-transaction fees.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#509ee3] mb-4">
              There's a better way
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              That’s why we built Checkout Page: a no-code way to build branded
              checkouts. Lightning-fast, fully customizable, and integrated with
              your tools — all without writing code. We charge a flat,
              transparent fee. No per-transaction costs.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#509ee3] mb-4">
              Trusted by business owners like you
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We power thousands of checkouts daily for founders, teams, and
              businesses worldwide. Built and verified by Stripe. Plus, we’re
              real humans, ready to help when you need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
