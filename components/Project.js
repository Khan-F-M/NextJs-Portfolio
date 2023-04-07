import React from 'react'
import ProjectItem from './ProjectItems.js'
import SamplePic from '@/public/projects/portfolio.png'

export default function Project() {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
               
                    <ProjectItem titel='NextJs Project' backgroundImage={SamplePic} projectURl='/'/>
                    <ProjectItem titel='NextJs Project' backgroundImage={SamplePic} projectURl='/'/>
                    <ProjectItem titel='NextJs Project' backgroundImage={SamplePic} projectURl='/'/>
                    <ProjectItem titel='NextJs Project' backgroundImage={SamplePic} projectURl='/'/>

                </div>
            </div>

        </div>
    )
}
