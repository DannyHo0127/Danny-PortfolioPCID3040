import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div id="experience" className="px-4 lg:px-8 pt-20">
            <motion.h1
                className="my-12 text-center text-3xl font-bold text-gray-800"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                Professional Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-10 flex flex-wrap items-start lg:justify-center">
                        <motion.div
                            className="w-full max-w-2xl lg:w-3/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 1, x: -100 }}
                            transition={{ duration: 1 }}
                        >
                            <h6 className="mb-2 text-lg font-semibold text-gray-700">
                                {experience.role} - <span className="text-gray-500">{experience.company}</span>
                            </h6>
                            <p className="text-gray-600">{experience.description}</p>
                            {experience.skills.map((skills, index) => (
                                <span key={index} className="mr-2 mt-4 py-1 font-medium text-sm">{skills}</span>
                            ))}
                        </motion.div>
                        <motion.div
                            className="mt-4 w-full lg:mt-0 lg:w-1/4 lg:pl-6"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 1, x: 100 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="text-sm font-medium text-gray-500">{experience.year}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience