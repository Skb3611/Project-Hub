import React from 'react'
import { AnimatedShinyText } from './ui/animated-shiny-text'

const footer = () => {
  return (
    <div className='w-full h-16 flex items-center justify-center border-t mt-20'>
      <AnimatedShinyText className='text-white text-sm'>
        &copy; {new Date().getFullYear()} Project Hub. All rights reserved.
      </AnimatedShinyText>
    </div>
  )
}

export default footer
