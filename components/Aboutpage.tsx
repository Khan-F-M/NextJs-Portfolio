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
        <div className='max-w-[1240px] mx-auto px-2 py-16 text-center 
        mt-8 mb-20 justify-evenly'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 items-center text-center mt-8 justify-evenly'>


                <div key={abouts._id} className='flex flex-col relative h-screen text-center md:text-center
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-40 mb-60 md:mt-0 md:mb-0'>

                    <h3 className='sm:absolute md:absolute lg:absolute xl:absolute top-24 uppercase tracking-[20px]
            text-gray-300 text-2xl'>About</h3>

                    <h3 className='sm:absolute md:absolute lg:absolute xl:absolute top-36 uppercase tracking-[3px] 
                text-gray-500 text-sm mb-10'>a bit about myself</h3>

                    <img src={urlFor(abouts.profilePic).url()} alt="/" className='mb-9 mt-7 md:mb-0 lg:mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' />

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