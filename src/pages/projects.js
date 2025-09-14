import AnimatedTextItem from '@/components/AnimatedTextItem'
import { GithubIcon } from '@/components/IconsItem'
import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/chatprj.png'
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import GeloDevelops from '../../public/images/projects/gelodevelops.png'
import SynapseAI from '../../public/images/projects/chatapp1.png'
import DevDiaries from '../../public/images/projects/devdiaries.png'
import ProjectModal from '@/components/ProjectModal'
import NexCV from '../../public/images/projects/nexcv.png'
import SakayHUB from '../../public/images/projects/sakayhub.png'



const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    const [modalOpen, setModalOpen] = React.useState(false);
    return(
        <article className='w-full flex items-center justify-between relative rounded-3xl border border-solid rounded-br-2xl border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'  />

            <button
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg p-0 border-0 bg-transparent focus:outline-none'
                onClick={() => setModalOpen(true)}
                style={{outline: 'none'}}
                aria-label={`Open modal for ${title}`}
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </button>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6
            lg:w-full lg:pl-0 lg:pt-6
            '> 
                <span className='text-primary font font-medium text-xl dark:text-primaryDark
                lg:w-full xs:text-base
                '>{type}</span>
                
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>
                    {title}
                </h2>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>

                    <button
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-2 dark:hover:border-light
                        sm:px-4 sm:text-base'
                        onClick={() => setModalOpen(true)}
                    >
                        Visit Project
                    </button>
                </div>
            </div>
            <ProjectModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                projectLink={link}
                projectTitle={title}
            />
        </article>
    )
}

const Project = ({type, title, summary, img, link, github}) =>{
    const [modalOpen, setModalOpen] = React.useState(false);
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark dark:border-2
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'  />
            <button
                className='w-full cursor-pointer overflow-hidden rounded-lg p-0 border-0 bg-transparent focus:outline-none'
                onClick={() => setModalOpen(true)}
                style={{outline: 'none'}}
                aria-label={`Open modal for ${title}`}
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} 
                priority 
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50wv'
                />
            </button>

            <div className='w-full flex flex-col items-start justify-between mt-4'> 
                <span className='text-primary font font-medium text-xl dark:text-primaryDark'>{type}</span>
                
                <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>
                    {title}
                </h2>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>

                <div className=' flex items-center justify-between w-full'>
                <button
                        className='mt-2 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-2 dark:hover:border-light
                        sm:px-4 sm:text-base'
                        onClick={() => setModalOpen(true)}
                    >
                        Visit Project
                    </button>

                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
            <ProjectModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                projectLink={link}
                projectTitle={title}
            />
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

            <TransitionEffect />
            
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <LayoutItem className='pt-16'>
                    <AnimatedTextItem text='Imagination Trumps Knowledge!'
                    className='mb-20 lg:!text-7xl sm:mb-8 sm!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12 '>
                            <FeaturedProject 
                                title='SakayHUB - Admin Dashboard'
                                type='Startup Project (FUNDED)'
                                summary='This is a group startup project aimed at developing a ride-hailing and delivery mobile app tailored for rural areas here in PH, addressing the lack of accessible ride-hailing services in these regions. The current focus is on the admin dashboard, which serves as the central management hub for the main app.'
                                link='https://sakayhub.vercel.app/'
                                github='https://github.com/JATorres-zxc/sakayHUB_WEB'
                                img={SakayHUB}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='DevDiaries'
                            type='MERN Project'
                            summary='A full-featured MERN stack application for developers to share their coding journey, ask questions, and connect with a community of like-minded individuals. Equipped with fully functioning features of a blog app.'
                            link='https://dev-diaries.vercel.app/'
                            github='https://github.com/JATorres-zxc/DevDiaries'
                            img={DevDiaries}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='Freelance Website'
                            type='React Project'
                            summary='My personal freelance website where potential clients can view my past projects and get in touch to hire me for custom website development. Showcases a range of work including full-stack applications and responsive designs.'
                            link='https://gelo-develops.vercel.app/'
                            github='https://github.com/JATorres-zxc/GeloDevelops'
                            img={GeloDevelops}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='SynapseAI'
                            type='MERN Project'
                            summary='A full-featured real-time chat application built with the MERN stack and WebSockets. Includes robust JWT-based auth, user management, and core messaging features such as one-on-one or group chats, message history etc. Also includes a WIP AI chatbot integration for smart replies and assistance.'
                            link='https://synapse-ai-lilac.vercel.app/'
                            github='https://github.com/JATorres-zxc/SynapseAI'
                            img={SynapseAI}
                            />
                        </div>

                        <div className='col-span-6 '>
                            <Project 
                            title='NexCV - WIP'
                            type='Django + VueJS Project (PAUSED)'
                            summary='An AI-powered resume and CV generator and analyzer that helps users create professional documents and get instant feedback. Uses a free Gemini API key, so results may be limited or unavailable at times due to rate limits.'
                            link='https://nex-cv.vercel.app/generate'
                            github='https://github.com/JATorres-zxc/NexCV'
                            img={NexCV}
                            />
                        </div>

                        {/* <div className='col-span-6'>
                            <Project 
                            title='Chatprj'
                            type='Basic Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Project 
                            title='Chatprj'
                            type='Basic Project'
                            summary='Deployed. Created when I tried to learn MERN stack and WebSockets. Equipped with fully functioning features of commong chat app.'
                            link='https://mern-socket-io.onrender.com'
                            github='https://github.com/JATorres-zxc/MERN-Socket.io'
                            img={project1}
                            />
                        </div> */}
                    </div>
                </LayoutItem>
            </main>
        </>
    )
}

export default projects