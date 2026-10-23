import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/Homepage'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false)
  // Temporary username container
  const [userName, setUserName] = useState<string[]>([])

  console.log(userName);
  return (
    <HomePage 
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      signUpOpen={signUpOpen}
      setSignUpOpen={setSignUpOpen}  
      setUserName={setUserName}
    />
  )
}

export default App
