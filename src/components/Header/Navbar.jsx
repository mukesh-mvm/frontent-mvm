"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <p className="text-[1.2rem] font-bold leading-tight">
              MVM <br /> Business <br /> Services
            </p>
          </Link>
        </div>

        <nav className="w-2/5 justify-end hidden md:flex">
          <ul className="flex gap-5 text-[1.2rem] pr-[10%]">
            <li><Link href="/" className="hover:text-orange-400">HOME</Link></li>
            <li><Link href="/services" className="hover:text-orange-400">SERVICES</Link></li>
            <li><Link href="/#partners" className="hover:text-orange-400">PARTNERS</Link></li>
            <li><Link href="/blog" className="hover:text-orange-400">BLOG</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">CONTACT</Link></li>
          </ul>
        </nav>

        <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black shadow-lg w-full absolute left-0 z-50">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <ul className="text-white text-lg font-semibold space-y-4">
              <li><Link href="/" onClick={handleLinkClick} className="hover:text-orange-400">Home</Link></li>
                            <li><Link href="/services" onClick={handleLinkClick} className="hover:text-orange-400">Services</Link></li>

              <li><Link href="/#partners" onClick={handleLinkClick} className="hover:text-orange-400">Partners</Link></li>
              <li><Link href="/blog" onClick={handleLinkClick} className="hover:text-orange-400">Blog</Link></li>
              <li><Link href="/contact" onClick={handleLinkClick} className="hover:text-orange-400">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      )}
      <hr />
    </>
  );
};

export default Navbar;
