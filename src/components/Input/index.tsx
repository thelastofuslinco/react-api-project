import React from 'react'
import { InputContainer } from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, ...props }: Props) => {
  return (
    <InputContainer>
      <label htmlFor="name">{label}: </label>
      <input {...props} />
    </InputContainer>
  )
}
