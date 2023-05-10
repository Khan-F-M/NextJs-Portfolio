import React from 'react'
import Image from 'next/image'
import Skills from './Skills'
import FavQuotes from './FavQoutes'
import { About } from '@/typings'
import { urlFor } from '@/sanity'
import Footer from './Footer'

type Props = {
    abouts: About;
}

// Why hasn't nextjs deployed this automatically
export default function Aboutpage({ abouts }: Props) {

    return (

        <div className='w-full'>
            <div className='max-w-[1240px] min-h-screen mx-auto px-10 p-[200px] text-center 
                     justify-evenly'>

                <h3 className='top-24 uppercase tracking-[20px]
                  text-gray-300 text-2xl '>ABOUT</h3>

                <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm mt-3'>
                    A litte bit about myself</h3>

                <div className='flex flex-col relative text-center md:text-left
                    md:flex-row max-w-7xl px-10 mx-auto items-center'>

                    <img src={urlFor(abouts.profilePic).url()} alt="/"
                        className='m-10 w-56 h-56 rounded-full object-cover md:rounded-lg
                            md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' />

                    <div className='space-y-10 px-0 md:px-10'>
                        {/* <h4 className='text-4xl font-semibold'> Here&lsquo;s a <span className='underline decoration-[#FFF157]/50'>little</span> background</h4> */}
                        <h4 className='text-4xl font-semibold'>{abouts.name}</h4>
                        <p className='text-base text-center'>{abouts.description}</p>
                    </div>
                </div>
                <FavQuotes />
            </div>
        </div>


    )
}