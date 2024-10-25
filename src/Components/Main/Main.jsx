
import PropTypes from 'prop-types';
import Available from '../Available/Available';
import { useState } from 'react';
import Selected from '../Selected/Selected';


const Main = ({players}) => {
    const [available, setAvailable] = useState(true)

    const handleSelectedBtn = () =>{
        setAvailable(false)
    } 

    const handleAvailabledBtn = () =>{
        setAvailable(true)
    }

    return (
        <main className="max-w-7xl mx-auto">
            <div className='flex justify-between items-center mb-8'>
                <h3 className='text-3xl font-bold'>{available? `Available Players`: `Selected Players(0/6)`} </h3>
                <div>
                    <button onClick={handleAvailabledBtn} className={available?'active-btn' : 'inactive-btn'}>Available</button>
                    <button onClick={handleSelectedBtn} className={available?'inactive-btn' : 'active-btn'}>Selected </button>
                </div>
            </div>
            {
                available ? <Available players={players}></Available> : <Selected></Selected>
            }
        </main>
    );
};

Main.propTypes = {
    players: PropTypes.array
};

export default Main;