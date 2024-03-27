import { HERO_CONTENTS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='px-4 mt-14 lg:flex lg:flex-row-reverse lg:justify-between lg:px-72'>
      <Image
        alt='illustrations'
        src={'/illustrations/il_hero.svg'}
        width={410}
        height={526}
      />
      <div className='lg:w-[420px]'>
        <h1 className='text-2xl font-bold text-center mt-6 mb-7 lg:text-6xl lg:text-left'>{HERO_CONTENTS.title}</h1>
        <Image
          alt='curve'
          src={'/illustrations/il_curve.svg'}
          width={479}
          height={26}
        />
        <p className='text-sm mt-7'>{HERO_CONTENTS.subTitle}</p>
      </div>
    </div>
  )
}

export default HeroSection