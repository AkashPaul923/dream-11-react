
import PropTypes from 'prop-types';
import Available from '../Available/Available';
import { useState } from 'react';
import Selected from '../Selected/Selected';


const Main = ({players, handlePlayerSelect, selectedPlayers, handleDeleteBtn}) => {
    const [available, setAvailable] = useState(true)
    
    const handleSelectedBtn = () =>{
        setAvailable(false)
    } 

    const handleAvailabledBtn = () =>{
        setAvailable(true)
    }

    return (
        <main className="max-w-7xl mx-auto pb-[250px]">
            <div className='flex justify-between items-center mb-8'>
                <h3 className='text-3xl font-bold'>{available? `Available Players`: `Selected Players(${selectedPlayers.length}/6)`} </h3>
                <div>
                    <button onClick={handleAvailabledBtn} className={available?'active-btn' : 'inactive-btn'}>Available</button>
                    <button onClick={handleSelectedBtn} className={available?'inactive-btn' : 'active-btn'}>Selected({selectedPlayers.length}) </button>
                </div>
            </div>
            {
                available ? <Available players={players} handlePlayerSelect={handlePlayerSelect}></Available> : <Selected selectedPlayers={selectedPlayers} handleAvailabledBtn={handleAvailabledBtn} handleDeleteBtn={handleDeleteBtn}></Selected>
            }
        </main>
    );
};

Main.propTypes = {
    players: PropTypes.array,
    handlePlayerSelect: PropTypes.func,
    selectedPlayers: PropTypes.array,
    handleDeleteBtn: PropTypes.func
};

export default Main;