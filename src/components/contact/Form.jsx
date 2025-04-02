"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mj79z6v", "template_csbkyld", form.current, {
        publicKey: "nLOt9-LnQhjoMFfyI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] md:w-[70%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Contact Us</h2>

        <form ref={form} onSubmit={handleSubmit} className="flex flex-col space-y-4 text-white">
          <label htmlFor="name" className="font-medium">Full Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Please Enter Your Name"
            className="p-2 border border-gray-600 bg-gray-700 rounded-md w-full text-white"
            required
          />

          <label htmlFor="email" className="font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Please Enter Your Email"
            className="p-2 border border-gray-600 bg-gray-700 rounded-md w-full text-white"
            required
          />

          <label htmlFor="message" className="font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Enter your message..."
            className="p-2 border border-gray-600 bg-gray-700 rounded-md w-full text-white"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white w-[40%] md:w-[30%] mx-auto rounded-full p-2 hover:bg-blue-400 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;   
