import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-auto bg-black-900 rounded-lg shadow m-4 dark:bg-black-400">
            <div className="bottom-0 left-0 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white-700 sm:text-center dark:text-gray-400">
                    © 2023 
                    <Link href="https://flowbite.com/"
                        className="hover:underline"> Khan-F-M™</Link>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                    </li>
                    <li>
                        <Link href="/skills" className="mr-4 hover:underline md:mr-6">Skills</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:underline">Projects</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
