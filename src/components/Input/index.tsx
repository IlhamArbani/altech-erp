import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  labelColor?: string;
}

const Input = (props: Props) => {
  const {
    label,
    placeholder,
    type = 'text',
    labelColor = 'text-white'
  } = props;
  return (
    <div>
      <label className={labelColor}>{label}</label>
      <div className='px-4 py-2 bg-white rounded-lg w-full mt-2'>
        <input className='focus:outline-none w-full' type={type} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default Input