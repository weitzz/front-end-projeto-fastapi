"use-client"

import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>


const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name = '', type = '', ...props }, ref) => {

    return (
      <>
        <input
          name={name}
          ref={ref}
          type={type}
          {...props}
          className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
      </>
    )
  }
)

export default Input