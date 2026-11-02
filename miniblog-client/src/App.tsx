import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/Homepage'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  // Temporary username container
  return (
    <HomePage 
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
    />
  )
}

export default App
