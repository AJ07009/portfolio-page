"use client"
import { useState, useTransition } from 'react';
import TabButton from './TabButton';
import Image from 'next/image';


const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content: (
            <ul>
                <li>* Node.js</li>
                <li>* SQL</li>
                <li>* Python</li>
                <li>* Java</li>
                <li>* JavaScript</li>
                <li>* Docker</li>
            </ul>
        )
    },
    {
        title:"Education",
        id: "education",
        content: (
            <ul>
                <li>* MICT SETA National Certificate
                    information Technology ( Systems
                    Development)</li>
                <li>* Certificate in Full-Stack
                    Development</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id: "experience",
        content: (
            <ul>
                <li>* Tech startup co-founder</li>
                <li>* Python and Game Design teacher</li>
            </ul>
        )
    }
]

export const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    
    return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 xl:ml-10' >
            {/* <img className='h-500 w-500 sm:w-[100] sm:h-[100]' src="/images/image_replacement.png"/> */}
            <Image
            src = "/images/image_replacement.png"
            alt = "computor image"
            className = "h-500 w-500 sm:w-[100] sm:h-[100]"
            width={500}
            height={500}
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className=' text-4xl font-bold text-white mb-4'>
                About me
                </h2>
                <p className='text-base lg:text-lg'>
                I have a knack for quick learning and am constantly
                seeking opportunities to broaden my expertise. I value collaboration and thrive in
                a team-oriented environment, where I look forward to working with others to craft
                exceptional applications.
                </p>
                <div className='justify-start flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")}
                                activate={tab === "skills"}>{" "}Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")}
                                activate={tab === "skills"}>{" "}Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")}
                                activate={tab === "skills"}>{" "}Experience{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
    )
}
