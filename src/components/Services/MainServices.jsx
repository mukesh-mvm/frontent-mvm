import Link from "next/link";
function MainServices({ data }) {
  return (
    <>
      <hr />
      <div className="bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-400 mb-8">
            {data.title}
          </h1>

          {data.img && (
         <div className="rounded-xl overflow-hidden shadow-lg mb-10 flex justify-center items-center">
         <img
           src={data.img}
           alt={data.title}
           className="w-full sm:w-2/3 md:w-1/2 lg:w-[50%] h-auto object-cover"
         />
       </div>
       
          )}
          <ol className="list-decimal list-inside space-y-6">
            {data.points.map((item, index) => (
              <li key={index} className="text-2xl text-violet-300">
                {item.heading}
                <p className="text-lg leading-relaxed text-gray-300 mt pl-5">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="flex justify-center mt-10">
            <Link href="/contact">
              <button className="bg-violet-600 hover:bg-violet-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainServices;
