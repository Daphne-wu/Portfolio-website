import React, { useState } from 'react';
import './styles/About.css';
import headshot from "../components/assets/images/about/daphneheadshot.png";
import portlandImage from "../components/assets/images/about/portland.jpg"; // Replace with your Portland image path
import dogImage from "../components/assets/images/about/dog.jpg"; // Replace with your dog image path
import ucsdLogo from "../components/assets/images/about/ucsd.jpg"; // Replace with UCSD logo path
import hiking from "../components/assets/images/about/hiking.jpeg"
import surf from "../components/assets/images/about/surf.jpeg"
import rafting from "../components/assets/images/about/rafting.JPG"
import tennis from "../components/assets/images/about/tennis.JPG"
import pottery from "../components/assets/images/about/pottery.png"

const About = () => {
  const [hover, setHover] = useState(false);

return (
  <div className="about-me-section bg-[#141414] text-white">
    <div className="about-me-container mx-auto max-w-5xl px-6 py-20">
      {/* About Me Header */}
      <div className="about-me-header flex flex-col items-center sm:flex-row sm:items-start">
        {/* Photo Section */}
        <div className="photo-container flex-shrink-0 mr-8 mb-8 sm:mb-0 mt-24">
        <a href="https://www.linkedin.com/in/daphne-wu-a44921168/" target="_blank" rel="noopener noreferrer">
          <img
            src={headshot}
            alt="Daphne"
            className="about-me-photo rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover"
          />
        </a>
      </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold font-sono mt-32">
            hi, i'm daphne.
          </h1>
          <p className="text-lg sm:text-xl mt-4 max-w-4xl mx-auto sm:mx-0 font-sf">
            I'm a passionate designer and developer creating beautiful, functional digital experiences. I believe in making digital products that don't just function, but inspire. Whether it's designing interfaces that feel intuitive or exploring AI to craft personalized experiences, my goal is to leave a lasting impact.
          </p>
        </div>
      </div>

      {/* About Me Body */}
      <div className="skills mt-8">
        <h2 className="text-2xl font-bold text-center sm:text-left font-sono">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
          {[
            {
              skill: 'UI/UX Design',
              description: 'Crafting intuitive and visually appealing interfaces.',
            },
            {
              skill: 'Fullstack Development',
              description: 'Building scalable, user-focused applications.',
            },
            {
              skill: 'AI Integration',
              description: 'Leveraging AI to enhance user experiences.',
            },
            {
              skill: 'Visual Design & Branding',
              description: 'Developing cohesive brand identities.',
            },
          ].map(({ skill, description }) => (
            <div
              key={skill}
              className="skill-card p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold font-sono">{skill}</h3>
              <p className="mt-2 text-lg font-sf">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Background Section */}
      <div className="background mt-16 text-center sm:text-left">
        <h2 className="text-2xl font-bold font-sono">Where I Came From</h2>
        <p className="text-lg sm:text-xl mt-4 max-w-6xl mx-auto sm:mx-0 font-sf">
          I grew up surrounded by art and technology, two passions that shaped who I am today. From experimenting with graphic design as a teenager to diving deep into full-stack development in college, my journey has been fueled by creativity and curiosity. 
        </p>
        {/* Interactive Image Gallery */}
        <div className="gallery mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[ 
            { src: portlandImage, alt: "Portland, Oregon", label: "Portland, Oregon ⚘" },
            { src: ucsdLogo, alt: "UCSD Logo", label: "UCSD ✐" },
            { src: dogImage, alt: "My Dog", label: "Mango ૮･ﻌ･ა" },
            { src: tennis, alt: "Tennis", label: "Tennis ☄ " },
            { src: hiking, alt: "Hiking", label: "Hiking ⛰" },
            { src: rafting, alt: "Rafting", label: "Rafting ༄°" },
            { src: surf, alt: "Surfing", label: "Surfing ࿐ ࿔*:･ﾟ" },
            { src: pottery, alt: "Pottery", label: "Pottery 𓏊" }
        ].map((item, index) => (
            <div key={index} className="image-container relative overflow-hidden rounded-lg">
            <img 
                src={item.src} 
                alt={item.alt} 
                className={`w-full h-[250px] transition-transform duration-300 transform hover:scale-105 ${item.alt === 'UCSD Logo' ? 'object-contain' : 'object-cover'}`}
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-70 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-sono">
                {item.label}
            </div>
            </div>
        ))}
        </div>
        </div>
      {/* Call to Action Button */}
      <div className="cta mt-12 text-center">
        <button
          onClick={() => window.location.href = "/contact"} // Link to the contact page
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`mt-12 px-8 py-4 border border-white text-white text-lg rounded-full transition-all duration-300 
            ${hover ? 'bg-[#4f9bcf] text-black' : 'bg-transparent'} 
            hover:bg-[#4f9bcf] hover:border-transparent hover:text-black`}
        >
          → let's work together
        </button>
      </div>
    </div>
  </div>
);

};

export default About;
