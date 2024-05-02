import Link from 'next/link';
import Image from 'next/image';
import logo from './assets/student.svg';
import logoWhite from './assets/student-white.svg';

const Header = () => {
  return (
    <header id='header' className={`h-[100px] md:h-[120px] items-center 2xl:h-[110px] 2xl:text-[1.6rem] absolute top-0 text-white flex justify-start w-full z-[1]`}>
      
      <Link className='flex flex-col items-start relative ml-10 md:ml-[6vw]' href='/'>
          <Image src={logoWhite} alt='school logo' className='flex h-[30px] w-[30px] 2xl:h-[45px] 2xl:w-[45px]' />
          {/* <Image src={logoWhite} alt='school logo' className='md:hidden h-[30px] w-[30px] mb-[-3px]' /> */}
          <h2 className='text-white text-[1.2rem] 2xl:text-[1.5rem]'>Logo escolar</h2>
      </Link>
    </header>
  )
}

export default Header