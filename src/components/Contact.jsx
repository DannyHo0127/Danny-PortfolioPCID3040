import React from 'react'
import { motion } from "framer-motion"


const Contact = () => {
    return (
        <div className="pb-20">
            <motion.h1
                className="my-12 text-center text-3xl font-bold text-gray-800"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                Get In Touch!
            </motion.h1>
            <div className="text-center tracking-tighter text-xl space-y-4 border-b my-4">
                <motion.a
                    href="mailto:dannyho0127@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 block"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    Dannyho0127@gmail.com
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/dannykho/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 block"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    LinkedIn
                </motion.a>
                <motion.a
                    href="https://github.com/DannyHo0127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 block"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 1, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    GitHub
                </motion.a>
            </div>
        </div>
    )
}

export default Contact