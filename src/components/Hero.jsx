import React from 'react'
import { HERO_CONTENT } from '../constants'
import Picture from "../Images/DannyHo.jpeg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
    return (
        <div className="border-none pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            className="font-bold pb-16 tracking-tight lg:mt-16 text-6xl lg:text-8xl ml-16"
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                        >
                            Danny Ho
                        </motion.h1>
                        <motion.h2
                            className="my-12 text-center font-bold text-gray-800 text-4xl pb-16 ml-4 tracking-tight lg:mt-0"
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            Clemson University Computer B.S. Student
                        </motion.h2>
                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter ml-6"
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={Picture} alt="Danny Ho Pic"
                        className="rounded-full w-100 object-cover shadow-lg" />
                </div>
            </div>
        </div >
    )
}

export default Hero