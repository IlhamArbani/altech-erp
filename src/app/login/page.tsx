import { Input } from '@/components'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className={'px-6 lg:flex lg:h-screen lg:px-0'}>
      <div className='flex justify-center mt-12 mb-12 lg:flex-1 lg:items-center'>
        <Image
          src={'/images/img_logo.png'}
          alt='biccas logo'
          width={176}
          height={53}
          priority
          className='lg:hidden'
        />
        <Image
          src={'/images/img_about.png'}
          alt='about image'
          width={643}
          height={543}
          className='hidden w-[643px] h-[543px] lg:block'
        />
      </div>
      <div className='lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-gradient-to-r lg:from-[#e2b0ff] lg:to-[#e899dc] lg:rounded-full lg:m-12'>
        <div className='mb-10'>
          <h2 className='font-bold text-xl lg:text-2xl lg:text-wh'>Hello Again!</h2>
          <h3 className='lg:text-lg'>Welcome back</h3>
        </div>
        <div className='flex flex-col gap-y-4'>
          <Input
            label='Email'
            placeholder='Email Address'
            labelColor='text-black'
          />
          <Input
            placeholder='Password'
            type='password'
            label='Password'
            labelColor='text-black'
          />
          <button className={`w-full shadow-lg py-4 rounded-lg text-white bg-primary`}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login