import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactInfo from './Contactinfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <ContactInfo/>
        
    </>
  )
}

export default App
