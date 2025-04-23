"use client";
import Link from "next/link";

export default function Benifits({ benifits, pros }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-full max-w-6xl flex-col lg:flex-row gap-4 px-2  items-stretch">
        <div className="w-full lg:w-1/4">
          <Link href={benifits[0].site} target="_blank" className="h-full w-full">
            <img
              src={benifits[0].benifirst}
              alt="Left Banner"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </Link>
        </div>

        <div
          className="flex-grow bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl px-6 py-4 flex items-center justify-center relative"
          style={{
            backgroundImage: `url('/images/bg.jpg')`,
          }}
        >
          <div className="absolute inset-0  rounded-2xl"></div>

          <div className="space-y-5 w-full max-h-[400px]  rounded-xl p-6 relative z-10 bg-opacity-80">
            <h2 className="text-3xl text-blue-700 text-center font-bold font-rubik underline">
              Key Benefits
            </h2>
            <div className="flex justify-center">
              <ol className="space-y-2 list-decimal list-inside text-left text-blue-700 font-rubik">
                {pros.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex justify-center pt-2">
              <Link href={benifits[0].site} target="_blank">
                <button className="bg-orange-600 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-violet-700 transition">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/4">
        <Link href={benifits[0].site} target="_blank" className="h-full w-full">
        <img
              src={benifits[0].benisec}
              alt="Right Banner"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
