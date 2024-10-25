import Player from '../player/Player';
import PropTypes from 'prop-types';

const Available = ({players, handlePlayerSelect}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    players.map((player, idx) => <Player key={idx} player={player} handlePlayerSelect={handlePlayerSelect}></Player>)
                }
            </div>
        </div>
    );
};

Available.propTypes = {
    players: PropTypes.array,
    handlePlayerSelect: PropTypes.func
};

export default Available;