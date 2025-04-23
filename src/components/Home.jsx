"use client";

import { useEffect, useRef } from "react";

function Home() {
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const words = entry.target.querySelectorAll(".word");
        if (entry.isIntersecting) {
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add("show");
            }, index * 700);
          });
        } else {
          words.forEach((word) => word.classList.remove("show"));
        }
      });
    }, { threshold: 0.5 });

    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => quoteRef.current && observer.unobserve(quoteRef.current);
  }, []);

  return (
    <div className="mx-[2%] mt-[2%]">
      <div className="flex items-center justify-between gap-12 px-2 flex-wrap lg:flex-nowrap">
        {/* Image First on Mobile */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <img
            src="/images/Home.png"
            alt="Home"
            className="max-w-full max-h-[70vh] rounded-xl object-cover"
          />
        </div>

        {/* Text Second on Mobile */}
        <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
          <h1 className="text-white text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.4rem] leading-snug">
            Driving exponential digital growth for your brand with our data & AI driven marketing strategies
          </h1>
          <div
            className="text-orange-500 font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] border-b-2 border-gray-300 inline-block mt-4"
            ref={quoteRef}
          >
            <p>
              <span className="word">Strategy →</span>
              <span className="word"> Design →</span>
              <span className="word"> Implement →</span>
              <span className="word"> Measure →</span>
              <span className="word"> Optimize</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
