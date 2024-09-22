import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
    className='flex items-center'
    href={'/'}>
        <Image
            src='/logo.png'
            height={100}
            width={100}
            alt='Logo'
            /><span
            className='hidden lg:block font-extrabold tracking-widest'
            >TrainerLand</span>
    </Link>
  )
}

export default Logo