import React from 'react'
import Image from 'next/image'
import JSLogo from '@/public/frameworks/logo-javascript.png'
import HTMLLogo from '@/public/frameworks/logo-html5.png'
import CSSLogo from '@/public/frameworks/logo-css.png'
import NEXTJSLogo from '@/public/frameworks/logo-nextjs.png'
import TAILLogo from '@/public/frameworks/logo-tailwind.png'
import POSTGRESLogo from '@/public/frameworks/logo-postgres.png'
import BOOTSTRAPLogo from '@/public/frameworks/logo-bootstrap.png'
import PYTHONLogo from '@/public/frameworks/logo-python.png'
import NODEJSLogo from '@/public/frameworks/logo-nodejs.png'
import CPPLogo from '@/public/frameworks/logo-cpp.png'

export default function AllSkill({ ImageURL }) {
    return (
        <div className='group relative flex cursor-pointer'>
            <Image src={JSLogo} alt="/" className='rounded-full border border-gray-500
        object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition
        duration-300 ease-in-out'/>

            {/* <div className='p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 bg-white'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={JSLogo} alt="/" width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-black'>JAVASCRIPT</h3>
                    </div>
                </div>
            </div> */}
            {/* <div className='p-6 rounded-full items-center hover:scale-105 ease-in duration-300 bg-white'> */}
            {/* <div className='flex flex-col border border-red-800'>
                <div className='m-auto'>
                    <Image src={JSLogo} alt="/" width={64} height={64} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-black'>JAVASCRIPT</h3>
                </div>
            </div> */}
            {/* </div> */}

            <div className='absolute opacity-0 hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
        </div>

    )
}
