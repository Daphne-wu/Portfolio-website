import React from "react";
import resume from "../components/assets/Daphne_Wu_Resume1.pdf";

const Resume = () => (
  <div className="projects bg-[#141414] p-10">
    <h2 className="text-2xl mb-4">My Resume</h2>
    
    {/* Embed the PDF */}
    <embed 
      src={resume}  // Path to your PDF in the public folder
      width="100%" 
      height="800px" 
      type="application/pdf"
    />
  </div>
);

export default Resume;