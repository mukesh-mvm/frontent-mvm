"use client";

export default function HeroSecond({ herosecond }) {
  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 py-6">
      {herosecond.map((slide, index) => (
        <div
          key={index}
          className="relative rounded-2xl shadow-xl p-6 w-full max-w-4xl text-center lg:h-[370px] overflow-hidden"
        >
          <div
            className="absolute inset-0  bg-cover bg-center bg-no-repeat  scale-100"
            style={{ backgroundImage: "url('/images/benifits_bg.jpg')" }}
          ></div>

          <div className="relative z-10 h-full flex flex-col justify-start rounded-2xl px-4  scroll-container">
            <img src={slide.image} alt="Logo" className="h-24 w-auto mx-auto sticky" />

            <div className="flex flex-col gap-2 text-left">
              {slide?.keydesc?.split("-").map((item, idx) => (
                <p
                  key={idx}
                  className="text-[15px] lg:text-[18px] text-blue-700 font-bold font-rubik"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
