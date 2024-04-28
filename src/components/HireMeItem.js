import React from 'react';
import Link from 'next/link';

const HireMeItem = () => {
    return (
        // md:right-8 md:left-auto md:top-0 md:bottom-0 sa first div dapat to
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:hidden'>
            <div className='w-48 h-auto items-center justify-center relative'>
                <img src="/images/hehe-removebg-preview.png" className="animate-spin-slow" alt="Light Theme Image" />

                <Link href='mailto:jbtorres6@up.edu.ph' className='flex items-center justify-center absolute 
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md 
                border-2 border-solid border-dark w-28 h-28 rounded-full text-xl font-bold hover:bg-light hover:text-dark
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:border-light dark:hover:text-light
                ' >
                    Hire Me
                </Link>
            </div>
        </div>
    );
}

export default HireMeItem;
