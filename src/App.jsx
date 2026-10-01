import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BooksMenu } from './components/Booksmenu'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BooksMenu/>
    </>
  )
}

export default App
