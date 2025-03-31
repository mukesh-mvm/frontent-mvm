"use client"

import React,{useState} from 'react'
import { Menu, X } from "lucide-react"
import Link from 'next/link'
 const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  return (

  <div>
<div className="header">
        <div className="cont1">
          <div className="logo">
            <img src="/images/logo.png" alt="MVM logo" />
          </div>
          <div className="heading">
            <h4>
              MVM <br /> Business <br /> Services
            </h4>
          </div>
        </div>
        <nav className="cont2">
          <ul className="route">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        
      </div>
       
    {isOpen && (<>

<div className="md:hidden bg-black shadow-md">
<nav className="flex flex-col mt-[30px] mb-[30px] items-center">
<ul className="route">
  <li><Link href="/">Home</Link></li>
  <li><Link href="#services">Services</Link></li>
  <li><Link href="#">Blog</Link></li>
  <li><Link href="#contact-us">Contact Us</Link></li>
</ul>
</nav>
</div>
</>)}
      </div>
  )
}

export default Navbar
