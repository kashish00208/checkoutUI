import React from "react";
import Link from "next/link";

const Footer = () => {
  const sections = [
    {
      title: "Get started",
      links: [
        { label: "Case studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "Pricing", href: "/pricing" },
        { label: "Help center", href: "/help" },
        { label: "Templates", href: "/templates" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "All features", href: "/features" },
        { label: "Checkout page builder", href: "/checkout-page-builder" },
        { label: "Sales funnels", href: "/sales-funnels" },
        { label: "One-time payments", href: "/one-time-payments" },
        { label: "Subscriptions", href: "/subscriptions" },
        { label: "Payment plans", href: "/payment-plans" },
        { label: "Pay what you want", href: "/pay-what-you-want" },
        { label: "Form builder", href: "/online-form-builder" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { label: "Digital products", href: "/sell-digital-products" },
        { label: "Event tickets", href: "/sell-event-tickets" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Affiliate program", href: "/affiliate-program" },
        {
          label: "Twitter",
          href: "https://twitter.com/CheckoutPage",
          external: true,
        },
        {
          label: "YouTube",
          href: "https://www.youtube.com/@checkout-page",
          external: true,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/checkout-page",
          external: true,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/checkoutpagecom",
          external: true,
        },
      ],
    },
    {
      title: "Tools",
      links: [
        {
          label: "Stripe fee calculator",
          href: "/tools/stripe-fee-calculator",
        },
      ],
    },
    {
      title: "Platforms",
      links: [
        { label: "Framer", href: "/platforms/framer" },
        { label: "Webflow", href: "/platforms/webflow" },
        { label: "Unbounce", href: "/platforms/unbounce" },
        { label: "Instapage", href: "/platforms/instapage" },
        { label: "WordPress", href: "/platforms/wordpress" },
        {
          label: "Super",
          href: "/help/articles/adding-checkout-page-to-super",
        },
        {
          label: "TikTok",
          href: "/platforms/customizable-checkouts-for-tiktok",
        },
      ],
    },
    {
      title: "Compare",
      links: [
        {
          label: "Lemon Squeezy alternative",
          href: "/lemonsqueezy-alternative",
        },
        { label: "ThriveCart alternative", href: "/thrivecart-alternative" },
        { label: "SamCart alternative", href: "/samcart-alternative" },
        { label: "Gumroad alternative", href: "/gumroad-alternative" },
        { label: "Cartfuel alternative", href: "/cartfuel-alternative" },
        { label: "TillyPay alternative", href: "/tillypay-alternative" },
        {
          label: "Stripe Checkout alternative",
          href: "/stripe-checkout-alternative",
        },
        { label: "Payhere alternative", href: "/payhere-alternative" },
        { label: "PayRequest alternative", href: "/payrequest-alternative" },
        { label: "Paylinks alternative", href: "/paylinks-alternative" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-100 text-gray-800 border-t border-gray-200 px-4 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10">
          {/* Company Overview */}
          <div className="lg:col-span-4">
            <a
              href="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-xl font-semibold"
            >
              <span>Checkout Page</span>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Start selling in minutes with our no-code checkout page builder.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Boost your revenue with branded pages, one-click upsells, and
              order bumps.
            </p>
          </div>

          {/* Navigation Sections */}
          {sections.map((section, index) => (
            <div className="lg:col-span-2" key={index}>
              <h4 className="text-sm font-semibold text-blue-600 mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-gray-700 hover:text-blue-600 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© 2025 Checkout Page. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
