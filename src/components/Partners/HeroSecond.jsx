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
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {herosecond.map((slide, index) => (
        <div
          key={index}
          className="flex justify-center items-center py-10 px-4"
        >
          <div className="bg-gradient-to-r from-[rgba(209,213,219,0.3)] via-[rgba(156,163,175,0.3)] to-[rgba(107,114,128,0.3)] rounded-2xl flex justify-center items-center h-auto md:h-[360px] shadow-xl p-6 w-full max-w-4xl  text-center space-y-5">
            <p className="text-[17px] text-black text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quisquam, itaque blanditiis ullam nemo dolores
              reprehenderit. Fuga at porro ea non voluptatem perspiciatis
              maiores consectetur cupiditate, corporis similique, esse fugiat
              accusantium! Deserunt similique ut, numquam dolor blanditiis,
              corrupti, ea esse magni in repudiandae consequuntur quos corporis
              nulla? Distinctio sequi ipsum nisi quibusdam, modi amet quaerat
              sapiente illum non repellendus vitae.
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
