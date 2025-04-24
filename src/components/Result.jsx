"use client";

import { useEffect, useRef } from "react";

function Result() {
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
    <>
      <div className="flex flex-col md:flex-row justify-center items-center bg-[#141313]  px-6 py-10 gap-8">
        {/* Image First on Mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <img
            src="/images/result.png"
            alt="Results"
            className="w-full h-[35vh] md:h-[50vh] rounded-xl object-cover"
          />
        </div>

        {/* Text Second on Mobile */}
        <div className="w-full md:w-1/2 text-left order-2 md:order-2">
          <h2 className="text-white text-[1.6rem] sm:text-[1.8rem] md:text-[2.4rem] leading-snug hyphens-auto">
            At MVM we love making beautiful brand stories with our engaging content strategy, intelligent campaign implementation & optimization
          </h2>
          <div className="w-full mt-4" ref={quoteRef}>
  <p className="inline-block border-b-2 border-gray-300 text-orange-500 font-bold  lg:text-[1.5rem] sm:text-[1.3rem] md:text-[1.4rem]">
    <span className="word">Concept→</span>
    <span className="word">Story→</span>
    <span className="word">Audience→</span>
    <span className="block sm:inline"></span>
    <span className="word">Engage→</span>
    <span className="word">Recall</span>
  </p>
</div>

        </div>
      </div>

      {/* Marquees */}
      <div className="w-full overflow-hidden whitespace-nowrap py-4 bg-gradient-to-r from-yellow-800 via-yellow-300 to-yellow-100">
        <div className="animate-marquee-left inline-block">
          <ul className="flex gap-12 font-bold text-black text-2xl">
            <li>Marketing Strategies</li>
            <li>SEO Optimization</li>
            <li>Brand Growth</li>
            <li>Customer Engagement</li>
            <li>Content Creation</li>
          </ul>
        </div>
      </div>

      <div className="w-full overflow-hidden whitespace-nowrap py-4 bg-gradient-to-r from-[#16213e] to-[#1a1a2e]">
        <div className="animate-marquee-right inline-block">
          <ul className="flex gap-12 font-bold text-white text-2xl">
            <li>Social Media Campaigns</li>
            <li>Business Expansion</li>
            <li>Data Analysis</li>
            <li>Web Development</li>
            <li>Client Retention</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Result;
