import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";
import BlogSlider from "../BlogSlider";
import { Link } from "react-router-dom";
import diceVid3 from "../../assets/DiceVid3.mp4";

const OnGoingEvents = [
  {
    id: "1",
    eventName: "Event 1",
    eventDetail:
      " Immerse yourself in the fusion of gaming and education at the DICE-SKOAR Gamers Arcade on December 8, 2023, hosted at the Sportorium. Experience AR/VR gaming, PS5, and laptop gaming while discovering how these technologies can enhance your grasp of complex technical concepts. Engage in interactive sessions to gain insights into the future of learning. Witness thrilling online gaming competitions as 12 teams from Chitkara University compete for top honors, with cash prizes and goodies awaiting the champions. Join us for an unforgettable event, where fun meets learning in the digital realm.",
    eventDate: "2024-04-10 to 2024-04-15",
    scriptUrl:
      "https://script.google.com/macros/s/AKfycbzWEjFV-lpkk7gvh5f5qavXxaZDpblbF2BvKdFFml2HxNnsxQDydCE97VE3W3QWPcN-/exec",
  },
  {
    id: "2",
    eventName: "Event 2",
    eventDetail:
      "Dr. Talwar's leadership was pivotal in ensuring the event's success. Gratitude is extended to all members of DICE, the expert panel, and participants for their invaluable contributions. Special thanks to the management for their unwavering support. Experience Engineer's Day Calibration: a celebration of collaboration, innovation, and real-world engineering challenges.",
    eventDate: "2024-04-10 to 2024-04-15",
    scriptUrl: "", // App Script Url
  },
];
const upcomingEvents = [
  {
    eventName: "Event 2",
    eventDetail:
      "Dr. Talwar's leadership was pivotal in ensuring the event's success. Gratitude is extended to all members of DICE, the expert panel, and participants for their invaluable contributions. Special thanks to the management for their unwavering support. Experience Engineer's Day Calibration: a celebration of collaboration, innovation, and real-world engineering challenges.",
    eventDate: "2024-04-15 to 2024-04-25",
    EventFormLink: "", // App Script Url
  },
];

export default function Event() {
  return (
    <div className="Events">
      <Navbar />
      <div className="container mx-auto pt-40">
        <h1 className="text-4xl font-semibold mb-12 sm:text-5xl text-center">Past Events</h1>
        <div>
          <BlogSlider />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center mb-28">
          <div className="md:w-1/2 p-4">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
              Some glimpse of our past events
            </h1>
            <p className="text-gray-500 text-md sm:text-lg">
              Embark on a visual journey through our past events, presented in a
              captivating video. Each scene offers a glimpse into our history,
              unfolding like a storybook. Experience our triumphs, setbacks, and
              the unfolding of time through dynamic imagery and narration. Dive
              into our narrative, where every frame reveals a piece of our
              collective heritage. Showcasing vibrant collaboration among
              students and faculty from diverse fields. Through projects,
              competitions, and industry engagements, DICE fosters innovation
              and cross-disciplinary learning, preparing students for dynamic
              career paths aligned with the evolving demands of the industry.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-2">
            <video
              src={diceVid3}
              className="rounded-full w-[320px] h-[520px] object-cover shadow-2xl"
              autoPlay
              muted
              loop
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold mb-12 sm:text-5xl">Ongoing Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OnGoingEvents.map((event, index) => (
            <div
              key={index}
              className="border border-black hover:shadow-blue-300 shadow-xl rounded-lg p-6 duration-500 hover:scale-105"
            >
              <div className="h-[450px] sm:h-[400px]">
                <h2 className="font-semibold text-3xl mb-4">
                  {event.eventName}
                </h2>
                <p className="text-gray-600 mb-2">
                  <strong>Date</strong> {event.eventDate}
                </p>
                <p className="text-gray-600 mb-2">{event.eventDetail}</p>
              </div>
              <div className="mt-8">
                <Link
                  to={{
                    pathname: `/register/${encodeURIComponent(
                      JSON.stringify(event)
                    )}`,
                    state: { event: event },
                  }}
                  target="blank"
                  className="bg-black text-white py-2 px-8 rounded"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto pt-40 py-8 p-4">
        <h1 className="text-4xl font-semibold mb-12 sm:text-5xl">Upcoming Events</h1>
        {upcomingEvents.length === 0 ? (
          <p className="text-2xl text-center">We will be organizing soon</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-black hover:shadow-blue-300 shadow-xl rounded-lg p-6 duration-500 hover:scale-105"
              >
                <div className="h-[450px] sm:h-[400px]">
                  <h2 className="text-xl font-semibold mb-4">
                    {event.eventName}
                  </h2>
                  <p className="text-3xl mb-2">
                    <strong>{event.name}</strong>
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Date</strong> {event.eventDate}
                  </p>
                  <p className="text-gray-600 mb-2">{event.eventDetail}</p>
                </div>
                <div className="mt-8">
                  <Link
                    to={{
                      pathname: `/register/${encodeURIComponent(
                        JSON.stringify(event)
                      )}`,
                      state: { event: event },
                    }}
                    target="blank"
                    className="bg-black text-white py-2 px-8 rounded"
                  >
                    Register
                  </Link>
                </div>
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
