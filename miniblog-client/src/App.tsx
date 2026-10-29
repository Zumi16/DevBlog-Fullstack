import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/Homepage'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false)
  // Temporary username container
  return (
    <HomePage 
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      signUpOpen={signUpOpen}
      setSignUpOpen={setSignUpOpen}  
    />
  )
}

export default App
