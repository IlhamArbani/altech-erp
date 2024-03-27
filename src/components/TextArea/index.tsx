import React from 'react'

type Props = {
  label: string;
  placeholder: string;
  rows?: number;
}

const TextArea = (props: Props) => {
  const {
    label,
    placeholder,
    rows = 4
  } = props;
  return (
    <div>
      <label className='text-white'>{label}</label>
      <div className='w-full px-2 py-3 mt-3 bg-white rounded-md border'>
        <textarea
          rows={rows}
          className='focus:outline-none w-full'
          placeholder={placeholder}
        >
        </textarea>
      </div>
    </div>
  )
}

export default TextArea