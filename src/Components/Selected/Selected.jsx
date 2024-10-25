
import PropTypes from 'prop-types';
import SelectPlayer from '../SelectPlayer/SelectPlayer';

const Selected = ({selectedPlayers, handleAvailabledBtn}) => {
    return (
        <div>
            <div>
                {
                    selectedPlayers.map((selectedPlayer, idx)=> <SelectPlayer key={idx} selectedPlayer={selectedPlayer}></SelectPlayer>)
                }
            </div>
            <div>
                <button onClick={handleAvailabledBtn} className="bg-[#E7FE29] py-4 px-5 rounded-xl text-base font-bold">Add More Player</button>
            </div>
        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.array,
    handleAvailabledBtn: PropTypes.func
};

export default Selected;