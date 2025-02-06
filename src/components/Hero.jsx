import React from 'react'
import { HERO_CONTENT } from '../constants'
import Picture from "../Images/DannyHo.jpeg"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div id="hero" className="border-none pb-10 lg:pb-20 lg:mb-36 px-6 lg:px-16 pt-[100px]">
            <div className="flex flex-wrap lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h1
                            className="font-bold pb-8 tracking-tight lg:mt-16 text-5xl lg:text-7xl"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            Danny Ho
                        </motion.h1>
                        <motion.h2
                            className="mt-6 text-gray-800 font-semibold text-2xl lg:text-4xl"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Clemson University Computer B.S. Student
                        </motion.h2>
                        <motion.p
                            className="mt-6 max-w-lg font-light text-gray-600 leading-relaxed"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={Picture} alt="Danny Ho Pic"
                        className="rounded-full w-100 object-cover shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Hero;