import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-4xl">

        {/* BIG HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Portfolio
          </span>
        </motion.h1>

        {/* SUB TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-8"
        >
          I am a MERN Stack Developer building modern, responsive and
          user-friendly web applications 🚀
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 border border-gray-500 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Me
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;