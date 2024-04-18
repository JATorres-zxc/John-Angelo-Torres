import AnimatedTextItem from '@/components/AnimatedTextItem'
import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'

const about = () => {
return (
    <>
        <Head>
            <title>Gelo | About Page</title>
            <meta name='description' content='just a description' />
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
            <LayoutItem>
                <AnimatedTextItem text='Passion Fuels Purpose!' className='mb-16'/>

                <div className='grid w-full grid-cols-8 gap-16 '>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
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

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image src={profilePic} alt='Gelo' className='w-full h-auto rounded-2xl' />
                    </div>
                </div>
            </LayoutItem>
        </main>
    </>
)
}

export default about