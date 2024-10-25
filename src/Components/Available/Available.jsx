import Player from '../player/Player';
import PropTypes from 'prop-types';

const Available = ({players}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    players.map((player, idx) => <Player key={idx} player={player}></Player>)
                }
            </div>
        </div>
    );
};

Available.propTypes = {
    players: PropTypes.array
};

export default Available;