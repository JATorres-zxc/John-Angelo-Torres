import React from 'react'
import LayoutItem from './LayoutItem'
import Link from 'next/link'

const FooterItem = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg '>
            <LayoutItem className='py-0 flex items-center justify-center'> {/* Changed justify-between to justify-center */}
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
            </LayoutItem>
        </footer>
    )
}

export default FooterItem