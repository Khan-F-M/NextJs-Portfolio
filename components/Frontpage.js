import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function useTypewriterHook() {
    const [text, count] = useTypewriter({
        words: ['A Full-Stack Developer'],
        loop: true,
        delaySpeed: 2000,
    });

    return text;
}


export default function Frontpage() {

    const text = useTypewriterHook();
    return (
        <>
            {/* <BackgroundCrcle /> */}
            <div className='w-full'>
                <div className='min-w-screen min-h-screen mx-auto px-10 pt-[200px] text-center 
                     justify-evenly'>
                    <div>
                        <p className='uppercase text-sm tracking-widest text-gray-400'>
                            Welcome to my web page
                        </p>
                        <h1 className='py-4 text-purple-400'>
                            Hi, I&apos;m <span className='text-[#5651e5]'>Faisal</span>
                        </h1>
                        <h1 className='py-4 text-white-500'>
                            {text}
                            <Cursor cursorColor="#FF0500" />
                        </h1>
                        <p className='py-4 text-white-600 max-w-[70%] m-auto'>
                            I was a Computer Programming student at Seneca College in my final semester.
                            I&apos;ve worked with many langauges in my time at Seneca such as C, C++, JS,
                            Python, and Linux. Along the way, I learned that I had a passion for creating
                            and designing web sites. However, due to my time focusing on college i never
                            got the time for many side projects.
                        </p>
                        <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                            <div className='flex items-center justify-center my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/mdfaisalkhn/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={35} />
                                    </a>
                                </div>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://github.com/Khan-F-M" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={35} />
                                    </a>
                                </div>
                                {/* <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/mdfaisalkhn/" target="_blank" rel="noopener noreferrer">

                                        <AiFillInstagram size={35} />
                                    </a>
                                </div>
                                <div className='rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/mdfaisalkhn/" target="_blank" rel="noopener noreferrer">

                                        <AiOutlineTwitter size={35} />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

