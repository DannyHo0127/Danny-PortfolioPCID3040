import React from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

const Contact = () => {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_e1c0ur3', 'template_yu25uzj', form.current, {
                publicKey: 'kkGqK_6cjsOwK-Pde',
            })
            .then(
                () => {
                    setSuccess(true)
                    form.current.reset()
                },
                (error) => {
                    setError(true)
                },
            );
    };

    const fadeIn = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
    });

    return (
        <div className="pb-32 h-full max-w-[1440px] mx-auto flex items-center gap-[30px]">
            <div className="text-center text-2xl space-y-6 my-6 flex-1 flex flex-col gap-4">
                <motion.h1
                    className="text-center text-[40px] font-bold text-gray-800"
                    {...fadeIn(0)}
                >
                    Get In Touch!
                </motion.h1>
                <motion.a
                    href="mailto:dannyho0127@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 block"
                    {...fadeIn(0.3)}
                >
                    Dannyho0127@gmail.com
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/dannykho/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 block"
                    {...fadeIn(0.7)}
                >
                    LinkedIn
                </motion.a>
                <motion.a
                    href="https://github.com/DannyHo0127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 block"
                    {...fadeIn(1)}
                >
                    GitHub
                </motion.a>
            </div>
            <div className="flex-1 mr-20 mt-10">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-3"
                >
                    <motion.input
                        className="p-3 text-sm bg-transparent border border-black rounded-sm text-black"
                        type="text"
                        required
                        placeholder="Name"
                        name="name"
                        {...fadeIn(1)}
                    />
                    <motion.input
                        className="p-3 text-sm bg-transparent border border-black rounded-sm text-black"
                        type="email"
                        required
                        placeholder="Email"
                        name="email"
                        {...fadeIn(1)}
                    />
                    <motion.textarea
                        className="p-3 text-sm bg-transparent border border-black rounded-sm text-black"
                        rows={6}
                        required
                        placeholder="Message"
                        name="message"
                        {...fadeIn(1)}
                    />
                    <motion.button
                        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        {...fadeIn(1)}
                    >
                        Submit
                    </motion.button>
                    {error ? "Error" : success ? "Success!" : null}
                </form>
            </div>
        </div>
    )
}

export default Contact