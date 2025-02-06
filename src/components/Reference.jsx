import React from 'react'
import { motion } from "framer-motion"
import { REFERENCES } from '../constants'

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
});

const Reference = () => {
    return (
        <div id="reference" className="px-4 lg:px-8 pt-20">
            <motion.h1
                className="my-12 text-center text-3xl font-bold text-gray-800"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                Professional References
            </motion.h1>
            <div>
                {REFERENCES.map((reference, index) => (
                    <div key={index} className="mb-10 flex flex-wrap items-start lg:justify-center items-center text-center">
                        <div>
                            <motion.h6 {...fadeIn(0)} className="mb-2 text-lg font-semibold text-gray-700">
                                {reference.person} - {reference.title}
                            </motion.h6>
                            <motion.p {...fadeIn(0)} className="text-gray-600">{reference.description}</motion.p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reference