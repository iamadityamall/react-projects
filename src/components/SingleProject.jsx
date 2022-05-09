import React from "react";

const SingleProject = ({ data }) => {
  const { name, info, link, image } = data;
  console.log(name);
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col"
    >
      <img
        src={image}
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
