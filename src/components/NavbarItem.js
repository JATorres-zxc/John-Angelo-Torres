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
                dark:bg-light`
            }>
                &nbsp;
            </span>
        </Link>
    )
}

// used so that it the links in the navbar will close unlike customlink where it will stay open, the rectangle in hamburger
const CustomMobileLink = ({href, title, className='', toggle}) =>{
    const router = useRouter()

    const handleClick = () =>{
        toggle()
        router.push(href)
    }

    // console.log(router)
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={
                `h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 dark:bg-dark
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' :'w-0'}
                dark:bg-light`
            }>
                &nbsp;
            </span>
        </button>
    )
}

const NavbarItem = () => {

    const [mode, setMode] = useThemeSwitcher()
    
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10
        lg:px-16 md:px-12 sm:px-8
        '>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-3000 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-3000 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-3000 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1': 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
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
            </div>
            
            {/* mobile */}
            {
                isOpen ?

                <motion.div className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
                >
                    <nav className='flex items-center flex-col justify-center flex-wrap mt-2'>
                        <CustomMobileLink href='/' title='Home' className=' ' toggle={handleClick}/>
                        <CustomMobileLink href='/about' title='About' className=' ' toggle={handleClick}/>
                        <CustomMobileLink href='/skills' title='Skills' className=' ' toggle={handleClick}/>
                        <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick}/>
                    </nav>
    
                    <nav className='flex items-center justify-center flex-wrap'>
                        <motion.a href='https://twitter.com' target={'_blank'} className='w-6 mr-3 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><TwitterIcon /></motion.a>
                        <motion.a href='https://Github.com' target={'_blank'} className='w-6 mx-3 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon /></motion.a>
                        <motion.a href='https://LinkedIn.com' target={'_blank'} className='w-6 ml-3 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
    
                        <button
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        className='ml-3 flex items-center justify-center rounded-full p-1'
                        >
                            {
                                mode === 'dark' ? <SunIcon className={'fill-light'}/> : <MoonIcon className={'fill-dark'} />
                            }
                        </button>
                    </nav>
                </motion.div>

                :null
            }
            
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>{/* center of page */}
                <LogoItem />
            </div>
        </header>
        )
    }

export default NavbarItem