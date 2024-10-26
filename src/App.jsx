
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { useEffect } from 'react'
import Footer from './Components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('Credit Added to your Account',{
      position: 'top-center'
    })
    setCoin(coin + 10000000)
  }

  const handlePlayerSelect = (player) =>{
    
    if(selectedPlayers.length >= 6){
      return toast.error('Maximum numbers of player has been taken!!!',{
        position: 'top-center'
      })
    }
    if(selectedPlayers.find((p => p.id === player.id))){
      return toast.error('Player already selected',{
        position: 'top-center'
      })
    }
    if(coin < player.price){
      return toast.error("Not enough money to buy this player. Claim some credit.",{
        position: 'top-center'
      })
    }
    toast.success(`Congrats!!  ${player.name} is now in your squad.`,{
      position: 'top-center'
    })
    const newselectedPlayers = [...selectedPlayers , player]
    setSelectedPlayer(newselectedPlayers)
    setCoin(coin - player.price)
  }

  const handleDeleteBtn = (deletedPlayer) =>{
    toast.warn('Player removed')
    const remainingPlayers = selectedPlayers.filter((sPlayer) => sPlayer.id !== deletedPlayer.id)
    setSelectedPlayer(remainingPlayers)
  }

  return (
    <>
      <Header coin={coin} handleAddCoin={handleAddCoin}></Header>
      <Main players={players} handleDeleteBtn={handleDeleteBtn} handlePlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers}></Main>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
