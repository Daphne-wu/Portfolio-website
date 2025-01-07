import React from "react";
import { Link } from "react-router-dom";
import './styles/Projects.css';
import racctracc from "./assets/images/racctracc.jpeg";

const Projects = () => {
  const projects = [
    { id: "racctracc", title: "RaccTracc", imageUrl: racctracc },
    { id: "successorator", title: "Successorator (incoming)", imageUrl: "/path/to/3dart.jpg" },
    { id: "GeoGuessr", title: "GeoGuessr (incoming)", imageUrl: "/path/to/3dart.jpg" },
  ];

  return (
    <div className="projects-section bg-[#141414] text-white py-16 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card relative overflow-hidden h-72 lg:h-96 flex items-center justify-center transition-all duration-300 group"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay with button */}
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
              <Link to={`/projects/${project.id}`}>
                <button className="px-6 py-2 text-white text-3xl hover:text-[#fffff0] transition-all duration-300 font-mono">
                  {project.title}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
