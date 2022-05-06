import React from "react";

const SingleProject = ({ data }) => {
  const { name, info } = data;
  console.log(name);
  return (
    <a
      href="https://www.google.com"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col"
    >
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe"
        alt={name}
        className="w-full object-cover"
      />
      <div className="flex flex-col p-2 bg-slate-300">
        <h4 className="font-bold">{name}</h4>
        <p className="pt-2">{info}</p>
      </div>
    </a>
  );
};

export default SingleProject;
