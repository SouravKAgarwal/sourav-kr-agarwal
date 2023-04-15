import React from 'react'

const Button = ({text,link}) => {
  return (
    <div>
      <a href={link} className='btn mt-10'>{text}</a>
    </div>
  )
}

export default Button
