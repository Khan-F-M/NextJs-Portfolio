import React from 'react'
import Image from 'next/image'
import Myself from '../public/Myself.JPG'
import Sunset from '../public/Sunset.JPG'
import Skills from './Skills'
import FavQuotes from './FavQoutes'

export default function Aboutpage() {
    return (
        <>
            <div className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

                <h3 className='absolute top-24 uppercase tracking-[20px]
            text-gray-300 text-2xl'>About</h3>

                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                    a bit about myself</h3>

                <Image src={Myself} alt="/" className='mb-21 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'/>

                <div className='space-y-10 px-0 md:px-10'>
                    <h4 className='text-4xl font-semibold'> Here's a <span className='underline decoration-[#FFF157]/50'>little</span> background</h4>
                    <p className='text-base'>My full name is The Guy Faisal Khan. I currently study at Seneca Colleg. I was born in Zibawawe. My favourite food
                        is biryani. I have very few people I would consider friends. This paragraph is soley for the purpose of filling in the blanks.
                        In all brutal honesty my life is not the most interesting one. I'm supose to add some animation to
                        this component but that would require framer motion and I've already uninstalled it. The page isn't looking so good
                        no cap. Looks kinda ugly lowkey. Might have to switch back to the original tutorial because that dudes website
                        looked way cleaner. His is carried by animation. I also have some quotes that I like.
                    </p>
                </div>
            </div>

            <FavQuotes />
        </>


    )
}
