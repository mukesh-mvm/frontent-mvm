"use client";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-200 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
       <p className="text-2xl">Address: </p><span>1028, 10th, ITHUM TOWER, I. T. Park, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh</span>
       <p className="text-2xl">Email: </p><span>contact@mvmbs.com</span>
        </div>

        <div>
          <h6 className="text-xl font-semibold mb-4 text-white">Company</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-orange-400 transition" href="#">About us</a></li>
            <li><Link  href='/contact' className="hover:text-orange-400 transition">Contact </Link></li>
            <li><Link  href='/blog' className="hover:text-orange-400 transition">Campaigns</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-xl font-semibold mb-4 text-white">Legal</h6>
          <ul className="space-y-2">
            <li><Link href='/terms-conditions' className="hover:text-orange-400 transition">Terms and conditions</Link></li>
            <li><Link  href='/policy' className="hover:text-orange-400 transition">Privacy policy</Link></li>
            <li><a className="hover:text-orange-400 transition" href="#">Cookie policy</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-xl font-semibold mb-4 text-white">Follow Us</h6>
          <div className="flex gap-4 text-white text-2xl">
            <Link href="https://www.facebook.com/mvmbs/" className="hover:text-orange-400 transition"><FaTwitter /></Link>
            <Link href="https://www.facebook.com/mvmbs/" className="hover:text-orange-400 transition"><FaFacebook /></Link>
            <Link href="https://in.linkedin.com/company/mvm-business-services" className="hover:text-orange-400 transition"><FaLinkedin /></Link>
            <Link href="https://instagram.com" className="hover:text-orange-400 transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-orange-400 transition"><FaYoutube /></Link>
          </div>
        </div>
      </footer>

      <footer className="bg-black text-gray-300 flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-gray-700">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="MVM logo"
            className="w-16 h-16 object-contain"
          />
          <p className="text-md">MVM Business Services</p>
        </div>
        <p className="text-sm mt-2 md:mt-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
