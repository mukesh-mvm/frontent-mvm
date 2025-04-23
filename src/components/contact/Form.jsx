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
    <div className="min-h-screen flex items-center justify-center  px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 shadow-md rounded-xl p-8 w-full max-w-2xl"
      >
        {/* Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="8d887b6d-94e3-48cf-9455-a85001f477b7" />

        <h2 className="text-3xl font-semibold text-gray-600 mb-6">Get In Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            className="p-3 rounded-md bg-gray-300 text-gray-600 outline-none"
            required
          />
          
          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            className="p-3 rounded-md bg-gray-300 text-gray-600 outline-none"
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-md bg-gray-300 text-gray-600 outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-3 rounded-md bg-gray-300 text-gray-600 outline-none"
            required
          />
        </div>
        
        <textarea
          name="message"
          rows="4"
          placeholder="Type your message here"
          className="w-full mt-4 p-3 rounded-md bg-gray-300 text-gray-600 outline-none"
          required
        ></textarea>

        {/* Checkbox Agreement */}
        <div className="flex items-center mt-4">
          <input
            id="checkbox"
            type="checkbox"
            className="mr-2"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
          />
          <label htmlFor="checkbox" className="text-blue-800">
            By submitting the form I agree to the Privacy Policy and Terms of Use to receive
            information from MVM BUSINESS SERVICES.
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={!agreed || loading}
            className={`px-6 py-2 rounded-full text-white font-medium transition ${
              agreed && !loading
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-900 cursor-not-allowed"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {submitted && (
          <p className="text-green-500 mt-4 text-center">Thanks for submitting!</p>
        )}
      </form>
    </div>
    </>
    
  );
}
