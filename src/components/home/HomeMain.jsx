
"use client"
import React,{useState,useEffect} from 'react'

import Clients from '../Clients'
import Home from '../Home'
import Hire from '../Hire'
import Footer from '../Footer'
import Result from '../Result'
import Services from '../Services'
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
          { threshold: 0.1 }
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
      <div className="animate">
        <Footer />
      </div>
    </>
  )
}

export default HomeMain
