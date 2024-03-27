import Image from 'next/image'
import React from 'react'
import { Input, TextArea } from '..'

const ContactSection = () => {
  return (
    <div className='bg-blue-950 px-8 py-6 mt-12 lg:px-72 lg:pt-36 lg:mt-36' id='contact'>
      <div className='bg-gray-700 px-9 py-8 rounded-lg'>
        <div className='flex gap-x-4 items-center mb-3'>
          <Image
            alt='email icons'
            src={'/icons/ic_email.svg'}
            width={52}
            height={52}
          />
          <h1 className='text-white text-xl'>Contact Us</h1>
        </div>
        <div className='flex flex-col gap-y-3'>
          <Input
            label='Email'
            placeholder='Enter your email'
          />
          <TextArea
            label='Message'
            placeholder='What are you say?'
          />
          <button className='bg-primary w-full text-white rounded-lg py-4 mt-5'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection