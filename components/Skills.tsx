import React from 'react'
import Image from 'next/image'
import SimpleSkill from './SimpleSkill'
import { urlFor } from '@/sanity'
import { Skill } from '@/typings'

type Props = {
    skills: Skill[];
}

export default function Skills({ skills }: Props) {
    return (
        // USE ARRAY.MAP FOR THIS. IT IS MORE THE REACT WAY. LOOP THROUGH EACH IMAGE.
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 text-center 
            mt-8 justify-evenly'>

                <h3 className='top-24 uppercase tracking-[20px]
    text-gray-300 text-2xl '>Skills</h3>

                <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-10 mt-3'>
                    Technologies I have worked with</h3>

                {/* THE TOP WAS THE REASON FOR THE OVERLAPPING COMPONENTS */}
                <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8'>


                    {skills.map((skl) => (
                        <SimpleSkill key={skl._id} ImageURL={urlFor(skl.skillImage).url()} Lang={skl.name} />
                    ))}
                </div>
            </div>
        </div>

    )
}
