
"use client"
import { useEffect, useRef } from "react";
function Home() {
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
    <div className="home">
      
      <div className="hero-container">
        <div className="hero-text">
          <h2 className="hero-head">
          Driving exponential digital growth for your brand with our data & AI driven marketing strategies 
          </h2>
          <div className="quotefirst" ref={quoteRef}>
            <p>
              <span className="word">Strategy →</span>
              <span className="word"> Design →</span>
              <span className="word"> Implement →</span>
              <span className="word"> Measure →</span>
              <span className="word"> Optimize</span>
            </p>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/Home.png" alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
