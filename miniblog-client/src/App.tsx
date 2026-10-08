import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/Homepage'

function App() {
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false)

  return (
    <HomePage 
      signUpOpen={signUpOpen}
      setSignUpOpen={setSignUpOpen}  
    />
  )
}

export default App
