"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

function Services() {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  const servicesData = [
    {
      title: "Brand Marketing",
      description:
        "We run brand campaigns across all categories. Our AI enabled media buying strategy enables brands to achieve maximum reach and engagement out of their awareness marketing campaigns.",
      href: "/services/brand-marketing",
    },
    {
      title: "Performance Marketing",
      description:
        "We create smart performance marketing campaigns that give maximum ROAS to you. We optimize campaign by our smart tracking and data analytics to give your best performance.",
      href: "/services/performance-marketing",
    },
    {
      title: "Affiliate Marketing",
      description:
        "We deliver affiliate marketing campaigns across all categories i.e. BFSI, Real Estate, Automobile, Education, E commerce, fashion & lifestyle etc. We do high performance-oriented affiliate campaigns with scale.",
      href: "/services/affiliate-marketing",
    },
    {
      title: "Social Media Marketing",
      description:
        "We build interesting social media campaigns with very high engagement and high shareability. We ensure to build that social connect with audience through our social campaigns.",
      href: "/services/social-media",
    },
    {
      title: "Mobile Advertising",
      description:
        "We tap customers across all platforms, the journey from desktop to mobile & from search to social is monitored and campaigns with high performance are created for mobile performance delivery.",
      href: "/services/mobile-advertising",
    },
    {
      title: "SEO",
      description:
        "To tap into customers with highest intent, it’s important to tap customers doing relative searches. Our strong SEO & content team work tirelessly to ensure you get the highest share of that organic traffic.",
      href: "/services/seo",
    },
    {
      title: "Content Writing",
      description:
        "Content is an important pillar of digital marketing, we create highly engaging, innovative content for websites, marketing collaterals, PR activities etc.",
      href: "/services/content-writing",
    },
    {
      title: "Web Development",
      description:
        "We go beyond marketing to support our customers, our experience in building smart desktop and mobile applications ensures that high quality performance oriented & optimized products are created for our partners.",
      href: "/services/web-development",
    },
  ];

  const handleScroll = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight && cardTop > 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-200 max-w-full mx-auto text-black py-8 px-2 text-center" id="services">
      <h1 className="text-4xl font-bold underline mb-10">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="card flex flex-col justify-between bg-blue-100 p-6 rounded-xl text-center shadow-md border-2 border-transparent hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-b hover:from-gray-100 hover:to-gray-200 hover:border-black/20 transition-all duration-300 min-h-[320px]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h4 className="text-2xl font-bold underline mb-3">{service.title}</h4>
              <p className="text-base text-gray-700 leading-relaxed">{service.description}</p>
            </div>

            <Link href={service.href}>
              <button className="mt-2 cursor-pointer border-2 border-blue-600 text-blue-700 font-semibold px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-300">
                Read More
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
