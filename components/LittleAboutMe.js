import React from 'react'
import { motion } from "framer-motion"
import Card from 'react-bootstrap/Card';

export default function LittleAboutMe() {
    return (
        <>
            <h1>A little Bit About Me</h1>
            <p className='text-base md:text-base lg:text-xl'>
                {/* Used tailwind for the responsive text size */}
                I'm a Seneca College student. I am currently studying in
                the Computer Programming(CPP) program as Seneca. My passion
                is coding, specifically Web Development. Although I have more
                experience and projects working with C++, I've always been
                wanting to switch towards the Web side of programming.
            </p>
            <h3>Experience</h3>
            <p className='text-base md:text-base lg:text-xl'>Unfortunetly, as of right now, I don't have any intership
                or job experience with Web Development. However, I have
                been studying this pathway for over a year now, and feel
                confident that I would be a great addition to any team requiring
                a web developer.
            </p>
        </>
    )
}
