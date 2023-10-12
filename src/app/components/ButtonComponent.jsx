import React from 'react'
import CVpdf from '../../../public/images/CV.pdf'

const ButtonComponent = () => {
    return (
        <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-600  to-yellow-600 text-white">
                Hire me
            </button>
            <a
            href={CVpdf}
            download={Aidan_Josias_CV}>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r  from-purple-600  to-cyan-600 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download my CV</span>
            </button>
            </a>
        </div>
    )
}

export default ButtonComponent;