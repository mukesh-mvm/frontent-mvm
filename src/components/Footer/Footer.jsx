"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const footerNavs = [
    {
      label: "Quick Links",
      items: [
        { href: "/", name: "Home" },
        { href: "#", name: "News" },
        { href: "#", name: "Viral Stories" },
        { href: "#", name: "Match Score" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "#", name: "About Us" },
        { href: "#", name: "Careers" },
        { href: "/contact", name: "Contact" },
        { href: "policy", name: "Privacy Policy" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "#", name: "Terms of Service" },
        { href: "#", name: "FAQs" },
        { href: "#", name: "Support" },
        { href: "#", name: "Advertising" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300 py-14">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-10 gap-6">
        <div className="max-w-lg">
          <h3 className="text-white text-2xl font-sans">
            MVM BUSINESS SERVICES 
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Subscribe to our newsletter for the latest trending stories and updates.
          </p>
        </div>
  
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 text-gray-900 bg-white outline-none border border-gray-300 focus:border-purple-500 shadow-sm rounded-lg"
          />
          <button className="bg-purple-600 text-white px-5 py-2 text-sm font-medium rounded-lg shadow-md hover:bg-purple-500 transition">
            Subscribe
          </button>
        </form>
      </div>
  
      {/* Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 text-center sm:text-left">
        {footerNavs.map((nav, idx) => (
          <div key={idx}>
            <h4 className="text-white font-semibold mb-3">{nav.label}</h4>
            <ul className="space-y-2">
              {nav.items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-400 transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  
      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-4">
        <p className="text-sm">© 2025 All rights reserved.</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-4">
          <a href="#" className="flex items-center gap-2 hover:text-gray-400 justify-center">
            <FaFacebook size={20} /> <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-400 justify-center">
            <FaTwitter size={20} /> <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-400 justify-center">
            <FaGithub size={20} /> <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-400 justify-center">
            <FaInstagram size={20} /> <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;