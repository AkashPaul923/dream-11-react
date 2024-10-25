
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useEffect } from 'react'

function App() {
  const [players , setPlayers] = useState([])

  useEffect(() =>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])

  return (
    <>
      <Header></Header>
      <Main players={players}></Main>
    </>
  )
}

export default App
