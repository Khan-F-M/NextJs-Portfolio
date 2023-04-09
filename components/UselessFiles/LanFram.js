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

export default function LanFram() {
    return (
        <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={JSLogo} alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center text-black'>
                    <h3>HTML</h3>
                </div>
            </div>
        </div>
    )
}
