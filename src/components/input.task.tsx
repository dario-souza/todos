import React from 'react'
import { twMerge } from 'tailwind-merge'

type InputTaskProps = React.ComponentProps<'input'> & {
  text: string
}

const InputTask = ({ text, ...rest }: InputTaskProps) => {
  return (
    <input
      {...rest}
      type="text"
      placeholder={text}
      className={twMerge(
        'block pl-2 border h-8 rounded rounded-e-none',
        rest.className
      )}
    />
  )
}

export default InputTask
