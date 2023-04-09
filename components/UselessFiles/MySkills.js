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


export default function MySkills() {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full text-center'>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JSLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={HTMLLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CSSLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NEXTJSLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>NEXTJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={TAILLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>TAILWIND</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={POSTGRESLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>POSTGRES</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={BOOTSTRAPLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>BOOTSTRAP</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NODEJSLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>NODEJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={PYTHONLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>PYTHON</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CPPLogo} alt="/" width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-black'>C++</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
