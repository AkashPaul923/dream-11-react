
import PropTypes from 'prop-types';
import Player from '../player/Player';

const Main = ({players}) => {
    return (
        <main className="max-w-7xl mx-auto">
            <h3>Available Players : {players.length}</h3>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    players.map((player, idx) => <Player key={idx} player={player}></Player>)
                }
            </div>
        </main>
    );
};

Main.propTypes = {
    players: PropTypes.array
};

export default Main;