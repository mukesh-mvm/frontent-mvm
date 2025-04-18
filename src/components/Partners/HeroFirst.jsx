"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroFirst({ herofirst }) {
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
      {herofirst.map((slide, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-full py-2 px-4 lg:py-12 lg:px-2"
        >
          <div className="bg-gradient-to-r from-[rgba(209,213,219,0.3)] via-[rgba(156,163,175,0.3)] to-[rgba(107,114,128,0.3)] rounded-2xl shadow-xl py-2 lg:w-[100%] sm:w-full max-w-4xl  text-center space-y-5">
            <h2 className="text-2xl font-bold text-white">
              {slide.title}
            </h2>
            <div className="flex justify-center">
              <img
                src={slide.logo}
                alt={slide.title}
                className="w-full h-auto lg:h-[50vh] lg:object-contain rounded-md"
              />
            </div>
            <p className="text-lg font-semibold text-orange-400">
              {slide.offer}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
