import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
      <div className='text-[#451a03] text-[50px] font-semibold flex items-center gap-4 py-16'>{title}
      <div className='bg-[#f59e0b] h-[4px] w-[60px] translate-y-1'></div>
      </div>
    </div>
  )
}

export default Heading
