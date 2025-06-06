"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const services = [
    "Brand Marketing",
    "Performance Marketing",
    "Affiliate Marketing",
    "Social Media Marketing",
    "Mobile Advertising",
    "SEO",
    "Content Writing",
    "Web Development",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap bg-[#141313]">
        <div className="flex items-center w-2/5 gap-4 ml-[4%]">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.webp"
              alt="MVM logo"
              className="w-24 h-24 object-contain"
            />
            <p className="text-[1.2rem] font-bold leading-tight text-white">
              MVM <br /> Business <br /> Services
            </p>
          </Link>
        </div>

        <nav className="w-2/5 justify-end hidden md:flex">
          <ul className="flex gap-5 text-[1.2rem] pr-[10%] text-white">
            <li>
              <Link href="/" className="hover:text-orange-400">
                HOME
              </Link>
            </li>
            <li>
              <div
                className="relative group"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <div
                  className="text-white font-medium  hover:text-orange-400 cursor-pointer"
                  onClick={() => (window.location.href = "/services")}
                >
                  SERVICES
                </div>

                <div
                  className={`absolute top-full left-0 mt-2 bg-violet-200 border border-gray-300 rounded-md shadow-lg z-50 w-64 transition-all duration-200 ${
                    showServices
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95"
                  }`}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-5 py-3 text-sm font-medium text-gray-800 hover:bg-blue-600 hover:text-white transition duration-150 ease-in-out"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/blog" className="hover:text-orange-400">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/#partners" className="hover:text-orange-400">
                PARTNERS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black shadow-lg w-full absolute left-0 z-50">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <ul className="text-white text-lg font-semibold space-y-4 w-full px-6">
              <li>
                <Link href="/" onClick={handleLinkClick} className="hover:text-orange-400 block">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Link
                      href="/services"
                      onClick={handleLinkClick}
                      className="hover:text-orange-400"
                    >
                      Services
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowServices((prev) => !prev);
                      }}
                      aria-label="Toggle services dropdown"
                    >
                      <span
                        className={`transform transition-transform duration-300 ${
                          showServices ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  </div>

                  {showServices && (
                    <ul className="pl-4 pt-2 space-y-2 text-sm text-white">
                      {services.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={handleLinkClick}
                            className="block hover:text-orange-400"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link href="/#partners" onClick={handleLinkClick} className="hover:text-orange-400 block">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={handleLinkClick} className="hover:text-orange-400 block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick} className="hover:text-orange-400 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <hr />
    </>
  );
};

export default Navbar;
