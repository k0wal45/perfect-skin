import React from 'react'

const IconDevider = ({icon}: any) => {
  return (
    <div className='flex items-center justify-center gap-8 w-full text-3xl'>
      <div className="max-w-48 w-full h-[2px] bg-primary"></div>
      <div className="w-8">
        {icon}
      </div>
      <div className="max-w-48 w-full h-[2px] bg-primary"></div>
    </div>
  )
}

export default IconDevider
