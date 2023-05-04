import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function frontpage() {

    const[text, count] = useTypewriter ({
        words: ["A Full-Stack Web Developer"],
        loop: true,
        delaySpeed: 200,
    });

    return (
        <>
            {/* <BackgroundCrcle /> */}
            <div className='w-full h-screen text-center'>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div>
                        <p className='uppercase text-sm tracking-widest text-gray-400'>
                        Welcome to my web page
                            </p>
                        <h1 className='py-4 text-purple-400'>
                            Hi, I'm <span className='text-[#5651e5]'>Faisal</span>
                        </h1>
                        <h1 className='py-4 text-white-500'>
                        {text}
                            <Cursor cursorColor="#FF0500"/>
                        </h1>
                        <p className='py-4 text-white-600 max-w-[70%] m-auto'>
                            I'm a Computer Programming student at Seneca College in my final semester.
                            I've worked with many langauges in my time at Seneca such as C, C++, JS,
                            Python, and Linux. Along the way, I learned that I had a passion for creating
                            and designing web sites. However, due to my time focusing on college i never
                            got the time for many side projects.
                        </p>
                        <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                            <div className='flex items-center justify-center my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedin size={35} />
                                </div>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub size={35} />
                                </div>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiFillInstagram size={35} />
                                </div>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineTwitter size={35} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

