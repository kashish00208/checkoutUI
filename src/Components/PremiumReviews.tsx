import Image from "next/image";
import React from "react";

const testimonials = [
  {
    quote:
      "Checkout Page has been a game changer in our ability to rapidly test and iterate on conversion funnels, sales landing page designs and pricing for our subscription offerings. Support has been incredible and the business impact undeniable!",
    name: "Ben Friedmann",
    company: "The New York Sun",
    companyUrl: "https://nysun.com",
    imageSrc: "/review/p1.webp",
  },
  {
    quote:
      "Checkout Page was the fastest, simplest, and most feature complete checkout experience I could find for my product launch. It took me 15 minutes to setup and brought in $15k in sales in the first 24 hours. I'd call that a success.",
    name: "Gil Hildebrand",
    company: "Subscribr.ai",
    companyUrl: "https://subscribr.ai",
    imageSrc: "/review/p2.webp",
  },
  {
    quote:
      "Checkout Page was incredibly fast and easy to set up; we literally opened the account and started selling our products in less than 30 minutes. We greatly appreciated the option to translate the labels into our language. We are genuinely satisfied!",
    name: "Francesco Fantucchio",
    company: "Aplussrl.it",
    companyUrl: "https://aplus.it",
    imageSrc: "/review/p3.webp",
  },
  {
    quote:
      "Thanks again for all your help this past week with embedding my checkouts on Framer. We went ahead and upgraded to the Funnel Builder plan! Looking forward to utilizing more features and seeing you guys implement new features along the road!",
    name: "Ninja",
    company: "Implantninja.com",
    companyUrl: "https://implantninja.com",
    imageSrc: "/review/p4.webp",
  },
  {
    quote:
      "It has taken me the last 6 days trying 11 other programs to set up pages for my products for links to my website, but I must say, I am so glad I found your product!! It has been so easy to use and it looks great too! Thanks for all your help in getting it set up. I am setting up my subscription now.",
    name: "Mark",
    company: "Healthbuddy.fit",
    companyUrl: "https://healthbuddy.fit",
    imageSrc: "/review/p5.webp",
  },
  {
    quote:
      "Thanks, the service is well made. Exactly what Stripe should do to save time. I love your product, so many options and possibilities. Amazing UX and no bugs that is often rare in web apps.",
    name: "Patrice",
    company: "Xproline.io",
    companyUrl: "https://xproline.io",
    imageSrc: "/review/p6.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
       <div className="p-8">
         <h2 className="text-3xl sm:text-4xl font-bold text-[#509ee3] text-center">See what our customers says  </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center">Boost conversions, grow revenue, and keep more from every sale</p>
       </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
            >
              <blockquote className="text-sm text-gray-700 line-clamp-5">
                <div className="flex justify-center text-orange-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p>`&quot;`{testimonial.quote}`&quot;`</p>
              </blockquote>
              <figcaption className="mt-6 text-center">
                <Image
                  alt={`Photo of ${testimonial.name}`}
                  width={40}
                  height={40}
                  className="mx-auto rounded-full"
                  src={testimonial.imageSrc}
                />
                <div className="mt-2 text-sm text-gray-800 font-medium">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-600">
                  <a
                    href={testimonial.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {testimonial.company}
                  </a>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
