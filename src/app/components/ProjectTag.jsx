// components/ProjectTag.js

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-purple-500 to-yellow-500 border-transparent"
    : "text-[#ADB7BE] border-slate-600 hover: border-white"
    return (
    <button className= {`text-white border-primary-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles} `}
    onClick={() => onClick(name)}>
    {name}
    </button>
);
};

export default ProjectTag;
