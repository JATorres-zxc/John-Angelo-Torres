import React from 'react'
import LayoutItem from './LayoutItem'
import Link from 'next/link'

const FooterItem = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base '>
            <LayoutItem className='py-0 flex items-center justify-center !p-2 !bg-dark !text-light dark:border lg:flex-col '> 
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
            </LayoutItem>
        </footer>
    )
}

export default FooterItem