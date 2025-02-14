import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ComponentProps<'button'> & {
  text: string
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'py-2 px-4 rounded hover:text-white duration-150 bg-zinc-700',
        rest.className
      )}
    >
      {text}
    </button>
  )
}

export default Button
