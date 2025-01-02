import React from 'react'
import { FaReact } from "react-icons/fa";
import CPP from "../Images/CPP.png";
import C from "../Images/C.png";
import Python from "../Images/Python.jpeg";
import TabularEditor from "../Images/TabularEditor.png";
import PowerBi from "../Images/PowerBi.jpeg";
import { FaJava } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { PiFileCssDuotone } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


const Skills = () => {
    return (
        <div className="pb-24">
            <h1 className="my-12 text-center text-3xl font-bold text-gray-800">Technical Skills</h1>
            <div className="space-y-10">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <img src={Python} alt="Python Icon" className="w-16 h-16" />
                        <p className="mt-2 font-light">Python</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <FaJava className="text-6xl" color="black" />
                        <p className="mt-2 font-light">Java</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <img src={CPP} alt="C++ Icon" className="w-16 h-16" />
                        <p className="mt-2 font-light">C++</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <img src={C} alt="C Icon" className="w-16 h-16" />
                        <p className="mt-2 font-light">C</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <SiJavascript className="text-6xl" color="#f0db4f" />
                        <p className="mt-2 font-light" >JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <SiTypescript className="text-6xl" color="#007bcd" />
                        <p className="mt-2 font-light">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <PiFileSqlDuotone className="text-6xl" color="black" />
                        <p className="mt-2 font-light">SQL</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <FaReact className="text-6xl" color="cyan" />
                        <p className="mt-2 font-light">React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <PiFileHtmlDuotone className="text-6xl" color="#e44d26" />
                        <p className="mt-2 font-light">HTML</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <PiFileCssDuotone className="text-6xl" color="#2465f1" />
                        <p className="mt-2 font-light">CSS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <FaLinux className="text-6xl" color="black" />
                        <p className="mt-2 font-light">Linux</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <FaGithub className="text-6xl" color="black" />
                        <p className="mt-2 font-light">Git/Github</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <img src={TabularEditor} alt="Tabular Editor Icon" className="w-16 h-16" />
                        <p className="mt-2 font-light">Tabular Editor</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl p-4 hover:scale-150 transform transition duration-300 ease-in-out delay-75">
                        <img src={PowerBi} alt="Power BI Icon" className="w-16 h-16" />
                        <p className="mt-2 font-light">Power BI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;

