import React from "react";
import Navbar from "../Navbar";
import image from "../../assets/diceLogo.png";
import staff1 from "../../assets/staff1.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import staff4 from "../../assets/staff4.png";
import FAQSection from "../FAQSection";
import Footer from "../Footer";

export default function About() {
  const staffMembers = [
    {
      name: "Dr. Anupma Gupta",
      role: "Assistant Professor (DICE)",
      image: staff2,
    },
    {
      name: "Dr Satyajit Anand",
      role: "Associate Professor (DICE)",
      image: staff3,
    },
    {
      name: "Dr. Manvinder Sharma",
      role: "Associate Professor (DICE)",
      image: staff4,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="h-[470px] bg-red-200 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center">
          Welcome to the DICE community
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl translate-y-8">
          {" "}
          Where Ideas Meet Innovation
        </p>
      </div>
      <div className="p-8 py-20 flex flex-col lg:flex-row items-center justify-center gap-x-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold">Who we are...?</h1>
          <p className="text-md md:text-lg text-gray-600 my-12">
            The Department of Interdisciplinary Courses in Engineering (DICE) at
            Chitkara University fosters collaboration among students and faculty
            from diverse academic backgrounds. It encourages them to work
            together on interdisciplinary projects, competitions, and
            hackathons, thereby promoting cross-disciplinary competencies and
            futuristic career decisions. By providing a platform for interaction
            with industry professionals, DICE helps students make informed
            career choices and stay abreast of industry trends. This initiative
            aligns with the objectives of the Government of India's National
            Education Policy (NEP) 2020, which emphasizes vocational exposure
            for learners and the integration of vocational education into
            academic institutions. NEP 2020's mandate is expected to lead to
            significant growth in vocational education, making it accessible to
            millions of students across the country. DICE embodies a community
            of developers, innovators, and entrepreneurs dedicated to leveraging
            technology to create positive change and fostering collaboration,
            innovation, and creativity.
          </p>
        </div>
        <div className="lg:w-1/3 flex items-center justify-center">
          <img src={image} alt="dice logo" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-semibold">
          Our Esteemed Staff
        </h1>
        <div className="py-8 flex flex-col items-center justify-center">
          <div>
            <div>
              <img
                src={staff1}
                alt="staff1"
                className="w-[250px] h-[280px] m-8 rounded-xl"
              />
            </div>
            <div className="text-center">
              <h1 className="font-semibold">Dr.(Prof) Rajneesh Talwaar</h1>
              <p>Dean: DICE</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-8">
            {staffMembers.map((staff, index) => (
              <div key={index}>
                <div>
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-[250px] h-[280px] m-8 rounded-xl"
                  />
                </div>
                <div className="text-center">
                  <h1 className="font-semibold">{staff.name}</h1>
                  <p>{staff.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
