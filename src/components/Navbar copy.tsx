import React from "react";
import logo from "../assets/GiHub.png";
import logo_black from "../assets/logo-black.png"
import { IoMdSunny, IoMdMoon } from "react-icons/io";
interface NavbarProps {
  darkMode: boolean;
  switchTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, switchTheme }) => {
  return (
    <div className="flex justify-between items-center py-3 px-5 md:px-15 dark:bg-[#040404] dark:text-white transition-all duration-400">
      {darkMode ? <img src={logo_black} className="h-10" alt="" /> : <img src={logo} className="h-10" alt="" />} 
      <div className="hidden md:flex">
        <ul className="flex gap-6 font-semibold">
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
            About
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
            Computational Biology
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
            Event
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-all duration-300">
            Blog
          </li>
        </ul>
      </div>
      <div className="flex gap-8">
        <button className="hidden md:flex bg-orange-500 text-white px-4 py-1 rounded-4xl">
          Contact Us
        </button>
        <button
          onClick={switchTheme}
          className="text-2xl text-orange-500 cursor-pointer transition duration-300"
        >
          {darkMode ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
