import AnimatedTextItem from '@/components/AnimatedTextItem'
import LayoutItem from '@/components/LayoutItem'
import Head from 'next/head'
import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light border
        py-6 px-6 shadow-dark h-10 my-[345px] absolute dark:border-solid dark:bg-light dark:text-dark dark:border-2 dark:border-black
        '
        whileHover={{scale:1.2}}
        initial={{x:0,y:0}}
        animate={{x:x,y:y}}
        transition={{duration:1}}
        
        >
            {name}
        </motion.div>
    )
}

const skills = () => {
    return(
        <>
            <Head>
                <title>Gelo | Skills Page</title>
                <meta name='description' content='just a description' />
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <LayoutItem>
                    {/* <h2 className='font-bold text-8xl w-full text-center'>
                        Languages and Tools
                    </h2> */}
                    <AnimatedTextItem text='Languages and Tools' className='mb-16'/>

                    <div className='w-full h-screen relative flex items justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                        py-6 px-6 shadow-dark h-20 w-35 my-[335px] absolute dark:bg-light dark:text-dark
                        '
                        whileHover={{scale:1.2}}
                        >
                            Web
                        </motion.div>

                        <Skill name='VueJs' x='-20vw' y='2vw' />

                        <Skill name='Tailwind CSS' x='-5vw' y='-10vw' />

                        <Skill name='JavaScript' x='20vw' y='6vw' />

                        <Skill name='ReactJs' x='0vw' y='12vw' />

                        <Skill name='NextJs' x='-20vw' y='-15vw' />

                        <Skill name='ExpressJs' x='15vw' y='-12vw' />

                        <Skill name='Github' x='32vw' y='-5vw' />

                        <Skill name='Postman' x='0vw' y='-20vw' />

                        <Skill name='MongoDb' x='-25vw' y='18vw' />

                        <Skill name='MySql' x='18vw' y='18vw' />

                        <Skill name='Python' x='-32vw' y='-5vw' />
                    </div>
                    
                </LayoutItem>
            </main>
        </>
    )
}  

export default skills