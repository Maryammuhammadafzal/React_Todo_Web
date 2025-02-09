import React from 'react'

const Button = ({click}) => {
  return (
        <button type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-[150px] h-[50px]" onClick={click}>Get Started</button>
  )
}

export default Button
