import React from 'react'

const Card = ({children, className='Card'}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Card
