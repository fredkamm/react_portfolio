import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <a className="text-base" href={item.href} target="_blank" rel="noopener noreferrer">
          <img className="rounded-2xl" src={item.image} alt="" />
        </a>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">{item.description}</p>
    </div>
  );
};

export default Project;
