'use client'

import Link from 'next/link';
import Image from 'next/image';
import school from './assets/fiumba.svg';
import book from './assets/book.jpg';
import pasillo from './assets/pasillo.jpg';
import man from './assets/man.jpg';
import graduation from './assets/graduation.jpg';
import { Carousel } from './carousel/Carousel';
import arrow from './assets/blue-arrow.svg';


const Presentation = () => {
  const slides = [
    book,
    pasillo,
    man,
  ]

  return (
    <div className='w-[100vw] h-[500px] sm:h-[400px] md:h-[100vh] overflow-hidden flex items-center bg-white justify-center relative text-white'>
      <Carousel autoSlide={true} >
        {[...slides.map((s, i) => (
          <div key={i} className='flex flex-col items-center justify-center text-[var(--bg)]'>
            <Image src={s} alt='' className='brightness-[0.6] z-[-1] w-[200vw] sm:w-[100vw] h-auto' />
          </div>
        ))]}
      </Carousel>

      <Link href={`#info`} className='hidden md:flex absolute bottom-[10px] 2xl:bottom-[20px]'>
        <Image src={arrow} alt='arrow' className='h-[40px] w-[40px] 2xl:h-[60px] 2xl:w-[60px]' />
      </Link>
    </div>
  )
}

export default Presentation