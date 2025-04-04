"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Servicesdrop from "./Servicesdrop";
import Services from "../Services/Services";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="cont1">
          <div className="logo">
            <img src="/images/logo.png" alt="MVM logo" />
          </div>
          <div className="heading">
            <h1>
              MVM <br /> Business <br /> Services
            </h1>
          </div>
        </div>
        <nav className="cont2">
          <ul className="route">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
             <Servicesdrop/>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="md:hidden bg-black shadow-lg w-full absolute top-16 left-0 z-50">
            <nav className="flex flex-col items-center py-6 space-y-4">
              <ul className="text-white text-lg font-semibold space-y-4">
                <li className="hover:text-gray-300 transition duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-gray-300 transition duration-300">
                  <Servicesdrop/>
                </li>
                <li className="hover:text-gray-300 transition duration-300">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="hover:text-gray-300 transition duration-300">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>  
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
