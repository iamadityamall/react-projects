import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <section className="h-[70vh] bg-[#F5F5F5] flex flex-col justify-center items-center px-10 font-mono lg:flex-row lg:space-x-5">
        <div className="space-y-10 lg:w-[50vw] lg:p-3">
          <h1 className="text-4xl xl:text-6xl">React Projects</h1>
          <p className="text-xl leading-relaxed">
            Projects are the most practical way to learn any language, and{" "}
            <span className="italic font-bold ">React</span> is no exception.
            Solidify your knowledge of React by creating these cool projects.
          </p>
          {/* <button className="p-4 border-2 border-black">
            Join the course{" "}
          </button> */}
        </div>
        <div className="hidden xl:flex xl:w-[25vw]">
          <img
            src="https://www.kindpng.com/picc/m/370-3704903_programmer-illustration-hd-png-download.png"
            alt="web-dev"
            className="h-full w-full"
          />
        </div>
      </section>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
