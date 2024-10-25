
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useEffect } from 'react'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [players , setPlayers] = useState([])
  const [selectedPlayers , setSelectedPlayer] = useState([])
  const [coin, setCoin] = useState(0)


  useEffect(() =>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])

  const handleAddCoin = () =>{
    alert('10000000 coin added in your balance')
    setCoin(coin + 10000000)
  }

  const handlePlayerSelect = (player) =>{
    
    if(selectedPlayers.length >= 6){
      return alert('Maximum numbers of player has been taken!!!')
    }
    if(selectedPlayers.find((p => p.id === player.id))){
      return alert('Already player has been taken')
    }
    if(coin < player.price){
      return alert("Not enough coin")
    }
    const newselectedPlayers = [...selectedPlayers , player]
    setSelectedPlayer(newselectedPlayers)
    setCoin(coin - player.price)
  }

  const handleDeleteBtn = (deletedPlayer) =>{
    console.log(deletedPlayer)
    const remainingPlayers = selectedPlayers.filter((sPlayer) => sPlayer.id !== deletedPlayer.id)
    setSelectedPlayer(remainingPlayers)
  }

  return (
    <>
      <Header coin={coin} handleAddCoin={handleAddCoin}></Header>
      <Main players={players} handleDeleteBtn={handleDeleteBtn} handlePlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers}></Main>
    </>
  )
}

export default App
