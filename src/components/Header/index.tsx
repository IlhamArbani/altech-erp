'use client'

import { smoothScrollTo } from '@/utils/smoothScroll';
import Image from 'next/image'
import Link from 'next/link';
import React, {useState} from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handelNavClick = (id: string) => {
    setIsOpen(false);
    smoothScrollTo(id);
  }

  return (
    <header>
      <nav className="p-5 bg-white shadow lg:flex lg:items-center lg:justify-between lg:px-72">
        <div className="flex justify-between items-center ">
          <Image
            src={'/images/img_logo.png'}
            className="h-[32px] w-[126px] lg:h-[40px] lg:w-[176px] inline"
            alt='biccas logo'
            width={176}
            height={53}
            priority
          />
          <Image
            src={'/icons/ic_menu.png'}
            alt='menu icon'
            className='lg:hidden cursor-pointer'
            width={24}
            height={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <ul className={`lg:flex lg:items-center z-40 lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 transition-all ease-in duration-500 ${isOpen ? 'top-20 opacity-100' : 'opacity-0 top-[-400px]'}`}>
          <li className="mx-4 my-6 lg:my-0">
            <p onClick={() => handelNavClick('about')} className="text-base hover:text-primary duration-500 hover:cursor-pointer">ABOUT</p>
          </li>
          <li className="mx-4 my-6 lg:my-0">
            <p onClick={() => handelNavClick('pricing')} className="text-base hover:text-primary duration-500 hover:cursor-pointer">PRICING</p>
          </li>
          <li className="mx-4 my-6 lg:my-0">
            <p onClick={() => handelNavClick('contact')} className="text-base hover:text-primary duration-500 hover:cursor-pointer">CONTACT</p>
          </li>

          <Link href='/login' className="bg-primary text-blue-200 border-2 border-blue-200 text-base duration-500 px-8 py-1 mx-4 hover:bg-primary-darker rounded-lg lg:bg-white">
            LOGIN
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header