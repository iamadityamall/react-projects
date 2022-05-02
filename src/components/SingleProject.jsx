import React from "react";

const SingleProject = ({data}) => {
  const {name, info} = data;
  console.log(name);
  return (
    <article className="flex">
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe"
        alt={name}
        className="w-24"
      />
      <div>
        <h4>{name}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default SingleProject;
