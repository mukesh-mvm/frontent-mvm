"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Servicesdrop from "./Servicesdrop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap  py-2">
        <div className="flex items-center w-2/5 gap-4 ml-[4%]">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
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
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/#partners">PARTNERS</Link></li>
            <li><Servicesdrop /></li>
            <li><Link href="/blog">BLOG</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
      </div>

      {isOpen && (
        <div className="md:hidden bg-black shadow-lg w-full absolute top-16 left-0 z-50">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <ul className="text-white text-lg font-semibold space-y-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#partners">Partners</Link></li>
              <li><Servicesdrop /></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      )}
      <hr />
    </>
  );
};

export default Navbar;
