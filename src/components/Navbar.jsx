import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const smoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-black sticky top-0 z-50 w-full ">
            <div className="flex items-center justify-between px-6 py-10">
                <div className="flex items-center gap-6 text-white">
                    <a href="/Danny_K_Ho_Resume Public.pdf" download="Danny_K_Ho_Resume Public.pdf" className="text-lg hover:underline">
                        Resume
                    </a>
                    <a href="https://www.linkedin.com/in/dannykho/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:scale-125 transform transition duration-300" size={30} color="white" />
                    </a>
                    <a href="https://github.com/DannyHo0127" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:scale-125 transform transition duration-300" size={30} color="white" />
                    </a>
                    <a href="mailto:dannyho0127@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail className="hover:scale-125 transform transition duration-300" size={30} color="white" />
                    </a>
                </div>

                <button onClick={toggleMenu} className="sm:hidden text-white text-3xl focus:outline-none">
                    {menuOpen ? '×' : '≡'}
                </button>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-6 text-white text-lg">
                    <a href="#hero" onClick={(e) => smoothScroll(e, "#hero")} className="hover:underline">Home</a>
                    <a href="#skills" onClick={(e) => smoothScroll(e, "#skills")} className="hover:underline">Skills</a>
                    <a href="#experience" onClick={(e) => smoothScroll(e, "#experience")} className="hover:underline">Experience</a>
                    <a href="#projects" onClick={(e) => smoothScroll(e, "#projects")} className="hover:underline">Projects</a>
                    <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} className="hover:underline">Contact</a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`sm:hidden fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 flex flex-col items-center justify-center transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                <button onClick={toggleMenu} className="absolute top-5 right-5 text-3xl text-white">
                    ×
                </button>
                <a href="#hero" onClick={(e) => { smoothScroll(e, "#hero"); toggleMenu(); }} className="py-3 text-white text-xl hover:underline">Home</a>
                <a href="#skills" onClick={(e) => { smoothScroll(e, "#skills"); toggleMenu(); }} className="py-3 text-white text-xl hover:underline">Skills</a>
                <a href="#experience" onClick={(e) => { smoothScroll(e, "#experience"); toggleMenu(); }} className="py-3 text-white text-xl hover:underline">Experience</a>
                <a href="#projects" onClick={(e) => { smoothScroll(e, "#projects"); toggleMenu(); }} className="py-3 text-white text-xl hover:underline">Projects</a>
                <a href="#contact" onClick={(e) => { smoothScroll(e, "#contact"); toggleMenu(); }} className="py-3 text-white text-xl hover:underline">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;