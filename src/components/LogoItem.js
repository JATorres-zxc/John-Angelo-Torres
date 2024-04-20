import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const LogoItem = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/'
            whileHover={{
                backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition:{duration:1, repeat:Infinity},
                scale:1.15,
            }}
            whileTap={{ scale: 1 }}
            className='w-[4.2rem] h-[4.2rem] bg-dark text-light flex items-center justify-center rounded-full text-xl font-bold'>
            GELO
        </MotionLink>
        </div>
    )
}

export default LogoItem
