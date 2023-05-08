import React from 'react'
import Image from 'next/image'
import Skills from './Skills'
import FavQuotes from './FavQoutes'
import { About } from '@/typings'
import { urlFor } from '@/sanity'


type Props = {
    abouts: About;
}


export default function Aboutpage({ abouts }: Props) {

    return (
        <>
            <div key={abouts._id} className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mb-10 sm:mb-5'>

                <h3 className='absolute top-24 uppercase tracking-[20px]
            text-gray-300 text-2xl'>About</h3>

                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                    a bit about myself</h3>


                <img src={urlFor(abouts.profilePic).url()} alt="/" className='mb-21 md:mb-0 lg:mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' />

                <div className='space-y-10 px-0 md:px-10'>
                    {/* <h4 className='text-4xl font-semibold'> Here&lsquo;s a <span className='underline decoration-[#FFF157]/50'>little</span> background</h4> */}
                    <h4 className='text-4xl font-semibold'>{abouts.name}</h4>
                    <p className='text-base'>{abouts.description}</p>
                </div>
            </div>

            <FavQuotes />
        </>


    )
}
