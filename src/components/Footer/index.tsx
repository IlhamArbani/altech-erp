import { FOOTER_CONTENTS } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-950 px-4 lg:px-72 lg:pt-36'>
      <div className='pt-5 lg:flex lg:gap-x-12'>
        {
          FOOTER_CONTENTS.map((item, index) => (
            <div key={index} className='mb-5'>
              <h1 className='text-white mb-4 lg:text-xl'>{item.title}</h1>
              <div>
                {
                  item.contents.map((item, index) => (
                    <p key={index} className='text-gray-400'>{item}</p>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <p className='text-white text-center text-sm py-6 lg:pt-12'>© 2022 Biccas Inc. Copyright and rights reserved</p>
    </div>
  )
}

export default Footer