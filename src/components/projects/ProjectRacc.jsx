// import React from "react";
// import { motion } from "framer-motion";

// const ProjectPage = () => {
//   const sections = [
//     { title: "The Challenge", content: "Explaining why raccoon tracking matters..." },
//     { title: "The Solution", content: "How this app addresses the problem..." },
//     { title: "Key Features", content: "Interactive features of the app..." },
//     { title: "Design Process", content: "Wireframes, iterations, and UI decisions..." },
//     { title: "Results & Learnings", content: "Impact and takeaways from this project..." },
//   ];

//   return (
//     <div className="bg-[#141414] text-white font-sans">
//       {/* Hero Section */}
//       <section className="h-screen flex flex-col justify-center items-center">
//         <motion.h1
//           className="text-5xl md:text-7xl font-bold text-white font-sf"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Raccoon Tracker
//         </motion.h1>
//         <motion.p
//           className="text-lg mt-4 text-gray-400"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           Efficient Wildlife Monitoring at Your Fingertips
//         </motion.p>
//         <motion.div
//           className="mt-10"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 1 }}
//         >
//           <img
//             src="your-app-mockup.png"
//             alt="Raccoon Tracker Mockup"
//             className="rounded-lg shadow-lg w-80 hover:scale-105 transition-transform"
//           />
//         </motion.div>
//       </section>

//       {/* Content Sections */}
//       {sections.map((section, index) => (
//         <motion.section
//           key={index}
//           className="py-16 px-8 md:px-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-vibrant-yellow to-vibrant-green bg-clip-text text-transparent">
//             {section.title}
//           </h2>
//           <p className="mt-4 text-gray-300">{section.content}</p>
//         </motion.section>
//       ))}

//       {/* Key Features Section */}
//       <section className="py-16 px-8 md:px-16 bg-gradient-to-b from-primary to-black">
//         <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-vibrant-blue to-vibrant-pink bg-clip-text text-transparent">
//           Key Features
//         </h2>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {["Live Tracking", "Data Visualization", "Crowdsourcing"].map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="p-6 bg-primary rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
//               whileHover={{ scale: 1.1 }}
//             >
//               <h3 className="text-xl font-bold text-vibrant-yellow">{feature}</h3>
//               <p className="mt-2 text-gray-400">Brief description of the feature here.</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center text-gray-500">
//         <p>Built with React and TailwindCSS</p>
//       </footer>
//     </div>
//   );
// };

// // export default ProjectPage;
// import React from "react";
// import { motion } from "framer-motion";
// //import racchome from "/Users/daphnewu/Desktop/Projects/portfolio/src/components/assets/images/racchome.mov";
// import raccwelcome from "/Users/daphnewu/Desktop/Projects/portfolio/src/components/assets/images/raccwelcome.mp4";
// import racctracc from "/Users/daphnewu/Desktop/Projects/portfolio/src/components/assets/images/racctracc.jpeg";

// const ProjectRacc = () => {
//   return (
//     <div className="bg-[#141414] text-white font-sono">
//       {/* Hero Section */}
//       <section
//         className="h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-center items-center bg-gradient-to-b from-[#141414] to-[#1c1c1c] px-6 md:px-16"
//         aria-label="Hero Section"
//       >
//         <div className="w-full flex flex-col md:flex-row items-center justify-between">
//           {/* Text Content */}
//           <div className="md:w-1/2 text-center md:text-left">
//             <motion.h1
//               className="text-6xl md:text-7xl font-bold text-white"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               aria-labelledby="hero-title"
//             >
//               RaccTracc
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl text-gray-300 font-sf mt-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               aria-describedby="hero-subtitle"
//             >
//               Enhancing Raccoon Appreciation at UCSD
//             </motion.p>
//           </div>
//           {/* Video Content */}
//           <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
//             <motion.video
//               className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] max-h-[500px] rounded-lg"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               autoPlay
//               loop
//               muted
//               playsInline
//             >
//               <source src={raccwelcome} type="video/mp4" />
//               Your browser does not support the video tag.
//             </motion.video>
//           </div>
//         </div>
//       </section>

//       {/* Project Overview Section with Image */}
//       <motion.section
//         className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         aria-labelledby="project-overview"
//       >
//         <div className="md:w-1/3">
//           <motion.img
//             src={racctracc}
//             alt="RaccTracc app mockup showing raccoon tracking features on a mobile device"
//             className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform"
//             loading="lazy"
//             role="img"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-8">
//           <h2
//             className="text-4xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-green bg-clip-text text-transparent"
//             id="project-overview"
//           >
//             Project Overview
//           </h2>
//           <p className="text-gray-300 text-lg mt-4 font-sf leading-relaxed">
//             RaccTracc is an innovative platform designed to bring the raccoon-loving community closer by offering interactive features like real-time tracking, educational resources, and collaborative tools. Inspired by the viral @ucsd.raccoons Instagram account, it elevates wildlife appreciation to new heights.
//           </p>
//         </div>
//       </motion.section>

//       {/* Key Features Section */}
//       <motion.section
//         className="py-12 px-6 md:px-16 bg-gradient-to-b from-primary to-black"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         aria-labelledby="key-features"
//       >
//         <h2
//           className="text-4xl font-bold text-center bg-gradient-to-r from-vibrant-yellow to-vibrant-green bg-clip-text text-transparent"
//           id="key-features"
//         >
//           Key Features
//         </h2>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Live Tracking",
//               description: "Get instant updates on raccoon sightings across campus.",
//             },
//             {
//               title: "Educational Resources",
//               description: "Access safety tips, behavioral insights, and habitat details.",
//             },
//             {
//               title: "Community Engagement",
//               description: "Collaborate with fellow raccoon lovers through shared sightings.",
//             },
//           ].map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
//               whileHover={{ scale: 1.1 }}
//               role="region"
//               aria-labelledby={`feature-title-${idx}`}
//             >
//               <h3
//                 className="text-xl font-bold font-sono text-vibrant-yellow"
//                 id={`feature-title-${idx}`}
//               >
//                 {feature.title}
//               </h3>
//               <p className="mt-2 font-sf text-gray-400">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Impact Section */}
//       <motion.section
//         className="py-12 px-6 md:px-16"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         aria-labelledby="impact"
//       >
//         <h2
//           className="text-4xl font-bold bg-gradient-to-r from-vibrant-blue to-vibrant-pink bg-clip-text text-transparent"
//           id="impact"
//         >
//           Impact
//         </h2>
//         <p className="text-gray-300 mt-4 leading-relaxed">
//           RaccTracc transformed raccoon watching into a meaningful activity, encouraging responsible wildlife interactions and fostering a tight-knit community. The app’s success lies in its ability to combine education, interaction, and passion into one cohesive experience.
//         </p>
//       </motion.section>

//       {/* Call to Action */}
//       <section className="text-center py-12 bg-gradient-to-t from-[#141414] to-[#1c1c1c]">
//         <a
//           href="#"
//           className="px-6 py-3 text-lg font-bold text-white bg-vibrant-green rounded-lg shadow-md hover:bg-vibrant-blue transition-colors"
//           aria-label="Explore RaccTracc"
//         >
//           Explore RaccTracc
//         </a>
//       </section>
//     </div>
//   );
// };

// export default ProjectRacc;
import React, { useState, useEffect } from "react";
import '../styles/Racc.css';
import { motion } from "framer-motion";
import raccwelcome from "../assets/images/raccwelcome.mp4";
import racctracc from "../assets/images/racctracc.jpeg";
import raccfeed from "../assets/images/raccfeed.mp4";
import racccamera from "../assets/images/racccamera.mp4";
import raccwireframe from "../assets/images/raccwireframe.png";
import raccpallette from "../assets/images/raccpallette.png";
import raccprofile from "../assets/images/raccprofile.mp4";
import Navbar from '../Navbar';

const ProjectRacc = () => {
  // const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add("in-view"); // Add 'in-view' class when in view
          } else {
            target.classList.remove("in-view"); // Optionally remove 'in-view' class when out of view
          }
        });
      },
      { threshold: 0.5 }
    );
  
    const targets = document.querySelectorAll(".scroll-trigger");
    targets.forEach((el) => observer.observe(el));
  
    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);
  

  return (
<div className="bg-[#141414] text-white font-sono">
  <Navbar />
  {/* Hero Section */}
  <section
    className="h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-center items-center bg-[#141414] px-6 md:px-16 pt-16"  // Added pt-32 for extra padding
    aria-label="Hero Section"
  >
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-9xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          aria-labelledby="hero-title"
        >
          RaccTracc
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 font-sf mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          aria-describedby="hero-subtitle"
        >
          Enhancing Raccoon Appreciation at UCSD
        </motion.p>
      </div>
      {/* Video Content */}
      <div className="flex justify-center md:w-1/2 mt-12 md:mt-0"> {/* Adjusted mt-12 */}
        <motion.video
          className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] max-h-[500px] rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={raccwelcome} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  </section>

      {/* Project Overview Section with Image */}
      <motion.section
        className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="project-overview"
      >
        <div className="md:w-1/3">
          <motion.video
            src={raccfeed} // Replace with your video source
            className="rounded-lg shadow-lg w-[300px] mx-auto hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            autoPlay
            loop
            muted
            playsInline
            aria-label="RaccTracc app video demo"
          >
            Your browser does not support the video tag.
          </motion.video>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-5xl font-bold text-vibrant-yellow" id="project-overview">
            Project Overview
          </h2>
          <p className="text-gray-300 text-lg mt-4 font-sf leading-relaxed">
            RaccTracc is a web application developed to enhance the way UCSD students experience and engage with raccoons on campus. By offering real-time raccoon sightings, educational resources on raccoon safety and behavior, and a platform for community engagement, RaccTracc serves as a unique space for raccoon lovers to connect, learn, and enjoy these fascinating creatures. With over 6000 followers on the popular @ucsd.raccoons Instagram, we sought to build on that enthusiasm by creating a more interactive and informative experience.
          </p>
        </div>
      </motion.section>

      {/* Purpose & Problem Section */}
      <motion.section
        className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="purpose"
      >
        {/* Text Content: 2/3 width */}
        <div className="md:w-2/3 pr-8 md:pr-16"> {/* Added more padding on the right for spacing */}
          <h2 className="text-5xl font-bold text-vibrant-yellow" id="purpose">
            Purpose & Problem
          </h2>
          <p className="text-gray-300 mt-4 font-sf leading-relaxed">
            Inspired by the growing raccoon presence at UCSD and the popularity of the Instagram account, our goal was to design an app that would address the limitations of a static social media page. We noticed that while Instagram offered an engaging platform for sharing raccoon photos, it lacked real-time tracking and a sense of community around these wild animals.
          </p>
          <ul className="text-gray-300 mt-4 list-disc list-inside">
            <li>
              <span className="font-sf">Provide a <span className="brush-underline scroll-trigger font-sf">real-time</span> raccoon tracking feature for users to easily locate raccoons on campus.</span>
            </li>
            <li>
              <span className="font-sf brush-underline scroll-trigger">Educate</span><span className="font-sf"> users about raccoon safety, behavior, and habitat through curated content.</span>
            </li>
            <li>
              <span className="font-sf">Foster a sense of <span className="brush-underline scroll-trigger font-sf">community</span> by allowing users to actively participate in sharing sightings.</span>
            </li>
          </ul>
        </div>

        {/* Video Content: 1st Video */}
        <div className="md:w-[350px] mt-6 md:mt-0 pl-8 md:pl-16"> {/* Added more padding on the left for spacing */}
          <motion.video
            src={racccamera} // Replace with your video source
            className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            autoPlay
            loop
            muted
            playsInline
            aria-label="RaccTracc app video demo"
          >
            Your browser does not support the video tag.
          </motion.video>
        </div>

        {/* Video Content: 2nd Video (new one added) */}
        <div className="md:w-[350px] mt-6 md:mt-0 pl-8 md:pl-16"> {/* Added padding for the second video */}
          <motion.video
            src={raccprofile} // Replace with your second video source
            className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Additional video demo"
          >
            Your browser does not support the video tag.
          </motion.video>
        </div>
      </motion.section>
      {/* Design Challenges */}
      <motion.section
        className="py-12 px-6 md:px-16 bg-[#141414] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="design-challenges"
      >
        <div className="text-center">
          <h2
            className="text-5xl font-bold text-vibrant-yellow mb-6"
            id="design-challenges"
          >
            Design Challenges
          </h2>
          <p className="text-gray-300 text-lg font-sf mb-8">
            Tackling the unique obstacles of designing a raccoon-centric app that blends community, education, and engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge 1 */}
          <motion.div
            className="flex items-center bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mr-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full mb-2">
                1
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Real-Time Tracking</h3>
              <p className="text-gray-300 font-sf">
                Implementing a seamless system for tracking raccoons live while ensuring accuracy and user-friendliness.
              </p>
            </div>
          </motion.div>
          {/* Challenge 2 */}
          <motion.div
            className="flex items-center bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mr-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full mb-2">
                2
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Educational Content</h3>
              <p className="text-gray-300 font-sf">
                Designing engaging and accurate materials about raccoon behavior, safety, and habitat for all users.
              </p>
            </div>
          </motion.div>
          {/* Challenge 3 */}
          <motion.div
            className="flex items-center bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mr-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full mb-2">
                3
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Community Building</h3>
              <p className="text-gray-300 font-sf">
                Encouraging user participation and fostering a sense of belonging through raccoon sightings and stories.
              </p>
            </div>
          </motion.div>
          {/* Challenge 4 */}
          <motion.div
            className="flex items-center bg-[#141414] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mr-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full mb-2">
                4
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Balancing Functionality</h3>
              <p className="text-gray-300 font-sf">
                Ensuring that the app remains both feature-rich and intuitive to appeal to a diverse user base.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Design Process */}
      <motion.section
        className="py-12 px-6 md:px-16 bg-[#141414] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="design-process"
      >
        <h2
          className="text-5xl font-bold text-vibrant-yellow text-center mb-8"
          id="design-process"
        >
          Design Process
        </h2>

        {/* Research and Insights */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-300">
            Research and Insights
          </h3>
          <p className="text-gray-300 mt-4 font-sf leading-relaxed">
            To build a deep understanding of both our users and the problem at hand, we conducted <span className="brush-underline scroll-trigger font-sf"> surveys </span> and user interviews with <span className="brush-underline scroll-trigger font-sf">UCSD students.</span> We also analyzed the 
            <span className="text-vibrant-yellow font-semibold"> @ucsd.raccoons</span> Instagram account, identifying what worked well (the humor and charm of the content) and where the experience could be enhanced (real-time updates and education).
          </p>
          {/* <motion.img
            src="/path-to-research-image.jpg" // Replace with actual image path
            alt="Research and insights visualization"
            className="rounded-lg shadow-lg mt-6 w-full md:w-2/3 mx-auto hover:scale-105 transition-transform"
            loading="lazy"
          /> */}
        </motion.div>
        {/*Design and Aesthetics */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-300">
            Design and Aesthetics
          </h3>
          <p className="text-gray-300 mt-4 font-sf leading-relaxed">
            We used a nature-inspired color palette dominated by earthy tones—browns, greens, and tans—reflecting the raccoon’s natural environment. We also included hand-drawn logos for a playful, whimsical design that emphasized the charm and unpredictability of raccoons.
          </p>
          <motion.img
            src={raccpallette}// Replace with actual image path
            alt="Final design and aesthetics"
            className="rounded-lg shadow-lg mt-6 w-full md:w-2/3 mx-auto"
            loading="lazy"
          />
        </motion.div>
        {/* Wireframes and Prototypes */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        <h3 className="text-3xl font-bold text-gray-300">
          Wireframes and Prototypes
        </h3>
        <p className="text-gray-300 mt-4 font-sf leading-relaxed">
          The design process began with low-fidelity wireframes to map out the key features. We iterated on these based on user feedback, creating mid-fidelity prototypes and testing them with students to ensure the design was intuitive and engaging.
        </p>
        <motion.img
            src={raccwireframe} // Replace with actual image path
            alt="Wireframe photo"
            className="shadow-lg mt-6 w-full md:w-2/3 mx-auto"
            loading="lazy"
          />
        </motion.div>
      </motion.section>


     {/* Results & Impact */}
      <motion.section
        className="py-16 px-8 md:px-20 bg-[#141414] text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-labelledby="impact"
      >
        <h2 className="text-5xl font-extrabold text-vibrant-yellow text-center mb-6" id="impact">
          Results & Impact
        </h2>
        <div className="text-center">
          <p className="max-w-3xl mx-auto font-sf text-lg leading-relaxed">
            The RaccTracc app has sparked enthusiasm among UCSD students, creating a unique community for raccoon enthusiasts. Here's what we've achieved together:
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
          {/* Statistic 1 */}
          <div className="bg-[#1c1c1c] border border-vibrant-yellow rounded-lg p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="mt-2 font-sf">Daily Active Users</p>
          </div>
          {/* Statistic 2 */}
          <div className="bg-[#1c1c1c] border border-vibrant-yellow rounded-lg p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-white">50+ Sightings</h3>
            <p className="mt-2 font-sf">Reported in the First Month</p>
          </div>
          {/* Statistic 3 */}
          <div className="bg-[#1c1c1c] border border-vibrant-yellow rounded-lg p-6 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-white">Engagement</h3>
            <p className="mt-2 font-sf">Community Interaction Increased</p>
          </div>
        </div>
      </motion.section>
      {/* Call to Action */}
      <section className="text-center py-12 bg-[#141414]">
        <a
          href="https://github.com/Daphne-wu/ae-ractracc" // Updated URL
          className="px-6 py-3 text-lg font-bold text-black bg-vibrant-yellow rounded-lg shadow-md"
          aria-label="Explore RaccTracc"
        >
          Explore RaccTracc
        </a>
      </section>
    </div>
  );
};

export default ProjectRacc;
