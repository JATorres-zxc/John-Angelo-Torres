import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion"
import LiIconItem from './LiIconItem';

const Details = ({ course, school, time, desc }) => {
    const ref = useRef(null)

    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between' ref={ref}>
            
            <LiIconItem reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl '>
                    {course}
                </h3>

                <span className='capitalize font-medium text-dark/75'>
                    {time} | {school}
                </span>

                <p className='font-medium w-full'>
                    {desc}
                </p>
            </motion.div>
    
        </li>

    );
}  

const EducationItem = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:['start end', 'center start']
    }) 

    return (
        <div className='my-52'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education
            </h2>

            <div className='w-[75%] mx-auto relative' ref={ref}>

                <motion.div className='absolute left-9 top-0 w-[4px] bg-dark h-full origin-top' 
                style={{scaleY:scrollYProgress, height:'115%'}}
                />

                

                <ul className='w-full flex flex-col items-start justify-between ml-4'> 
                    <Details 
                        course='Bachelor Of Science In Computer Science'
                        time='2022 - CURRENT'
                        school='University of the Phillipines - Cebu'
                        desc='I am currently pursuing a four-year Bachelor of Science degree in Computer Science at the University of the Philippines - Cebu, and I am in my second year of studies.'
                    />

                    <Details 
                        course='Junior and Senior High School Degree'
                        time='2016 - 2022'
                        school='Bernardo College - Las Pinas City'
                        desc='I attended Bernardo College for both my Junior and Senior High School in my hometown of Las Piñas City, Manila. During my time there, I graduated with honors in both junior and senior high school, focusing on the STEM strand.'
                    />

                    <Details 
                        course='Elementary Degree'
                        time='2010 - 2016'
                        school='Pamplona Elementary School - Central'
                        desc='Graduated from a local elementary school in Las Pinas City, where i ranked top 6 of my graduating class.'
                    />
                </ul>
            </div>
        </div>
    );
}

export default EducationItem