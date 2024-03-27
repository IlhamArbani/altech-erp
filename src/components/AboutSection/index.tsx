'use client'

import { ABOUT_SECTION_CONTENTS } from '@/constants';
import Image from 'next/image'
import React, { useState } from 'react'

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision')

  return (
    <div className='mt-12 px-4 lg:px-72 lg:mt-36' id='about'>
      <div className='flex gap-x-2 text-lg items-center mb-7'>
        <Image
          src={'/icons/ic_about.svg'}
          height={36}
          width={36}
          alt='about section icons'
        />
        <h1>About Us</h1>
      </div>
      <div className='lg:flex lg:gap-x-5'>
        <Image
          src={'/images/img_about.png'}
          alt='about image'
          width={643}
          height={543}
        />
        <div>
          <h2 className='text-xl font-semibold text-center mt-4 lg:text-3xl'>
            {ABOUT_SECTION_CONTENTS.headline}
          </h2>
          <p className='text-center text-gray-600 text-sm mt-3 lg:text-left lg:mt-12'>{ABOUT_SECTION_CONTENTS.desc}</p>
          <div className='flex gap-x-4  mt-6 lg:mt-12'>
            <button
              className={`w-full py-2 ${activeTab === 'vision' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('vision')}
            >
              Vision
            </button>
            <button
              className={`w-full py-2 ${activeTab === 'mission' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('mission')}
            >
              Mission
            </button>
          </div>
          <p className='text-center text-gray-600 text-sm mt-6 transition-all ease-in lg:text-left lg:mt-8'>
            {activeTab === 'vision' ? ABOUT_SECTION_CONTENTS.vision : ABOUT_SECTION_CONTENTS.mission}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;