import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/user').then(console.log)
  }, [])

  return <div className="App">Hello World</div>
}

export default App
