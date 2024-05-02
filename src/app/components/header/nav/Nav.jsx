'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {
  const container = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1
    }
  }

  return (
    <nav className='w-[50%] md:w-[20%] hidden md:mr-[5vw] h-full md:flex flex-row justify-end md:text-[1.1rem] 2xl:text-[1.5rem] rounded-xl absolute right-0'>
      <motion.ul className='flex flex-row justify-evenly text-white h-full w-full rounded-l-lg'>
        <motion.li whileHover={{ color: '#ffa500' }}
          className='h-full px-4'>
          <Link href='/inscripcion' className='h-full flex justify-center items-center'>
            inscripción
          </Link>
        </motion.li>
        <motion.li whileHover={{ color: '#ffa500' }}
          className='h-full px-4'>
          <Link href='#contacto' className='h-full flex justify-center items-center'>
            contacto
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  )
}

export default Nav