"use client";

import Details from "@/components/contact/Details";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";
import Services from "@/components/Services/Services";
import Clients from "@/components/Clients";

function Page() {
  const span = [
    "SEO Services",
    "PPC Services",
    "SMM Services",
    "Web Development",
    "Digital Solutions",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % span.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-[#272626] py-10 px-6 md:px-24 flex flex-col md:flex-row justify-center gap-10 md:gap-4 items-center">
        {/* Text Content */}
        <div className="w-full md:w-[50%] py-6">
          <h1 className="text-3xl md:text-[37px] font-semibold text-center md:text-left">
            Digital Marketing Services In Delhi
          </h1>
          <div className="text-xl md:text-[24px] mt-2 text-center md:text-left flex justify-center md:justify-start items-center">
            Best{" "}
            <span className="text-orange-400 flex items-center mx-2">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={span[index]}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold"
                >
                  {span[index]}
                </motion.h1>
              </AnimatePresence>
            </span>{" "}
            in Noida
          </div>

          <p className="text-base md:text-[19px] mt-4 font-bold text-center md:text-left leading-7">
            Digital Marketing Services 10+ Years of Experience in Creating a
            Successful Digital Marketing Strategy. Turn your business into a
            Brand with a top Digital Marketing Agency in Delhi. We integrate the
            Latest Digital Marketing Services, Strategies & Techniques. 100%
            Result Oriented & Affordable.
          </p>

          <div className="space-y-3 mt-6">
            {[
              "Result Oriented & Affordable",
              "10+ year Industry knowledge, customized solutions",
              "We drive conversions and boost ROI effortlessly",
              "Proven results, tailored strategies",
              "Expert team, client-focused approach",
              "Transparent communication, continuous optimization",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaRegCircleCheck className="text-orange-400 text-xl md:text-2xl" />
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-2xl w-full md:w-[40%] py-6 px-4">
          <Details />
        </div>
      </div>

      <Services />

      <Clients />

      <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 py-12">
        <p className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Digital Marketing Process
        </p>

        <div className="flex flex-wrap justify-center gap-10 px-4 md:px-0">
          {[
            { src: "/images/strategy.webp", label: "Strategy" },
            { src: "/images/design.webp", label: "Design" },
            { src: "/images/implement.webp", label: "Implement" },
            { src: "/images/measure.webp", label: "Measure" },
            {
              src: "https://cdn-icons-png.freepik.com/256/17247/17247423.png?ga=GA1.1.1414107002.1745826214&semt=ais_hybrid",
              label: "Optimize",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-32 md:w-48 h-32 md:h-48 rounded-full bg-white overflow-hidden flex justify-center items-center mb-2">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-20 md:w-32 h-20 md:h-32 object-contain"
                />
              </div>
              <p className="text-lg md:text-xl font-semibold text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-200 flex flex-col md:flex-row items-center px-6 md:px-24 gap-10 md:gap-16 py-12">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/aboutus.webp"
            alt="Rocket Launch"
            className="w-[250px] md:w-[400px] object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-violet-700 font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            At MVM Business Services, we believe we have the right knowledge and
            expertise to guide you towards success in the most effective way
            possible. Whether you are an entrepreneur, a small business owner,
            or a corporate professional, our services are tailored to meet your
            unique needs. Our team is dedicated to helping you achieve your
            goals with strategic solutions and expert guidance.
            <br />
            <br />
            We welcome clients from all backgrounds — whether you are just
            starting out or are an established professional seeking to grow and
            optimize your operations. As soon as you partner with us, you will
            notice significant improvements in your business processes,
            efficiency, and outcomes.
            <br />
            <br />
            At MVM Business Services, we focus on delivering practical,
            results-driven solutions through comprehensive service modules. We
            guarantee a higher return on your investment by offering tangible,
            long-term benefits. We believe in complete transparency — a key
            element in building trust — and therefore provide customized
            solutions tailored to your specific business needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
