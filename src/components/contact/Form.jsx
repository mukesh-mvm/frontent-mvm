"use client";
import { useState } from "react";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        e.target.reset();
        setAgreed(false);
      } else {
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Submit failed:", error);
    }

    setLoading(false);
  };

  return (
    <>
    <hr />
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full items-center">
        {/* Left Side - Image */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?ga=GA1.1.170324605.1744353854&semt=ais_hybrid&w=740"
            alt="Contact Illustration"
            className="w-full h-auto max-w-md rounded-2xl shadow-2xl"
          />
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-xl rounded-2xl p-10 w-full"
        >
          <input type="hidden" name="access_key" value="" />

          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
              required
            />

            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="p-3 rounded-lg bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="p-3 rounded-lg bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Type your message here"
            className="w-full mt-6 p-3 rounded-lg bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
            required
          ></textarea>

          {/* Agreement Checkbox */}
          <div className="flex items-start mt-4">
            <input
              id="checkbox"
              type="checkbox"
              className="mt-1 mr-2 accent-gray-700"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="checkbox" className="text-sm text-gray-600">
              By submitting the form, I agree to the Privacy Policy and Terms of Use to receive
              information from MVM BUSINESS SERVICES.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={!agreed || loading}
              className={`px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                agreed && !loading
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {submitted && (
            <p className="text-green-500 mt-4 text-center text-sm font-medium">
              Thanks for submitting!
            </p>
          )}
        </form>
      </div>
    </div>
    </>
    
  );
}
