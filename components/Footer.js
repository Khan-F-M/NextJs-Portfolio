import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-black-900 rounded-lg shadow m-4 dark:bg-black-400">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white-700 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Khan-F-M™</a>
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="/skills" class="mr-4 hover:underline md:mr-6">Skills</a>
                    </li>
                    <li>
                        <a href="/projects" class="hover:underline">Projects</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
