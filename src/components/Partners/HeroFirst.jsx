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
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {herofirst.map((slide, index) => (
        <div
          key={index}
          className="flex justify-center items-center py-10 px-2"
        >
          <div className="bg-gradient-to-r from-[rgba(209,213,219,0.3)] via-[rgba(156,163,175,0.3)] to-[rgba(107,114,128,0.3)] rounded-2xl shadow-xl p-6 w-full max-w-4xl  text-center space-y-5">
            <h2 className="text-3xl font-bold text-violet-700">
              {slide.title}
            </h2>
            <p className="text-xl text-black">{slide.description}</p>
            <div className="flex justify-center">
              <img
                src={slide.logo}
                alt={slide.title}
                className="w-70 object-contain rounded-md"
              />
            </div>
            <p className="text-lg font-semibold text-violet-600">
              {slide.offer}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
