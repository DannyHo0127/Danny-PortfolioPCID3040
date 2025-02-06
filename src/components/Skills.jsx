import React from 'react'
import { FaReact, FaJava, FaGithub, FaLinux } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { PiFileSqlDuotone, PiFileHtmlDuotone, PiFileCssDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import CPP from "../Images/CPP.png";
import C from "../Images/C.png";
import Python from "../Images/Python.jpeg";
import TabularEditor from "../Images/TabularEditor.png";
import PowerBi from "../Images/PowerBI.jpeg";

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
});

const Skills = () => {
    return (
        <div id="skills" className="pb-24 pt-20">
            <motion.h1 {...fadeIn(0)} className="my-12 text-center text-3xl font-bold text-gray-800">Technical Skills</motion.h1>
            <div className="space-y-10">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div {...fadeIn(0)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <img src={Python} alt="Python Icon" className="w-16 h-16 " />
                            <p className="mt-2 font-light">Python</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.1)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <FaJava className="text-6xl" color="black" />
                            <p className="mt-2 font-light">Java</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.2)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <img src={CPP} alt="C++ Icon" className="w-16 h-16" />
                            <p className="mt-2 font-light">C++</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.3)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <img src={C} alt="C Icon" className="w-16 h-16" />
                            <p className="mt-2 font-light">C</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.4)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <SiJavascript className="text-6xl" color="#f0db4f" />
                            <p className="mt-2 font-light">JavaScript</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.5)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <SiTypescript className="text-6xl" color="#007bcd" />
                            <p className="mt-2 font-light">TypeScript</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.6)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <PiFileSqlDuotone className="text-6xl" color="black" />
                            <p className="mt-2 font-light">SQL</p>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div {...fadeIn(0.7)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <FaReact className="text-6xl" color="cyan" />
                            <p className="mt-2 font-light">React</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.8)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <PiFileHtmlDuotone className="text-6xl" color="#e44d26" />
                            <p className="mt-2 font-light">HTML</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(0.9)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <PiFileCssDuotone className="text-6xl" color="#2465f1" />
                            <p className="mt-2 font-light">CSS</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(1.0)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <FaLinux className="text-6xl" color="black" />
                            <p className="mt-2 font-light">Linux</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(1.1)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <FaGithub className="text-6xl" color="black" />
                            <p className="mt-2 font-light">Git/Github</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(1.2)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <img src={TabularEditor} alt="Tabular Editor Icon" className="w-16 h-16" />
                            <p className="mt-2 font-light">Tabular Editor</p>
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn(1.3)}>
                        <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out">
                            <img src={PowerBi} alt="Power BI Icon" className="w-16 h-16" />
                            <p className="mt-2 font-light">Power BI</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
