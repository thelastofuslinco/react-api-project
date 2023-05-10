import React from 'react'
import { ButtonContainer } from './styles'

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <ButtonContainer {...props} />
}
