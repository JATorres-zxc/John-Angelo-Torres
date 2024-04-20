import AnimatedTextItem from '@/components/AnimatedTextItem'
import { GithubIcon } from '@/components/IconsItem'
import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/chatprj.png'


const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg '
            >
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'> 
                <span className='text-primary font font-medium text-xl'>{type}</span>
                
                <Link href={link} target='_blank' className='hover:underline underline-offset-4'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>

                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg  font-semibold'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
return (
        <>
            <Head>
                <title>Gelo | Projects Page</title>
                <meta name='description' content='just a description' />
            </Head>
            
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <LayoutItem className='pt-16'>
                    <AnimatedTextItem text='Imagination Trumps Knowledge!'
                    className='mb-20'
                    />

                    <div className='grid grid-cols-12 gap-24 '>
                        <div className='col-span-12 '>
                            <FeaturedProject 
                            title='Chatprj'
                            type='Featured Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-6'>
                            Project-1
                        </div>

                        <div className='col-span-6'>
                            Project-2
                        </div>

                        <div className='col-span-12'>
                            Featured Project
                        </div>

                        <div className='col-span-6'>
                            Project-1
                        </div>

                        <div className='col-span-6'>
                            Project-2
                        </div>
                    </div>
                </LayoutItem>
            </main>
        </>
    )
}

export default projects