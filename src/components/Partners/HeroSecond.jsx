"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSecond({ herosecond }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {herosecond.map((slide, index) => (
        <div
          key={index}
          className="flex justify-center items-center  "
        >
          <div className="bg-gradient-to-r from-[rgba(209,213,219,0.3)] via-[rgba(156,163,175,0.3)] to-[rgba(107,114,128,0.3)] rounded-2xl shadow-xl p-6 lg:w-[100%] sm:w-full h-auto lg:h-[410px] max-w-4xl text-center">
            <div className="h-full flex flex-col">

              {
                 slide?.keydesc?.split('-').map((item)=>{
                   return (
                    <>
                    <p className="text-[17px] text-white text-justify px-4">
                  {item}
              </p>

              <br/>
                    </>
                   )
                 })
              }
              
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
