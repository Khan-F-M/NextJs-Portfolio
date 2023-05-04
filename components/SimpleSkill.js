import React from 'react'
import Image from 'next/image'

export default function SimpleSkill({ ImageURL, Lang }) {
    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <img src={ImageURL} alt="/" width={70} height={70} />
                </div>
                <div className='flex flex-col items-center justify-center uppercase text-black'>
                    <h3>{Lang}</h3>
                </div>
            </div>
        </div>
    )
}
