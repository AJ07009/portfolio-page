import { IconHeart } from '@tabler/icons-react';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import ProjectTag from '../components/ProjectTag';

const projectsData = [
{
    id: 1,
    title: "NextJs Portfolio ",
    description: "This website was created as a portfolio page and a way for me to learn NextJs and Tailwind CSS, there are also some Material UI.",
    image: "/images/projects/portfolio_page.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AJ07009/portfolio-page",
    previewUrl: "/",
    language1:["NextJs"],
    language2: "Tailwind Css",
    language3: "Material UI",
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
},
{
    id: 3,
    title: "Webscrapper",
    description: "Learning to utilize the Scrapy framework for webscrapping and automation.\n",
    image: "/images/projects/Scrapy.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    language1:"Scrapy",
    language2: "Python",
    language3: "MySQL",
},
{
    id: 4,
    title: "Quotes app",
    description: "A simple app that allows the user to upload quotes to a database. The entire app is bundled in a Docker image.",
    image: "/images/projects/Scrapy.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    language1:"Docker",
    language2: "Flutter Dart",
    language3: "MySQL",
    language4: "Java",
},

  // Add more project data as needed
];

function Home() {
return (
    <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag name="All" />
        <ProjectTag name="Web" />
        <ProjectTag name="Mobile" />
    </div>
    <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
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
        />
        ))}
    </ul>
    <div className="flex items-center">
        
    </div>
    </section>
);
}

export default Home;
