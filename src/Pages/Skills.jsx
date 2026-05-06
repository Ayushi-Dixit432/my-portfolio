import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "React", level: 75, icon: "⚛️" },
  { name: "Node.js", level: 70, icon: "🟢" },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span>{skill.icon}</span> {skill.name}
              </h3>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra Section */}
      <div className="text-center mt-16 text-gray-400 max-w-2xl mx-auto">
        I continuously learn and improve my skills to stay updated with modern
        technologies and build high-quality web applications.
      </div>

    </section>
  );
};

export default Skills;