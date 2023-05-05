import React from 'react'

export default function FavQuotes() {
    return (
        <div className='relative h-[400px] text-center max-w-7xl px-10 justify-evenly mx-auto items-center mb-5'>

            <h3 className='top-24 uppercase tracking-[20px]
            text-gray-300 text-2xl'>Quotes</h3>

            <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm mt-5 mb-10'>
                Some of my favourite quotes</h3>

            <div className='grid grid-cols-1 text-center items-center mb-10 gap-10 lg:grid-cols-2 md:grid-cols-2'>
                <blockquote className="text-md italic font-semibold text-white-900 dark:text-white">
                    <p>&ldquo;God does not burden a soul beyond that it can bear&ldquo;</p>
                    <cite className="block mt-2 text-gray-400 font-semibold text-xs">- Quran (2:286)</cite>

                </blockquote>
                <blockquote className="text-md italic font-semibold text-white-900 dark:text-white">
                    <p>
                        &ldquo;Verily, God will not change the condition of a people until they change what is within themselves.&ldquo;
                    </p>
                    <cite className="block mt-2 text-gray-400 font-semibold text-xs">- Quran (13:11)</cite>

                </blockquote>
                <blockquote className="text-md italic font-semibold text-white-900 dark:text-white">
                    <p>
                        &ldquo;The only thing we can be certain of is that we know nothing.&ldquo;
                    </p>
                    <cite className="block mt-2 text-gray-400 font-semibold text-xs">- Miyamoto Musashi (Vagabond)</cite>

                </blockquote>
                <blockquote className="text-md italic font-semibold text-white-900 dark:text-white">
                    <p>
                        &ldquo;All truly strong people are kind.&ldquo;
                    </p>
                    <cite className="block mt-2 text-gray-400 font-semibold text-xs">- Takuan Soho (Vagabond)</cite>

                </blockquote>

            </div>
            <br />
        </div>
    )
}
