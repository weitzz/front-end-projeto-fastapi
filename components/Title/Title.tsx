import React, { ReactNode } from 'react'

type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="text-xl font-bold text-gray-600">{text}</h1>
  )
}

export default Title