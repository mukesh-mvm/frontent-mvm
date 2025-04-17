"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const workData = [
  {
    image:
      "/images/bajaj.png",
    title: "Bajaj Finserv",
    link: "/bajajfinserv",
    description:
      "Want a personal loan that charges low interest? With Bajaj Finserv’s personal loan, India’s best lending partners can guide in an online, quick and hassle free process.",
  },
  {
    image:
      "/images/tata.png",
    title: "Neucard",
   link:"/tataneu",
    description:
      "With Tata Neu HDFC credit card, save up to 10% across all our partner brands. And enjoy unmatched privileges powered by RuPay/Visa. So, stop waiting, apply now!   ",
  },
  {
    image:
      "/images/flexi.png",
    title: "Flexi Loans",
    link:"/flexiloans",
    description:
      "Our innovative solutions have boosted engagement for several brands, enhancing visibility and conversion rates.",
  },
  {
    image:
      "/images/money.png",
    title: "Money Control",
    link:"/moneycontrol",
    description:
      "From startups to enterprises, we tailor strategies that drive success, ensuring sustainable business growth.",
  },
  {
    image:
      "/images/cars.png",
    title: "Cars24",
    link:"/cars24",

    description:
      "Sell your car, at the best price with ease. Instant online valuation, doorstep inspection, hassle-free RC transfer, loan & insurance support.",
  },
  {
    image:
      "/images/myntra.png",
    title: "Myntra",
    link:"/myntra",

    description:
      "From startups to enterprises, we tailor strategies that drive success, ensuring sustainable business growth.",
  },
  {
    image:
      "/images/indifi.png",
    title: "Indifi",
    link:"/indifi",
    description:
      "From startups to enterprises, we tailor strategies that drive success, ensuring sustainable business growth.",
  },
];

export default function WorkCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[#323336] text-white text-center">
      <h2 className="text-4xl font-bold mb-6 underline">Our Partner's</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {workData.map((work, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#414247] rounded-lg p-6 flex flex-col h-[500px]">
               <div className="bg-white ">
               <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[170px] object-cover rounded-lg mb-4"
                />
               </div>
                <div className="flex flex-col flex-grow py-4 justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{work.title}</h4>
                    <p className="text-base ">
                      {work.description}
                    </p>
                  </div>
                  <Link href={work.link || "/"}>
  <button className="bg-blue-400 text-black  cursor-pointer py-2 px-4 rounded hover:bg-gray-300 transition">
    Explore Now
  </button>
</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
