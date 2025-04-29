import Link from "next/link";

function MainServices({ data }) {
  return (
    <>
      <div className="bg-black text-white py-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center underline  text-violet-400 mb-8 px-2">
          {data.title}
        </h1>

        <div className="max-w-[1370px] mx-auto flex flex-col lg:flex-row items-start gap-6">
          {data.img && (
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          <div className="w-full lg:w-1/2">
            <div className=" p-5 sm:p-6 ">
              <ol className="list-decimal list-inside space-y-6">
                {data.points.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl sm:text-2xl text-violet-300"
                  >
                    {item.heading}
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-2 pl-4 sm:pl-5">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="flex justify-center py-4">
                <Link href="/contact">
                  <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainServices;
