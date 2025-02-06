import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const smoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
};


const Navbar = () => {
    return (
        <nav className="bg-black sm:bg-black mb-20 flex items-center justify-between py-3 sticky top-0 z-50">
            <div className="m-8 flex items-center justify-center gap-8 text-2xl">
                <a href="/Danny_K_Ho_Resume Public.pdf" download="Danny_K_Ho_Resume Public.pdf" className="text-white text-lg hover:underline">
                    Resume
                </a>
                <a href="https://www.linkedin.com/in/dannykho/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="hover:scale-150 transform transition duration-300 ease-in-out delay-75" size={30} color="white" /> </a>
                <a href="https://github.com/DannyHo0127" target="_blank" rel="noopener noreferrer"> <FaGithub className="hover:scale-150 transform transition duration-300 ease-in-out delay-75" size={30} color="white" /> </a>
                <a href="mailto:dannyho0127@gmail.com" target="_blank" rel="noopener noreferrer"> <MdEmail className="hover:scale-150 transform transition duration-300 ease-in-out delay-75" size={30} color="white" /> </a>
            </div>
            <div className="m-8 flex items-center gap-6 text-white text-lg">
                <a href="#hero" onClick={(e) => smoothScroll(e, "#hero")} className="hover:underline">Home</a>
                <a href="#skills" onClick={(e) => smoothScroll(e, "#skills")} className="hover:underline">Skills</a>
                <a href="#experience" onClick={(e) => smoothScroll(e, "#experience")} className="hover:underline">Experience</a>
                <a href="#projects" onClick={(e) => smoothScroll(e, "#projects")} className="hover:underline">Projects</a>
                <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} className="hover:underline">Contact</a>
            </div>
        </nav >
    )
}

export default Navbar