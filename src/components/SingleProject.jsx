import React from "react";


const SingleProject = ({ data }) => {
  const { name, info, link, image } = data;
  console.log(name);
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col w-96 rounded-lg"
    >
      <img
        src={image}
        alt={name}
        className="w-full object-cover h-32"
      />
      <div className="flex flex-col p-4 bg-slate-300 h-full">
        <h4 className="font-bold">{name}</h4>
        <p className="pt-2 h-full">{info}</p>
      </div>
    </a>
  );
};

export default SingleProject;
