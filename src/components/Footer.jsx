import React from "react";

const Footer = () => (
  <footer className="bg-[#141414] text-white py-4 text-center">
    <p>&copy; 2024 Daphne Wu. All rights reserved.</p>
    <div className="mt-2">
      <a
        href="hhttps://www.linkedin.com/in/daphne-wu-a44921168/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 mx-2"
      >
        LinkedIn
      </a>
      |
      <a
        href="https://github.com/daphne-wu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 mx-2"
      >
        GitHub
      </a>
      |
      <a
        href="mailto:daphnewu.05@gmail.com"
        className="text-blue-400 hover:text-blue-500 mx-2"
      >
        Email Me
      </a>
    </div>
  </footer>
);

export default Footer;
 