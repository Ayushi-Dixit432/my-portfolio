import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.jpeg";



const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20 flex items-center">

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ayushi Dixit
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl text-gray-300 mb-6">
            MERN Stack Developer 🚀
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a passionate developer with a BSc background, specializing in building
            modern, scalable, and user-friendly web applications using MongoDB, Express,
            React, and Node.js. I love creating clean UI and solving real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition">
              Hire Me
            </button>

            <button className="px-6 py-3 border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
              Download CV
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 text-center">
            <div>
              <h4 className="text-2xl font-bold text-purple-400">10+</h4>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-purple-400">1+</h4>
              <p className="text-gray-400 text-sm">Years Exp</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-purple-400">100%</h4>
              <p className="text-gray-400 text-sm">Dedication</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (IMAGE CARD) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >

          {/* Glow Background */}
          <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full -z-10"></div>

          {/* Gradient Border Card */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">

            <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl">

              {/* Profile Image */}
              <motion.img
                src={image}
                alt="profile"
                whileHover={{ scale: 1.08 }}
                className="w-44 h-44 mx-auto rounded-full mb-5 border-4 border-purple-500 shadow-lg object-top"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold">
                Ayushi Dixit
              </h3>

              {/* Role */}
              <p className="text-gray-400 mb-4">
                Full Stack Developer
              </p>

              {/* Social Buttons */}
              <div className="flex justify-center gap-3 mt-4">
                <button className="px-4 py-2 text-sm border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
                  LinkedIn
                </button>
                <button className="px-4 py-2 text-sm border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
                  GitHub
                </button>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;