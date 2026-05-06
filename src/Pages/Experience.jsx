import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Developer (Fresher)",
    company: "Self Projects",
    duration: "2024 - Present",
    desc: "Built full-stack web applications using MongoDB, Express, React, and Node.js. Focused on responsive UI, REST APIs, and performance optimization.",
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    duration: "2023 - 2024",
    desc: "Created multiple UI-based projects using HTML, CSS, JavaScript, and React with modern design principles.",
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"></div>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-12 flex ${i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
          >
            <div className="w-full md:w-1/2 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg">

              <h3 className="text-xl font-semibold text-purple-400">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {exp.company} • {exp.duration}
              </p>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {exp.desc}
              </p>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Experience;