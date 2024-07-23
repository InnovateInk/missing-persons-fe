import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../shared/container'

const Navbar = () => {
  return (
    <>
    <Container>
    <nav className='h-[11.7dvh] flex items-center'>
      <Link href={'/'} className='flex items-center gap-2'>
        <Image src={'/logo.png'} width={32} height={31} alt={'kenyan flag'}/>
        <h1 className=' font-watchword-bold tracking-[9px]'>BETTER KENYA</h1>
      </Link>
    
    </nav>  
     
    </Container>
    <div className='bg-[#029099] h-[48px] w-full flex items-center justify-center px-4  text-center'>
          <p className='font-medium text-background text-sm md:text-base md:text-center font-barlow'>The people listed here have been confirmed by volunteer modulators  </p>
      </div>
    </>
  )
}

export default Navbar