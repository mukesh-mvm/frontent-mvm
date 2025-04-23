"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const workData = [
  {
    image: "/images/bajaj.png",
    title: "Bajaj Finserv",
    link: "/bajajfinserv",
    description:
      "Want a personal loan that charges low interest? With Bajaj Finserv’s personal loan, India’s best lending partners can guide in an online, quick and hassle free process.",
  },
  {
    image: "/images/tata.png",
    title: "Tata Neucard",
    link: "/tataneu",
    description:
      "With Tata Neu HDFC credit card, save up to 10% across all our partner brands. And enjoy unmatched privileges powered by RuPay/Visa.  ",
  },
  {
    image: "/images/flexi.png",
    title: "Flexi Loans",
    link: "/flexiloans",
    description:
      "Get instant access to flexible personal loans with low interest, minimal documentation, and quick approvals—tailored to meet your needs, anytime and anywhere in India.",
  },
  {
    image: "/images/money.png",
    title: "Money Control",
    link: "/moneycontrol",
    description:
      "Get quick personal loans with Moneycontrol—easy online process, fast approval, minimal documents, and attractive interest rates tailored for professionals.",
  },
  {
    image: "/images/cars.png",
    title: "Cars24",
    link: "/cars24",

    description:
      "Sell your car, at the best price with ease. Instant online valuation, doorstep inspection, hassle-free RC transfer, loan & insurance support.",
  },
  {
    image: "/images/myntra.png",
    title: "Myntra",
    link: "/myntra",

    description:
      "Shop the latest fashion with Myntra—enjoy great deals, top brands, easy returns, and a seamless shopping experience all in one place.",
  },
  {
    image: "/images/indifi.png",
    title: "Indifi",
    link: "/indifi",
    description:
      "Get fast and flexible business loans with Indifi—tailored solutions, minimal paperwork, and quick approvals to help your business grow with ease.",
  },
];

export default function WorkCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
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
    <div id='partners' className="py-10 bg-[#323336] text-white text-center">
      <h2 className="text-4xl font-bold mb-6 underline">Our Partners</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {workData.map((work, index) => (
            <div key={index} className="p-4">
       <div className="bg-[#414247] rounded-lg p-6 flex flex-col h-[500px]">
  {/* Image Section */}
  <div className="bg-white">
    <img
      src={work.image}
      alt={work.title}
      className="w-full h-[170px] object-cover rounded-lg mb-4"
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col flex-grow justify-between">
  {/* Fixed height area with text truncation */}
  <div>
    <h4 className="text-2xl font-bold mb-2">{work.title}</h4>
    <p className="text-base text-left">{work.description}</p>
  </div>

  {/* Button stays aligned at bottom */}
  <div className="pt-4">
    <Link href={work.link || "/"}>
      <button className="bg-blue-400 cursor-pointer text-black py-2 px-4 rounded hover:bg-gray-300 transition">
        Explore Now
      </button>
    </Link>
  </div>
</div>

</div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
