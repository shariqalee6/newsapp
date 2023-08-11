import React from 'react'
import Loading from '../assets/1494.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img className='my-3' src={Loading} alt="Loading" />
    </div >
  )
}

export default Spinner