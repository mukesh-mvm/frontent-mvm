"use client";

export default function Benifits() {
  const slides = [
    { offer: "Earn 5X Rewards on Tata Neu" },
    { offer: "Get Free Airport Lounge Access" },
    { offer: "Enjoy 1% Fuel Surcharge Waiver" },
    { offer: "Access Exclusive Tata Partner Deals" },
    { offer: "Track All Your Spending Easily" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl py-10 px-8">
        <div className="bg-gradient-to-r from-[rgba(209,213,219,0.3)] via-[rgba(156,163,175,0.3)] to-[rgba(107,114,128,0.3)] rounded-2xl shadow-xl p-6 w-full border border-gray-200 space-y-5">
          <h2 className="text-3xl text-black text-center font-bold">Key Benefits</h2>
          <ol className="space-y-2 list-decimal list-inside text-left">
            {slides.map((slide, index) => (
              <li key={index} className="text-lg font-semibold text-violet-600">
                {slide.offer}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
