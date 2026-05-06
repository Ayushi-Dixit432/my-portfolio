import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Get In{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Touch
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* LEFT - FORM */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          ></textarea>

          <button className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </motion.form>

        {/* RIGHT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center gap-6"
        >
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <p className="text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              📧 <span>your@email.com</span>
            </p>
            <p className="flex items-center gap-3">
              📱 <span>+91 1234567890</span>
            </p>
            <p className="flex items-center gap-3">
              📍 <span>India</span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
              LinkedIn
            </button>
            <button className="px-4 py-2 border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
              GitHub
            </button>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;