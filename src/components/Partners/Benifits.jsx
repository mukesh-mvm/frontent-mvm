"use client";
import Link from "next/link";

export default function Benifits({ benifits , pros }) {

  


  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl  ">
        <div className=" rounded-2xl shadow-2xl p-6 w-full   space-y-5">
          <h2 className="text-3xl text-white text-center font-bold">Key Benefits</h2>
          <ol className="space-y-2 list-decimal list-inside text-left">
            {pros.map((point, index) => (
              <li key={index} className="text-md ">
                {point}
              </li>
            ))}
          </ol>

          <div className="flex justify-center pt-4">
            
             <Link href={benifits[0].site} target="_blank">
             <button className="bg-violet-600 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-violet-700 transition">
                Know More
              </button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
