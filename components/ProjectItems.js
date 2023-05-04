import React from 'react'
import SamplePic from '../public/projects/portfolio.png'
import Image from 'next/image'
import Link from 'next/link'


export default function ProjectItems({ title, backgroundImage, projectURl, lanUsed }) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl px-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#789dff]'>
            <img className='rounded-xl group-hover:opacity-10' src={backgroundImage} alt='/' width={1000} height={1000} />
            {/* as long as I use img instead of Image Component
            from Nextjs it will work perfectly */}
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{lanUsed}</p>
                <Link href={projectURl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg'>More Info</p>
                </Link>
            </div>

        </div>
    )
}
