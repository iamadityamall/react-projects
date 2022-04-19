import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center font-mono space-x-10 bg-[#F5F5F5]">
      <NavLink
        to="projects"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "rgba(0,0,0,0.4)" : "",
          };
        }}
        className="p-4 text-xl border-2 border-black"
      >
        Projects
      </NavLink>
      <NavLink
        to="concepts"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "rgba(0,0,0,0.4)" : "",
          };
        }}
        className="p-4 text-xl border-2 border-black"
      >
        Concepts
      </NavLink>
    </nav>
  );
};

export default Navbar;
