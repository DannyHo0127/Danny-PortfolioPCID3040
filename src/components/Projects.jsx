import React from 'react'
import { PROJECTS } from '../constants'
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"



const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h1
                className="my-12 text-center text-3xl font-bold text-gray-800"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((Project, index) => (
                    <div key={index} className="mb-10 flex flex-wrap items-start lg:justify-center">
                        <motion.div
                            className="w-full max-w-2xl lg:w-3/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 1, x: -100 }}
                            transition={{ duration: 1 }}
                        >
                            <h6 className="mb-2 text-lg font-semibold text-gray-700">{Project.title}</h6>
                            <p className="text-gray-600">{Project.description}</p>
                            {Project.technologies.map((skills, index) => (
                                <span key={index} className="mr-2 mt-4 py-1 font-medium text-sm">{skills}</span>
                            ))}
                            {Project.link && (
                                <a
                                    href={Project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center py-2 px-4 bg-gray-800 text-white rounded-md hover:scale-[1.2] transform transition duration-300 ease-in-out"
                                >
                                    <FaGithub />
                                </a>)}
                        </motion.div>
                        <motion.div
                            className="mt-4 w-full lg:mt-0 lg:w-1/4 lg:pl-6"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 1, x: 100 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="text-sm font-medium text-gray-500">{Project.year}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects