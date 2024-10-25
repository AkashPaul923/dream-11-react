
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useEffect } from 'react'

function App() {
  const [players , setPlayers] = useState([])
  const [selectedPlayers , setSelectedPlayer] = useState([])


  useEffect(() =>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])

  const handlePlayerSelect = (player) =>{
    const newselectedPlayers = [...selectedPlayers , player]
    setSelectedPlayer(newselectedPlayers)
  }

  return (
    <>
      <Header></Header>
      <Main players={players} handlePlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers}></Main>
    </>
  )
}

export default App
