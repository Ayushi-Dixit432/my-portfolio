import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    name: "Portfolio Website",
    desc: "Modern React + Tailwind portfolio with animations",
    tech: ["React", "Tailwind"],
    img: "https://via.placeholder.com/400x250",
  },
  {
    name: "Todo App",
    desc: "Task manager with local storage & clean UI",
    tech: ["JavaScript", "CSS"],
    img: "https://via.placeholder.com/400x250",
  },
  {
    name: "LMS Website",
    desc: "Learning Management System with dashboard",
    tech: ["MERN", "Auth"],
    img: "https://via.placeholder.com/400x250",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectData.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-4">
              <button className="px-5 py-2 bg-purple-500 rounded-full hover:bg-purple-600">
                Live Demo
              </button>
              <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black">
                Source Code
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {p.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

              {/* Tech Tags */}
              <div className="flex gap-2 flex-wrap">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;