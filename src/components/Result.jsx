'use client'

import { useEffect, useRef } from "react";


function Result() {
  const quoteRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll(".word");
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("show");
              }, index * 700); 
            });
          } else {
            entry.target.querySelectorAll(".word").forEach((word) => {
              word.classList.remove("show");
            });
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (quoteRef.current) observer.observe(quoteRef.current);

    return () => {
      if (quoteRef.current) observer.unobserve(quoteRef.current);
    };
  }, []);


  return (
    <>
      <div className="cont3">
        <div className="result-image">
          <img src="/images/result.png" alt="Results" />
        </div>

        <div className="hero-text">
          <h2 className="hero-head">
          At MVM we love making beautiful brand stories with our engaging content strategy, intelligent campaign implementation & optimization
          </h2>

          <div className="quotefirst" ref={quoteRef}>
            <p>
              <span className="word">Concept→</span>
              <span className="word">Story→</span>
              <span className="word">Audience→</span>
              <span className="word">Engage→</span>
              <span className="word">Recall</span>
            </p>
          </div>
        </div>
      </div>

      <div className="marquee-container1">
        <div className="marquee-content">
          <ul>
            <li>Marketing Strategies</li>
            <li>SEO Optimization</li>
            <li>Brand Growth</li>
            <li>Customer Engagement</li>
            <li>Content Creation</li>
          </ul>
        </div>
      </div>

      <div className="marquee-container2">
        <div className="marquee-content">
          <ul>
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