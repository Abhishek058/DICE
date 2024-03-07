import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Footer from "../Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    const apiUrl =
      "https://script.google.com/macros/s/AKfycbwTkMYxvD3FOYzrupF7mH7HNdlWdxr8gX28gzBE8w7NwsLBcW6mC4eM13_Uvni-ZNEDlQ/exec";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting form");
    }
  };
  return (
    <div className="Contact">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-32 text-5xl font-semibold">Contact Us</h1>
        <p className="font-medium p-2 text-center">
          We'd love to hear from you! Feel free to reach out to us with any
          questions, feedback, or inquiries.
        </p>
        <div className="w-full flex flex-col-reverse sm:flex-row px-2 gap-y-20 justify-center my-12">
          <form
            className="form sm:w-[60%] flex flex-col gap-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <div className="flex flex-col gap-y-2">
                <p className="text-gray-600 text-lg flex items-center">
                  <span className="text-gray-600 mr-5 text-sm">01</span>What's
                  your name
                </p>
                <input
                  placeholder="Name *"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline-none border-none bg-transparent ml-10 text-lg"
                />
              </div>
              <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-y-2">
                <p className="text-gray-600 text-lg flex items-center">
                  <span className="text-gray-600 mr-5 text-sm">02</span>What's
                  your Email
                </p>
                <input
                  placeholder="email@mail.com *"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none border-none bg-transparent ml-10 text-lg "
                />
              </div>
              <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-y-2">
                <p className="text-gray-600 text-lg flex items-center">
                  <span className="text-gray-600 mr-5 text-sm">03</span>What's
                  your message
                </p>
                <input
                  placeholder="Hello, wanted to join you *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="outline-none border-none bg-transparent ml-10 text-lg "
                />
              </div>
              <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
            </div>
            <input
              name="Name"
              type="submit"
              className="font-semibold border-2 border-black w-full sm:w-[200px] h-[50px] rounded-full duration-300 hover:bg-black hover:text-white cursor-pointer"
            />
          </form>
          <div className="flex flex-col items-center gap-y-8">
            <div className="w-[90%] ml-10 flex flex-col gap-y-16">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-black text-md font-semibold">
                  CONTACT DETAILS
                </h1>
                <h1 className="text-gray-600">dice@chitkara.edu.in</h1>
                <h1 className="text-gray-600">+91 7015745045</h1>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-black text-md font-semibold">ADDRESS</h1>
                <h1 className="text-gray-600">Chitkara University</h1>
                <h1 className="text-gray-600">Rajpura, Punjab</h1>
                <h1 className="text-gray-600">Location: India</h1>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-black text-md font-semibold">SOCIALS</h1>
                <a
                  href="https://www.instagram.com/dice_cuiet/"
                  target="blank"
                  className="text-gray-600 flex items-center"
                >
                  <FaInstagram /> &nbsp; Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/dice-chitkara-university-12481b266/"
                  className="text-gray-600 flex items-center"
                >
                  <FaLinkedin /> &nbsp; LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
