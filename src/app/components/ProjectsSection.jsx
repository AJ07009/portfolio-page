"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio ",
    description: "This website was created as a portfolio page and a way for me to learn NextJs and Tailwind CSS, there are also some Material UI.",
    image: "/images/projects/portfolio_page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AJ07009/portfolio-page",
    previewUrl: "/",
    language1:["NextJs"],
    language2: "Tailwind Css",
    language3: "Material UI",
    check_the_code: "https://github.com/AJ07009/portfolio-page",
  },
  {
    id: 2,
    title: "CartShare Website ",
    description: "CartShare is a price comparison and loyalty program packaged together with an OCR system and webscrappers.\n",
    image: "/images/projects/Cartshare_web_image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    language1:["NextJs"],
    language2: "Tailwind Css",
    language3: "Material UI",
    check_the_code: "",
  },
  {
    id: 3,
    title: "Webscrapper",
    description: "Learning to utilize the Scrapy framework for webscrapping and automation.\n",
    image: "/images/projects/Scrappy.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AJ07009/learning_webscrapping",
    previewUrl: "/",
    language1:"Scrapy",
    language2: "Python",
    language3: "MySQL",
    check_the_code: "https://github.com/AJ07009/learning_webscrapping",
  },
  {
    id: 4,
    title: "Flutter Quotes app",
    description: "A simple app that allows the user to upload quotes to a database. The entire app is bundled in a Docker image.",
    image: "/images/projects/Flutter_quote_project.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/AJ07009/Flutter_quotes_project",
    previewUrl: "/",
    language1:"Docker",
    language2: "Flutter Dart",
    language3: "MySQL",
    language4: "Java",
    check_the_code: "https://github.com/AJ07009/Flutter_quotes_project",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              language1={project.language1}
              language2={project.language2}
              language3={project.language3}
              language4={project.language4}
              check_the_code={project.check_the_code}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
