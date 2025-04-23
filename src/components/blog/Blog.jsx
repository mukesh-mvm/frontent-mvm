import Link from 'next/link';
import React from 'react';

function Blog() {
  const blogData = [
    {
      image: "/images/work1.png",
      title: "New Blog Post",
    },
    {
      image: "/images/work2.png",
      title: "E-commerce",
    },
    {
      image: "/images/blog.jpg",
      title: "Sugar is bitter",
    }
  ];

  return (
    <div className="bg-black min-h-screen py-8 flex justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-[#414247] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105  flex flex-col items-center"
            >
              <div className="h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4 text-center w-full">
                <h2 className="text-xl font-semibold mb-3 text-white">{blog.title}</h2>
               <Link href={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}> <button
                  className="bg-[#f5c518] text-black px-6 py-2 rounded-full hover:bg-[#d4a515] transition-colors cursor-pointer"
                >
                  View More
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
