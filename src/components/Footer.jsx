import Link from "next/link";

function Footer() {
    return (
        <div className="footer-container bg-gray-900 text-white py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="footer2">
                <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                <ul className="space-y-2">
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>mvmbs@gmail.com</li>
                </ul>
            </div>

            <div className="footer3">
                <h4 className="text-lg font-semibold mb-2">Our Location</h4>
                <p>1028, 10th Floor, Ithum I.T. Park<br />
                    Sector 62, Noida, 201309
                </p>
            </div>

            <div className="footer-3">
                <h4 className="text-lg font-semibold mb-2">About Us</h4>
                <p>We are currently taking the market to new heights.</p>
                <Link href="/policy" className="hover:underline mt-2 block">
                    Privacy Policy
                </Link>
            </div>

        </div>
    );
}

export default Footer;
