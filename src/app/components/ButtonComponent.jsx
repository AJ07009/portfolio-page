import React from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const ButtonComponent = () => {
    return (
        <div className='socials flex flex-row gap-2'>
            <button className="px-7 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-600  to-yellow-600 text-white">
                Hire me
            </button>
            <button className="m-2 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r  from-purple-600  to-cyan-600 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-4">
                Download my CV</span>
            </button>
            <Link href="https://github.com/AJ07009" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4">
                <Image className= "block" src = {GithubIcon} alt="Github Icon"/>
            </Link>
            <Link href="https://www.linkedin.com/in/aidan-josias-680485191/" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4">
                <Image className= "block" src = {LinkedinIcon} alt="LinkedIn Icon"/>
            </Link>
        </div>
    )
}

export default ButtonComponent;