import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";

const publications = [
  {
    faculty: "Dr. Anupma, Dr. Shonak, Dr. Rachit",
    title: "Tri-band Antenna for Compact Wireless Sensor Nodes",
    status: "Published",
    database: "Scopus",
  },
  {
    faculty: "Dr. Ramandeep Kaur, Dr. Harjinder Singh, Dr. Manvinder Sharma",
    title: "SIW based Leaky Wave antenna for Aerospace application in X band",
    status: "Published",
    database: "Scopus",
  },
  {
    faculty: "Dr. Ramesh Kumar. R K Ratnesh, Jai Singh",
    title:
      "Recent Prospects of Medical Imaging and Sensing Technologies Based on Electrical Impedance Data Acquisition System",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Manvinder Sharma, Harjinder Singh, Anuj Gupta",
    title:
      "Target identification and control model of autopilot for passive homing missiles",
    status: "Published",
    database: "SCIE",
  },
  {
    faculty: "Akhilesh Kumar, I. Keshtha, Jyoti Bhola, MW Bhatt",
    title:
      "Application of Artificial Neural Network Unified with Fuzzy Logic for Systematic Stock Market Prediction",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Manish Singla, Jyoti Gupta. M. Alsharif, K. Yahay, A. Jahid",
    title:
      "Sustainable Development of a Direct Methanol Fuel Cell Using the Enhanced LSHADE Algorithm and Newton Raphson Method",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Ashish Kumar Singh, Ramesh Kumar, Sunil Dhawan, Vikas Malhotra",
    title:
      "A Comparative Analysis of Fetomaternal monitoring Techniques utilizing the Bio-Impedance Technique",
    status: "Published",
    database: "SCI",
  },
  {
    faculty: "Manisha Sharma, Satyajit Anand, Rajeev Pourush",
    title: "Landscape of epilepsy research: Analysis and Future Trajectory",
    status: "Published",
    database: "SCI",
  },
  {
    faculty:
      "Ramesh Kumar, R.K. Ratnesh, J. Singh, R. Chandra, G. Singh, V. Vishnoi",
    title:
      "Recent Prospects of Medical Imaging and Sensing Technologies Based on Electrical Impedance Data Acquisition System",
    status: "Published",
    database: "Scopus",
  },
];

export default function Research() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold text-center mb-12">
          List of Publications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-4">
                {publication.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Faculty:</strong> {publication.faculty}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Status:</strong> {publication.status}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Database:</strong> {publication.database}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
