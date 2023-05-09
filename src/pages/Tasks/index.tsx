import { useEffect } from 'react'
import axios from 'axios'

export const Tasks = () => {
  useEffect(() => {
    axios.get('http://localhost:3000/task').then((res) => console.log(res.data))
  }, [])
  return <div>Tasks</div>
}
