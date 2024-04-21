import Link from 'next/link'
import React, { useState } from 'react'
import LogoItem from './LogoItem.js'
import { useRouter } from 'next/router.js'
import { GithubIcon, DribbbleIcon, LinkedInIcon, TwitterIcon, SunIcon, MoonIcon } from './IconsItem.js'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher.js'

// for ___ on navitems
const CustomLink = ({href, title, className=''}) =>{
    const router = useRouter()

    // console.log(router)
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={
                `h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' :'w-0'}
                `
            }>
                &nbsp;
            </span>
        </Link>
    )
}

const NavbarItem = () => {

    const [mode, setMode] = useThemeSwitcher()

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4 '/>
                <CustomLink href='/about' title='About' className='mx-4 '/>
                <CustomLink href='/skills' title='Skills' className='mx-4 '/>
                <CustomLink href='/projects' title='Projects' className='ml-4 '/>
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://twitter.com' target={'_blank'} className='w-6 mr-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><TwitterIcon /></motion.a>
                <motion.a href='https://Github.com' target={'_blank'} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon /></motion.a>
                <motion.a href='https://LinkedIn.com' target={'_blank'} className='w-6 ml-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>

                <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className='ml-3 flex items-center justify-center rounded-full p-1'
                >
                    {
                        mode === 'dark' ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'} />
                    }
                </button>
            </nav>
            
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>{/* center of page */}
                <LogoItem />
            </div>
        </header>
        )
    }

export default NavbarItem