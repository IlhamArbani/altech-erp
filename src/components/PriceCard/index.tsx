import Image from 'next/image';
import React from 'react'

type Props = {
  title: string;
  subtitle: string;
  price: number;
  benefits: string[];
  buttonText: string;
  highlighted?: boolean; 
}

const PriceCard = (props: Props) => {
  const {
    title,
    subtitle,
    price,
    benefits,
    buttonText,
    highlighted = false,
  } = props;
  return (
    <div className={`flex flex-col items-center rounded-xl shadow-md py-6 px-5 ${highlighted ? 'bg-primary text-white' : 'bg-white text-black'}`}>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <h2 className='text-sm px-20 text-center my-2'>{subtitle}</h2>
      <h3 className='text-2xl font-semibold mb-7'>${price}</h3>
      <div className={`flex flex-col gap-y-6 rounded-lg px-7 py-6 ${highlighted ? 'bg-white text-black' : 'bg-gray-50'}`}>
        {
          benefits.map((item, index) => (
            <div className='flex gap-x-3' key={index}>
              <Image
                src={'/icons/ic_subtract.svg'}
                alt='icon subtract'
                width={26}
                height={26}
              />
              <p>{item}</p>
            </div>
          ))
        }
        <button className={`w-full shadow-lg py-4 rounded-lg ${highlighted ? 'text-white bg-primary' : 'text-primary bg-white'}`}>{buttonText}</button>
      </div>
    </div>
  )
}

export default PriceCard