import React from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import TestImage from '@/public/about/Vectors 1.jpg'

export default function Contact() {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full text-center 
            mt-8 justify-evenly'>

                <h3 className='top-24 uppercase tracking-[20px]
            text-gray-300 text-2xl'>Contact</h3>

                <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-10 mt-3'>
                    Lets work together</h3>

                <div className='items-center justify-center'>
                    {/* LEFT  */}
                    {/* <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-xl ease-in duration-300' src={TestImage} alt="/"/>
                            </div>
                            <div>
                                <h2 className='py-2 text-3xl'>Faisal Khan</h2>
                                <p className='py-4'>Hey, I am a Front-End Developer. I'd love to work on some projects so feel free to contact me</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='shadow-gray-400 rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedin size={35} />
                                    </div>
                                    <div className='shadow-gray-400 rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub size={35} />
                                    </div>
                                    <div className='shadow-gray-400 rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiFillInstagram size={35} />
                                    </div>
                                    <div className='shadow-gray-400 rounded-full text-white shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineTwitter size={35} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* RIGHT */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form className='text-black'>
                                <div className='grid grid-cols-2 gap-4 w-full py-4'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-white'>Name</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-white'>Number</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Email</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-white'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                                </div>
                                <button className='w-full p-4 rounded-xl text-gray-100 bg-blue-400'>Send Message</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
