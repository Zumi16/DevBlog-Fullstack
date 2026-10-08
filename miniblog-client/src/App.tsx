import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/Homepage'

function App() {
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false)

  // Temporary username container
  const [userName, setUserName] = useState<string[]>([])

  console.log(userName);
  return (
    <HomePage 
      signUpOpen={signUpOpen}
      setSignUpOpen={setSignUpOpen}  
      setUserName={setUserName}
    />
  )
}

export default App
