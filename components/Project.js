import React from 'react'
import ProjectItem from './ProjectItems.js'
import SamplePic from '@/public/projects/portfolio.png'
import BlogPost from '@/public/projects/blogpost.png'

export default function Project() {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 text-center 
            mt-8 justify-evenly'>
                <h3 className='uppercase tracking-[20px]
            text-gray-300 text-2xl'>Projects</h3>

                <h3 className='uppercase tracking-[3px] text-gray-500 text-sm mb-10 mt-3'>
                    What I've Built</h3>

                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>

                    <ProjectItem backgroundImage={BlogPost} lanUsed='Javascript + PostgreSQL' projectURl='/' title='BlogPost'/>
                    <ProjectItem backgroundImage={SamplePic} lanUsed='NextJs + TailwindCSS' projectURl='/' title='Portfolio'/>

                </div>
            </div>

        </div>
    )
}
