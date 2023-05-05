import React from 'react'
import ProjectItem from './ProjectItems.js'
import { Project } from '../typings.js'
import { urlFor } from '@/sanity'

type Props = {
    projects: Project[];
}

export default function ProjectDisplay({ projects }: Props) {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 text-center 
            mt-8 justify-evenly'>
                <h3 className='uppercase tracking-[20px]
            text-gray-300 text-2xl'>Projects</h3>

                <h3 className='uppercase tracking-[3px] text-gray-500 text-sm mb-10 mt-3'>
<<<<<<< HEAD
                    What I&lsquo;ve Built</h3>
=======
                    What I've Built</h3>
>>>>>>> 1fc579dbeabce3397ed1d5f4ee554379976eea80

                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>

                    {projects.map((prj) => (
                        <ProjectItem
                            key={prj._id} // make sure to provide a unique key for each item in the list
                            backgroundImage={urlFor(prj.projImage).url()}
                            lanUsed={prj.languages}
                            projectURl={prj.moreInfo}
                            title={prj.name}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
