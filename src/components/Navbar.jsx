import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
    return (<nav className="bg-black mb-20 flex items-center justify-between py-5">
        <div className="flex items-center justify-Center"></div>
        <div className="m-8 flex items-center justify-Center gap-8 text-2xl">
            <a href="/Danny_K_Ho_Resume Public.pdf" download="Danny_K_Ho_Resume Public.pdf" className="text-white text-lg hover:underline">
                Resume
            </a>
            <a href="https://www.linkedin.com/in/dannykho/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} color="white" /> </a>
            <a href="https://github.com/DannyHo0127" target="_blank" rel="noopener noreferrer"> <FaGithub size={30} color="white" /> </a>
            <a href="mailto:dannyho0127@gmail.com" target="_blank" rel="noopener noreferrer"> <MdEmail size={30} color="white" /> </a>
        </div>
    </nav >
    )
}

export default Navbar