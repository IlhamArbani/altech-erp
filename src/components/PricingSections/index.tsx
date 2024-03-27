import { PRICING_SECTION_CONTENTS } from '@/constants'
import React from 'react'
import PriceCard from '../PriceCard'

const PricingSection = () => {
  return (
    <div className='mt-12 px-4 lg:px-72 lg:mt-36' id='pricing'>
      <div className='flex flex-col items-center'>
        <h1 className='text-xl font-semibold mt-4 text-center w-48 lg:text-3xl lg:w-72'>{PRICING_SECTION_CONTENTS.headline}</h1>
        <h2 className='text-center text-sm px-14 text-gray-600 mt-4 lg:text-base lg:mt-12'>{PRICING_SECTION_CONTENTS.subTitle}</h2>
      </div>
      <div className='flex flex-col gap-y-12 lg:flex-row lg:mt-12 lg:gap-x-8'>
        {
          PRICING_SECTION_CONTENTS.pricing.map((item, index) => (
            <PriceCard
              key={index}
              title={item.title}
              subtitle={item.subTitle}
              price={item.price}
              benefits={item.benefits}
              buttonText={item.buttonText}
              highlighted={index === 1}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection