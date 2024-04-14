import React from 'react'
import { CircularTextt } from './IconsItem'
import Link from 'next/link'

const HireMeItem = () => {
return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto items-center justify-center relative'>
            {/* <CircularTextt className={'fill-dark animate-spin-slow'}/> */}
            <img src="/images/hehe-removebg-preview.png" className="fill-dark animate-spin-slow" />

            <Link href='mailto:jbtorres6@up.edu.ph' className='flex items-center justify-center absolute 
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md 
            border-2 border-solid border-dark w-28 h-28 rounded-full text-xl font-medium hover:bg-light hover:text-dark
            ' >
                Hire Me
            </Link>
        </div>
    </div>
)
}

export default HireMeItem