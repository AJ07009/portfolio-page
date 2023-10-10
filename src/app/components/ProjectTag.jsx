// components/ProjectTag.js

import React from "react";

const ProjectTag = ({ name }) => {
return (
    <button className="text-white border-primary-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer">
    {name}
    </button>
);
};

export default ProjectTag;
