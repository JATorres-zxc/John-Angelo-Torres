import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedTextItem from '@/components/AnimatedTextItem'
import Link from 'next/link'
import { LinkArrow } from '@/components/IconsItem'
import HireMeItem from '@/components/HireMeItem'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
    return (
        <>
        <Head>
            <title>Gelo | Portfolio</title>
            <meta name="description" content="s" />

        </Head>
        
        <TransitionEffect />

        <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
            <LayoutItem className='pt-0 md:pt-16 sm:pt-8'>
                <div className="flex items-center justify-between w-full lg:flex-col">
                    <div className='w-1/2 md:w-full'>
                    <Image 
                        src={profilePic} 
                        alt="Profile picture" 
                        className='w-full h-auto lg:hidden md:inline-block md:w-full ' 
                        />
                    </div>
                    <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                        
                        <AnimatedTextItem text='Turning Vision Into Reality With Code And Design.' className='!text-left !text-6xl *:
                        xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                        '/>
                        <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects, showcasing my expertise in web development.
                        </p>
                        <div className='flex items-center self-start mt-2 lg:self-center'>
                            <Link href='/JohnAngeloTorres-Resume.pdf' target='_blank'
                            className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                            hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:border-light dark:hover:text-light
                            md:p-2 md:px-4 md:text-base
                            '
                            download={true}
                            >Resume <LinkArrow className={'w-6 ml-1'}/>
                            </Link>

                            <Link href='mailto:jbtorres6@up.edu.ph' target='_blank'
                            className='ml-4 text-lg font-medium capitalize text-dark underline underline-offset-8 dark:text-light
                            md:text-base
                            '
                            
                            >Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutItem>

            <HireMeItem />
            
            {/* <div className='absolut right-8 bottom-8 inline-block w-24 md:hidden'>
                <Image src={something} className='w-full h-auto' />
            </div> */}
        </main>
        </>
    )
}
// 1:06:
