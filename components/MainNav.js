import React from 'react';
import Image from 'next/image';
import SamplePic from '../public/Myself.JPG';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'

export default function MainNav() {
    const [nav, setNavbar] = useState(false)
    const [shadow, setShadow] = useState(false)

    function handleNav() {
        setNavbar(!nav)
        // It'll toggle it back and forth
    }

    useEffect(() => {
        function handleShadow() {
            if (window.scrollY >= 90) (
                setShadow(true)
            )
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, []);
    // We use this function to handle the opening and closing of the sidebar.
    /* 
    The way we do this is by using the useState component of react to create a nav
    state that is false by default. It will be set to true when the user clicks on the menu.
    See Line: 55 for use of nav state
    */

    return (
        // Fixed means it'll be fixed to the top
        // Z-[100] means we want it to always be on top
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-black" : "fixed w-full h-20 z-[100] bg-black"}>
            <div className="flex justify-end lg:justify-center md:justify-center items-center w-full h-full px-2 2xl:px-16">
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b ">Home</li>
                            {/* <button className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Home
                            </button> */}
                        </Link>
                        <Link href="/about">
                            <li className="ml-10 text-sm  uppercase hover:border-b ">About</li>

                            {/* <button className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                About
                            </button> */}
                        </Link>
                        <Link href="/skills">
                            <li className="ml-10 text-sm  uppercase hover:border-b ">Skills</li>
                            {/* <button className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Skills
                            </button> */}
                        </Link>
                        <Link href='/projects'>
                            <li className="ml-10 text-sm  uppercase hover:border-b ">Projects</li>
                            {/* <button class="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Projects
                            </button> */}
                        </Link>
                        {/* <Link href="/contact">
                            <li className="ml-10 text-sm  uppercase hover:border-b ">Contact</li>
                            <button class="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Contact
                            </button>
                        </Link> */}
                        {/* <Link href="/todo">
                            <li className="ml-10 text-sm  uppercase hover:border-b ">TO DO</li>
                            <button class="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Contact
                            </button>
                        </Link> */}
                    </ul>
                </div>

                {/* For Icons we'll be using react-icons.*/}

                <div className="md:hidden" onClick={handleNav}>
                    <RiMenu3Fill size={25} color='white' />
                </div>
            </div>

            {/* This will be the overlay in the background when we open
            up the menu/navbar expansion */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
                    {/* -100% means if nav is not in state true, meaniing opened, it will
                   go away an stay in the left at -100% */}
                    <div>
                        <div className='flex w-full items-center justify-end'>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer'>
                                <AiOutlineClose color='black' />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            {/* <p className='w-[85%] md:w-[90%] py-4 text-black'>Hello,</p> */}
                        </div>
                    </div>
                    <div>
                        <ul className='py-4 flex flex-col'>
                            <Link href='/'>
                                <li onClick={() => setNavbar(false)} className='py-4 text-lg text-black'>Home</li>
                            </Link>
                            <Link href='/about'>
                                <li onClick={() => setNavbar(false)} className='py-4 text-lg text-black'>About</li>
                            </Link>
                            <Link href='/skills'>
                                <li onClick={() => setNavbar(false)} className='py-4 text-lg text-black'>Skills</li>
                            </Link>
                            <Link href='/projects'>
                                <li onClick={() => setNavbar(false)} className='py-4 text-lg text-black'>Projects</li>
                            </Link>
                            <Link href='/contact'>
                                <li onClick={() => setNavbar(false)} className='py-4 text-lg text-black'>Contact</li>
                            </Link>
                        </ul>

                        <div className='pt-4'>
                            <p className='uppercase tracking-widest text-black'>Let&apos;s connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full text-black shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedin size={35} />
                                </div>
                                <div className='rounded-full text-black shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub size={35} />
                                </div>
                                <div className='rounded-full text-black shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiFillInstagram size={35} />
                                </div>
                                <div className='rounded-full text-black shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineTwitter size={35} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
