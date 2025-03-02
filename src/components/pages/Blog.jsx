import React from "react";
import blogpost1 from "../../assets/BlogPageImg1.png";
import blogpost2 from "../../assets/BlogPageImg2.png";
import blogpost3 from "../../assets/BlogPageImg3.png";
import blogpost4 from "../../assets/BlogPageImg4.png";
import blogpost5 from "../../assets/BlogPageImg5.png";
import blogpost6 from "../../assets/BlogPageImg6.png";
import blogpost7 from "../../assets/BlogPageImg7.png";
import blogpost8 from "../../assets/BlogPageImg8.png";
import blogpost9 from "../../assets/BlogPageImg9.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Blog = () => {
  const blogs = [
    {
      title:
        "Exploring Machine Learning Applications Workshop at Chitkara University",
      content:
        "The Department of Interdisciplinary Courses in Engineering (DICE) at Chitkara University hosted a workshop titled Exploring Machine Learning on October 7, 2023. Led by Prof (Dr.) Rajneesh Talwar, the event highlighted the importance of machine learning in today's technology landscape. Dr. Satyajit Anand, an expert in the field, guided participants through various aspects of machine learning, including dataset handling, data visualization, and model building. The interactive session concluded with attendees feeling inspired to delve deeper into the field.",
      image: blogpost1,
    },
    {
      title: "TechQuake 2023: A Hackathon Extravaganza at Chitkara University",
      content:
        "DICE, the student-led innovation hub at Chitkara University, sent a team of six students to participate in TechQuake 2023, a prestigious hackathon event. Over the course of two days, participants collaborated to develop innovative solutions to societal challenges. The event featured keynote speeches, presentations on Open Innovation and the United Nations' Sustainable Development Goals, and group discussions. Chitkara University's teams, Impact Catalyst and Team Innovation Invincibles, impressed judges with their projects, with Team Innovation Invincibles receiving the Award of Honour. TechQuake 2023 underscored the dedication of DICE at Chitkara University to fostering innovation and driving positive change.",
      image: blogpost2,
    },
    {
      title:
        "Real-Time Innovation with Arduino: A Workshop by DICE at Chitkara University",
      content:
        "DICE at Chitkara University hosted a workshop on Arduino, aimed at empowering young engineers to develop solutions for real-time problems using Arduino and IoT technologies. Led by workshop experts Dr. Gaurav Sharma and Prof. (Dr) Rajneesh Talwar, the event provided participants with an in-depth understanding of Arduino hardware components and development kits. Dr. Sharma delved into the various Arduino boards available, highlighting their essential components and real-world applications. Practical demonstrations guided participants through interfacing sensors and modules with Arduino boards, fostering hands-on exploration and experimentation. The workshop culminated in participants working on basic real-time projects, showcasing their newfound skills and laying the foundation for continuous learning and innovation within the university.",
      image: blogpost3,
    },
    {
      title:
        "Empowering Minds: Exploring Machine Learning Workshop at Chitkara University",
      content:
        "On November 16, 2023, the Department of Interdisciplinary Courses in Engineering (DICE) at Chitkara University organized a workshop titled Exploring Machine Learning. Led by Dr. Satyajit Anand, an expert in the field, the workshop aimed to provide attendees with a comprehensive understanding of machine learning and its practical applications. Prof (Dr.) Rajneesh Talwar, Dean of DICE, commenced the event with an insightful introduction highlighting the significance of machine learning in today's technological landscape. Dr. Anand's presentation covered core machine learning concepts, types, and real-world applications across various industries. Attendees were guided through practical implementation, including dataset handling, data visualization, and model building. The workshop fostered open dialogue, encouraging participants to explore further in the field of machine learning. It was a significant step in nurturing a culture of continuous learning and innovation within the university.",
      image: blogpost4,
    },
    {
      title:
        "Blockbash Workshop: Unlocking the Power of Blockchain at Chitkara University",
      content:
        "In collaboration with the 3rd Year Computer Science Engineering (CSE) department, the Department of Interdisciplinary Courses in Engineering (DICE) at Chitkara University organized a two-day workshop titled Blockbash Workshop on November 23 and 24, 2023. The workshop, inaugurated by Dr. Rajneesh Talwar, Dean of DICE, and Dr. Rupali Gill, Dean of 3rd Year CSE, aimed to equip students with the fundamentals of blockchain technology. Led by Vinayak Kalra from Crewsphere ICP India Hub, the workshop provided a comprehensive introduction to blockchain technology, emphasizing its decentralized and distributed nature. Students were guided through the Motoko playground on GitHub, learning to create smart contracts and decentralized applications step by step. Upon completion of the workshop, students received certification from Crewsphere ICP India Hub, accrediting them as Level-1 Blockchain Developers. Mentors continued to support students in their blockchain projects through online interactions on platforms like Google Meet. Additionally, each participant received coupons worth Rs 1000/- to aid in their projects, with winning teams standing a chance to win up to Rs 25,000/- upon project submission. The Blockbash Workshop not only empowered students with blockchain development skills but also provided them with the resources and support needed to pursue their blockchain projects effectively.",
      image: blogpost5,
    },
    {
      title:
        "Innovative Endeavors: DICE Technovation Project Exhibition at Chitkara University",
      content:
        "On December 13, 2023, DICE at Chitkara University, Punjab, organized a Project Exhibition titled DICE Technovation: A Step Towards Innovations at Alpha Zone, Chitkara University. The event, graced by Mr. Jogvinder Singh, M.D., and Mr. Gagan from Solitarie Infosystems Pvt. Ltd., showcased 60 projects from first-year students, attracting over 500 participants. Projects featured advanced technologies such as IoT, Li-Fi, and Machine Learning, reflecting the students' dedication to innovation. Participants presented their ideas, designs, and prototypes, fostering collaboration and knowledge exchange within the engineering community. Under the leadership of Dr. Rajneesh Talwar, the Project Exhibition celebrated innovation and provided invaluable exposure to real-world engineering challenges. The event's success underscored the talent, creativity, and collaborative spirit of the engineering community at Chitkara University.",
      image: blogpost6,
    },
    {
      title:
        "Chitkara University Represents Punjab at Bharatiya Vigyan Sammelan 2023",
      content:
        "From December 21 to 24, 2023, the 6th Bharatiya Vigyan Sammelan and Expo, jointly organized by Vijnana Bharati and the Government of Gujarat, took place in Ahmedabad. Dr. Rajneesh Talwar, Dean of the Department of Interdisciplinary Courses in Engineering (DICE) at Chitkara University, was invited as a judge and represented both the university and the state of Punjab as the 'State Coordinator'. At the event, Dr. Talwar shared his valuable insights with participants, thought leaders, and organizers. The Bharatiya Vigyan Sammelan showcased a diverse range of activities, including a themed conference, a science exhibition, and interactive sessions with scientists from India and abroad. BVS 2023 aimed to provide an excellent platform for integrating and showcasing Indian traditional practices, grassroots innovations, and contributions of common people in science, alongside the scientific contributions of researchers and scientists in contemporary science. The event welcomed scientists, researchers, academicians, technocrats, grassroots innovators, farmers, artisans, and students to share their research, scientific innovations, and creative ideas aimed at providing sustainable solutions for the country's problems. Dr. Talwar's participation underscored Chitkara University's commitment to promoting scientific advancements and fostering collaboration in the field of science and technology.",
      image: blogpost7,
    },
    {
      title: "Innovating Agriculture: Solar-Based Grasscutter Project",
      content:
        "The Solar Based Grasscutter with Temperature and Soil Moisture Monitoring project, developed by the Department of Interdisciplinary Courses in Engineering, is an innovative endeavor aimed at revolutionizing grass cutter farming. This initiative combines advanced technology with sustainable farming practices to enhance efficiency and promote environmental friendliness. The project utilizes PVC pipes for structural support, ensuring durability and cost-effectiveness while also promoting eco-friendly farming. By incorporating solar power, the project enhances efficiency and reduces reliance on traditional energy sources. Additionally, temperature and soil moisture monitoring systems are integrated to optimize grass cutter farming practices further. With its focus on innovation and sustainability, the Solar-Based Grasscutter Project represents a significant step forward in modernizing agriculture and addressing environmental challenges.",
      image: blogpost8,
    },
    {
      title: "Empowering Mobility: Solar-Based Wheelchair Tricycle Project",
      content:
        "The Solar-Based Wheelchair Tricycle project, developed by the Department of Interdisciplinary Courses in Engineering (DICE), addresses the mobility challenges faced by physically disabled individuals. Traditional motorized wheelchairs can pose difficulties, especially when navigating stairs or covering long distances, leading to increased dependence on others. To tackle these challenges, DICE created the Solar-Based Wheelchair Tricycle using scrapped materials, showcasing the potential of sustainable solutions in transforming everyday transportation. By reusing materials and harnessing solar power, the project offers a smart, eco-friendly alternative for wheelchair mobility. A distinctive feature of the tricycle is the integration of a solar panel on the roof, serving both as an eco-friendly power source and a protective shelter for the rider. This innovative approach not only reduces waste but also addresses the need for sustainable mobility solutions. In an era where reducing emissions, carbon footprints, and dependence on non-renewable resources is crucial, the Solar-Based Wheelchair Tricycle presents a practical and environmentally friendly solution for disabled individuals, empowering them to move around independently and with ease.",
      image: blogpost9,
    },
  ];

  return (
    <div className="Blogs">
      <Navbar />
      <div className="w-[90%] mx-auto px-4 py-8 pt-40">
        <h1 className="text-5xl font-bold mb-8 text-center">Projects & National Events</h1>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center my-24 gap-x-24"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/3 mr-4">
                  <img
                    src={blog.image}
                    alt="Blog Image"
                    className="w-full h-[300px] rounded-md shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-700">{blog.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-700">{blog.content}</p>
                </div>
                <div className="md:w-1/3 ml-4">
                  <img
                    src={blog.image}
                    alt="Blog Image"
                    className="w-full h-[300px] rounded-md shadow-md"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
