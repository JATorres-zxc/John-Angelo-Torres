import AnimatedTextItem from '@/components/AnimatedTextItem'
import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import EducationItem from '@/components/EducationItem'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null)

    const motionValue = useMotionValue(0)

    const springValue = useSpring(motionValue, {duration:3000 })

    const isInView = useInView(ref, {once:true})

    useEffect(() =>{
        if (isInView){
            motionValue.set(value)
        }
    },[isInView, value, motionValue])

    useEffect(() =>{
        springValue.on('change', (latest) =>{
            // console.log(latest)
            if (ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
return (
    <>
        <Head>
            <title>Gelo | About Page</title>
            <meta name='description' content='just a description' />
        </Head>
        
        <TransitionEffect />

        <main className='flex w-full flex-col items-center justify-center'>
            <LayoutItem>
                <AnimatedTextItem text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

                <div className='grid w-full grid-cols-8 gap-16 text-justify sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start dark:text-light xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                            About Me
                        </h2>

                        
                        <p className='font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <p className='font-medium my-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <p className='font-medium'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'  />
                            <Image src={profilePic} alt='Gelo' className='w-full h-auto rounded-2xl' 
                            priority 
                            sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'
                            />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={100} />+
                            </span>

                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                satisfied clients
                            </h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={100} />+
                            </span>

                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                projects completed
                            </h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={100} />+ 
                            </span>

                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                years of experience
                            </h2>
                        </div>
                    </div>
                </div>
                
                <EducationItem />

            </LayoutItem>
        </main>
    </>
)
}

export default about