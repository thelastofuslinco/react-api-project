import React, { useState } from 'react'
import { LoginContainer } from './styles'
import { Input, Button } from '../../components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface FormType {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormType>({
    email: '',
    password: ''
  })

  const handleChange = (event: any) => {
    let { name, value } = event.target

    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSend = () => {
    axios
      .post('http://localhost:3000/auth/login', { ...form })
      .then(() => {
        navigate('/users')
      })
      .catch((error) => {
        window.alert('User doesn`t exists, sign up')
        console.error(error)
      })
  }

  return (
    <LoginContainer>
      SignIn screen
      <Input
        required
        label="Email"
        onChange={handleChange}
        name="email"
        value={form.email}
      />
      <Input
        required
        label="Password"
        onChange={handleChange}
        name="password"
        value={form.password}
      />
      <Button onClick={handleSend}>Sign in</Button>
      <p onClick={() => navigate('/sign-up')}>Sign up</p>
    </LoginContainer>
  )
}
