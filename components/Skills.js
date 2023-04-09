import React from 'react'
import Image from 'next/image'
import SimpleSkill from './SimpleSkill'
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
import RASPLogo from '@/public/frameworks/logo-raspberrypi.png'

export default function Skills() {
    return (
        // USE ARRAY.MAP FOR THIS. IT IS MORE THE REACT WAY. LOOP THROUGH EACH IMAGE.
        <>
            <div className='flex relative flex-col text-center md:text-left xl:flex-row
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

                <h3 className='absolute top-24 uppercase tracking-[20px]
    text-gray-300 text-2xl'>Skills</h3>

                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                    Technologies I have worked with</h3>

                <div className='absolute top-60'> {/*THE TOP WAS THE REASON. THIS PROP SEPERATES THE ELEMENTS UNUSUALLY*/}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        <SimpleSkill ImageURL={JSLogo} Lang="Javascript" />
                        <SimpleSkill ImageURL={HTMLLogo} Lang="HTML" />
                        <SimpleSkill ImageURL={CSSLogo} Lang="CSS" />
                        <SimpleSkill ImageURL={NEXTJSLogo} Lang="NEXTJS" />
                        <SimpleSkill ImageURL={TAILLogo} Lang="TailwindCss" />
                        <SimpleSkill ImageURL={POSTGRESLogo} Lang="Postgres" />
                        <SimpleSkill ImageURL={BOOTSTRAPLogo} Lang="Bootstrap" />
                        <SimpleSkill ImageURL={CPPLogo} Lang="C++" />
                        <SimpleSkill ImageURL={PYTHONLogo} Lang="python" />
                    </div>

                </div>
            </div>
        </>

    )
}
