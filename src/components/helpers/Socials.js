import React from "react";

// import icons
import { social } from "../../data";
import resumePDF from "../../assets/files/resume.pdf";
import { BsFiletypePdf } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex space-x-6 ">
      <ul className="flex space-x-6 ">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center text-accent"
              key={index}
            >
              <a className="text-base hover:text-accent-light hover:scale-110 transition-all duration-300" href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <a
        className="text-base text-accent hover:text-accent-light hover:scale-110 transition-all duration-300"
        href={resumePDF}
        download="resume.pdf"
      >
        <BsFiletypePdf />
      </a>
    </div>
  );
};

export default Socials;
