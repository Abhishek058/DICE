import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";
import BlogSlider from "../BlogSlider";
import { Link } from "react-router-dom";

const OnGoingEvents = [
  {
    name: "Event 1",
    detail:
      " Immerse yourself in the fusion of gaming and education at the DICE-SKOAR Gamers Arcade on December 8, 2023, hosted at the Sportorium. Experience AR/VR gaming, PS5, and laptop gaming while discovering how these technologies can enhance your grasp of complex technical concepts. Engage in interactive sessions to gain insights into the future of learning. Witness thrilling online gaming competitions as 12 teams from Chitkara University compete for top honors, with cash prizes and goodies awaiting the champions. Join us for an unforgettable event, where fun meets learning in the digital realm.",
    date: "2024-04-10 to 2024-04-15",
    formlink: "https://forms.gle/GUpuxPVHiWgUavpG6",
  },
  {
    name: "Event 2",
    detail:
      "Dr. Talwar's leadership was pivotal in ensuring the event's success. Gratitude is extended to all members of DICE, the expert panel, and participants for their invaluable contributions. Special thanks to the management for their unwavering support. Experience Engineer's Day Calibration: a celebration of collaboration, innovation, and real-world engineering challenges.",
    date: "2024-04-15 to 2024-04-25",
    formlink: "https://forms.gle/GUpuxPVHiWgUavpG6",
  },
];
const upcomingEvents = [];

export default function Event() {
  return (
    <div className="Events">
      <Navbar />
      <div className="container mx-auto pt-40">
        <h1 className="text-5xl font-semibold mb-12">Past Events</h1>
        <div>
          <BlogSlider />
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold mb-12">Ongoing Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OnGoingEvents.map((event, index) => (
            <div
              key={index}
              className="border border-black hover:shadow-blue-300 shadow-xl rounded-lg p-6 duration-500 hover:scale-105"
            >
              <div className="h-4/5">
                <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
                <p className="text-3xl mb-2">
                  <strong>{event.name}</strong>
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Date</strong> {event.date}
                </p>
                <p className="text-gray-600 mb-2">{event.detail}</p>
              </div>
              <div className="pt-8">
                <Link
                  to={event.formlink}
                  target="blank"
                  className="bg-black text-white py-2 px-8 rounded duration-300"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold mb-12">Upcoming Events</h1>
        {upcomingEvents.length === 0 ? (
          <p className="text-2xl text-center">We will be organizing soon</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-red-500 rounded-lg p-6 duration-500 hover:bg-red-100 hover:scale-105 cursor-pointer"
              >
                <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Faculty:</strong> {event.faculty}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Status:</strong> {event.status}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Database:</strong> {event.database}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
