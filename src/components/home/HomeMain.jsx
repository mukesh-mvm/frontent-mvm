
"use client"
import React,{useEffect} from 'react'

import Clients from '../Clients'
import Home from '../Home'
import Hire from '../Hire'
import Result from '../Result'
import Services from '../Services/Services'
import Work from '../Work'

 const HomeMain = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".animate");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              }
            });
          },
          { threshold: 0.2 }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      }, []);


  return (
    <>
    <div className="animate">
        <Home />
      </div>
      <div className="animate">
        <Result />
      </div>
      <div className="animate">
        <Services />
      </div>
      <div className="animate">
        <Work />
      </div>
      <div className="animate">
        <Clients />
      </div>
      <div className="animate">
        <Hire />
      </div>
    
    </>
  )
}

export default HomeMain
