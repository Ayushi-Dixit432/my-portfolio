import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-white/10 shadow-lg">

      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => navigate(item.path)}
              className="relative cursor-pointer group"
            >
              {item.name}
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 text-gray-300"
          >
            {menuItems.map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className="text-lg cursor-pointer hover:text-white transition"
              >
                {item.name}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;