import React, { useState } from 'react'
import { Input, Button } from '../../components'
import axios from 'axios'
import { SignUpContainer } from './styles'
import { useNavigate } from 'react-router-dom'

interface FormType {
  name: string
  email: string
  phone: string
  gender: string
  password: string
  age: number
  professional: boolean
}

export const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormType>({
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    age: 0,
    professional: false
  })

  const handleChange = (event: any) => {
    let { name, value, type } = event.target

    if (type === 'checkbox') value = !form.professional

    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSend = () => {
    axios
      .post('http://localhost:3000/user', { ...form })
      .then(() => navigate('/users'))
      .catch((error) => {
        window.alert('User already exists, please log in')
        console.error(error)
      })
  }

  return (
    <SignUpContainer>
      SignUp screen
      <Input
        label="Name"
        onChange={handleChange}
        name="name"
        value={form.name}
      />
      <Input
        label="Email"
        onChange={handleChange}
        name="email"
        value={form.email}
      />
      <Input
        label="Phone"
        onChange={handleChange}
        name="phone"
        value={form.phone}
      />
      <Input
        label="Gender"
        onChange={handleChange}
        name="gender"
        value={form.gender}
      />
      <Input
        label="Password"
        onChange={handleChange}
        name="password"
        value={form.password}
      />
      <Input
        label="Age"
        type="number"
        onChange={handleChange}
        name="age"
        value={form.age}
      />
      <Input
        label="Professional"
        type="checkbox"
        onChange={handleChange}
        name="professional"
        checked={form.professional}
      />
      <Button onClick={handleSend}>Sign up</Button>
    </SignUpContainer>
  )
}
