import React, { useState, useEffect } from "react";
import './styles/Hero.css';
import Loading from './Loading';

const Hero = ({ setShowNavbar }) => {
  const fullText = "hey there! i’m daphne.";
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false); // End loading
      setStartTyping(true); // Start typing animation
      setShowNavbar(true); // Show Navbar as soon as typing begins
    }, 1500); // Slightly earlier than full loading time

    return () => clearTimeout(timer);
  }, [setShowNavbar]);

  useEffect(() => {
    if (startTyping) {
      const interval = setInterval(() => {
        if (displayedText.length < fullText.length) {
          setDisplayedText((prev) => prev + fullText[displayedText.length]);
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    }
  }, [startTyping, displayedText]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="hero-section bg-[#141414] text-white">
      <div className="hero-container mx-auto max-w-4xl px-6">
        <h1 className="text-4xl sm:text-6xl font-bold font-sono text-center sm:text-left">
          {displayedText}
          <span className="typing-cursor"> </span>
        </h1>
        <p className="text-lg sm:text-xl font-mono text-center sm:text-left mt-4">
          I aspire to craft experiences that inspire and resonate at the crossroads of art, design, technology, and AI.
        </p>
        <div className="text-center sm:text-left">
        <button
          onClick={() => window.location.href = "/contact"} // Link to the contact page
          className="mt-12 px-8 py-4 border border-white text-white text-lg rounded-full hover:bg-[#3c3c3c] hover:border-transparent hover:text-white transition-colors duration-300"
        >
          → say hi
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// import React, { useState, useEffect } from "react";
// import './styles/Hero.css'; // Import the CSS for the cursor and animation
// import Loading from './Loading';

// const Hero = () => {
//   const fullText = ["hey there!", "i’m daphne."];
//   const [firstLineText, setFirstLineText] = useState(""); // Track the text for the first line
//   const [secondLineText, setSecondLineText] = useState(""); // Track the text for the second line
//   const [typingIndex, setTypingIndex] = useState(0); // Track which line is being typed
//   const [cursorVisible, setCursorVisible] = useState(true); // Toggle cursor visibility
//   const [loading, setLoading] = useState(true); // Loading state
//   const [startTyping, setStartTyping] = useState(false); // State to trigger typewriter effect

//   // Simulate a 2-second loading process
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // End loading
//       setStartTyping(true); // Start typing animation after loading
//     }, 2000); // 2-second delay

//     return () => clearTimeout(timer); // Clean up timer
//   }, []);

//   // Typing effect for the first line
//   useEffect(() => {
//     if (startTyping && typingIndex === 0) {
//       const interval = setInterval(() => {
//         if (firstLineText.length < fullText[0].length) {
//           setFirstLineText((prevText) => prevText + fullText[0][firstLineText.length]);
//         } else {
//           clearInterval(interval);
//           setTypingIndex(1); // Start typing the second line after the first finishes
//         }
//       }, 50); // typing speed

//       return () => clearInterval(interval); // Clean up interval
//     }
//   }, [firstLineText, typingIndex, startTyping]);

//   // Typing effect for the second line
//   useEffect(() => {
//     if (startTyping && typingIndex === 1) {
//       const interval = setInterval(() => {
//         if (secondLineText.length < fullText[1].length) {
//           setSecondLineText((prevText) => prevText + fullText[1][secondLineText.length]);
//         } else {
//           clearInterval(interval);
//         }
//       }, 50); // typing speed

//       return () => clearInterval(interval); // Clean up interval
//     }
//   }, [secondLineText, typingIndex, startTyping]);

//   // Show loading screen while loading is true
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="hero-section bg-black" style={{ color: "#FFFFF0" }}>
//       {/* Stacked Text with Typing Effect */}
//       <div className="absolute left-64 top-1/4 transform -translate-y-1/2 space-y-4 text-left">
//         <h1 className="text-6xl font-bold leading-none font-sono">
//           {firstLineText} {/* First line */}
//           {typingIndex === 0 && <span className="typing-cursor"></span>} {/* Cursor only visible on first line typing */}
//         </h1>
//         <h1 className="text-6xl font-bold leading-none font-sono">
//           {secondLineText} {/* Second line */}
//           {typingIndex === 1 && <span className="typing-cursor"></span>} {/* Cursor only visible on second line typing */}
//         </h1>
//       </div>

//       {/* Intro Text */}
//       <div className="absolute left-64 text-left max-w-lg mt-12">
//         <p className="text-lg sm:text-xl text-white font-mono font-bold">
//           I aspire to craft experiences that inspire and resonate at the crossroads of art, design, technology, and AI.
//         </p>
//         {/* Button */}
//         <button className="mt-12 px-6 py-2 border border-white text-white rounded-full hover:bg-balck hover:text-white transition">
//           → say hi
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import MyImage from "./assets/images/saillogo.png"; // Adjust the path based on where the image is located
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Downward arrow icon

// const Hero = () => {
//   const imageWidth = 700;
//   const [position, setPosition] = useState(-imageWidth); // Start off-screen to the left

//   useEffect(() => {
//     let animationFrameId;

//     // Function to animate the image across the screen
//     const animate = () => {
//       setPosition((prev) =>
//         prev >= window.innerWidth ? -imageWidth : prev + 2 // Reset to the left after leaving the screen
//       );
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     // Start animation
//     animate();

//     // Cleanup on component unmount
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   // Bobbing effect based on position
//   const bobPosition = Math.sin(position * 0.05) * 20; // Vertical bobbing

//   return (
//     <div className="hero text-[#090704] p-0 m-0 h-screen w-full text-center flex flex-col justify-center items-center bg-[#f7f7f7] overflow-hidden relative">
//       {/* Title */}
//       <h1 className="text-6xl font-bold text-[#090704] mt-12 mb-16 tracking-wide">
//         DAPHNE WU
//       </h1>

//       {/* Image moving across the screen */}
//       <img
//         src={MyImage}
//         alt="Sail Logo"
//         style={{
//           transform: translateX(${position}px) translateY(${bobPosition}px), // Move horizontally and vertically
//           position: "absolute", // Ensure it's positioned absolutely within the screen
//         }}
//         className="w-[700px] h-auto"
//       />

//       {/* Down arrow */}
//       <div className="down-arrow mt-64 style={{ position: 'absolute', bottom: '5px' }">
//         <FontAwesomeIcon icon={faChevronDown} size="3x" color="#090704" />
//       </div>
//     </div>
//   );
// };

// export default Hero;


//moving animation hero
// import React, { useEffect, useState } from "react";
// import MyImage from "./assets/images/saillogo.png"; // Your sailboat image
// import ArrowImage from "./assets/images/arrow.png"; // Arrow image for desktop
// import DragImage from "./assets/images/drag.png"; // Drag icon for mobile

// const Hero = () => {
//   const [position, setPosition] = useState({ x: 0, y: 300 });
//   const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
//   const [isMobile, setIsMobile] = useState(false); // Track if the device is mobile
//   const [isMoving, setIsMoving] = useState(false); // Track if the image is moving

//   // Check if the device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint based on your needs
//     };

//     // Check on load
//     checkMobile();

//     // Add resize listener to detect device switch
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile); // Cleanup on unmount
//   }, []);

//   // Handle keydown events for arrow keys (Desktop)
//   const handleKeyDown = (event) => {
//     const step = 10; // Distance moved per key press
//     let newPosition = { ...position };

//     switch (event.key) {
//       case "ArrowUp":
//         newPosition.y -= step;
//         break;
//       case "ArrowDown":
//         newPosition.y += step;
//         break;
//       case "ArrowLeft":
//         newPosition.x -= step;
//         break;
//       case "ArrowRight":
//         newPosition.x += step;
//         break;
//       default:
//         break;
//     }

//     setPosition(newPosition);
//     setIsMoving(true); // Mark as moving when key is pressed
//   };

//   // Handle touch events for mobile (swiping)
//   const handleTouchStart = (e) => {
//     const touchStartX = e.touches[0].clientX;
//     const touchStartY = e.touches[0].clientY;
//     setTouchStart({ x: touchStartX, y: touchStartY });
//   };

//   const handleTouchMove = (e) => {
//     if (!touchStart.x || !touchStart.y) return; // Ignore if no touch start position

//     const touchEndX = e.touches[0].clientX;
//     const touchEndY = e.touches[0].clientY;

//     const deltaX = touchEndX - touchStart.x;
//     const deltaY = touchEndY - touchStart.y;

//     let newPosition = { ...position };

//     // Move the boat based on the touch swipe distance
//     newPosition.x += deltaX / 10; // Divide by a factor to control the speed of movement
//     newPosition.y += deltaY / 10;

//     setPosition(newPosition);
//     setTouchStart({ x: touchEndX, y: touchEndY }); // Update touch start for next movement
//     setIsMoving(true); // Mark as moving when touch is moved
//   };

//   const handleTouchEnd = () => {
//     setTouchStart({ x: 0, y: 0 }); // Reset touch position when touch ends
//   };

//   // Attach and clean up keydown event listener
//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);

//     // Cleanup when component unmounts
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [position]); // Only re-run when position changes

//   // Attach and clean up touch event listeners for mobile
//   useEffect(() => {
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);
//     window.addEventListener("touchend", handleTouchEnd);

//     // Cleanup when component unmounts
//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [position, touchStart]);

//   return (
//     <div className="hero text-[#090704] p-0 m-0 h-screen w-full text-center flex flex-col justify-center items-center bg-[#f7f7f7] relative">
//       {/* Title */}
//       <h1 className="text-7xl font-bold text-[#090704] mt-12 mb-16 tracking-wide z-20">
//         DAPHNE WU
//       </h1>

//       {/* Instruction Message for Mobile */}
//       <p
//         className="instruction-message text-[#090704] font-medium text-lg z-20"
//         style={{
//           position: "absolute",
//           top: "50%", // Position it near the center of the screen
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           padding: "10px",
//           backgroundColor: "#f7f7f7",
//           borderRadius: "5px",
//           visibility: (isMobile && !isMoving) ? "visible" : "hidden", // Show only on mobile and if not moving
//         }}
//       >
//         Drag the sailboat to move it
//       </p>

//       {/* Instruction Message for Desktop */}
//       <p
//         className="instruction-message text-[#090704] font-medium text-lg z-20"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, 40%)",
//           padding: "10px",
//           backgroundColor: "#f7f7f7",
//           borderRadius: "5px",
//           visibility: (!isMobile && !isMoving) ? "visible" : "hidden", // Show only on desktop and if not moving
//         }}
//       >
//         Use the arrow keys to move the sailboat
//       </p>

//       {/* Sailboat Image */}
//       <img
//         src={MyImage}
//         alt="Sailboat"
//         style={{
//           position: "absolute",
//           left: ${position.x}px,
//           top: ${position.y}px,
//           width: "200px",
//           height: "auto",
//           zIndex: 10,
//         }}
//       />

//       {/* Arrow or Drag Image */}
//       <img
//         src={isMobile ? DragImage : ArrowImage} // Show drag icon for mobile, arrow for desktop
//         alt="Move icon"
//         style={{
//           position: "absolute",
//           left: ${position.x + 220}px, // Position next to the sailboat
//           top: ${position.y + 50}px, // Position vertically aligned with the sailboat
//           width: "50px", // Size of the move icon
//           height: "auto",
//           zIndex: 20,
//           visibility: isMoving ? "hidden" : "visible", // Hide when the image starts moving
//         }}
//       />

//       {/* Optional: Down Arrow */}
//       <div
//         className="down-arrow"
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           color: "#090704", // Customize the arrow color
//           fontSize: "2rem", // Adjust the size of the arrow
//         }}
//       >
//         ↓
//       </div>
//     </div>
//   );
// };

// export default Hero; 
