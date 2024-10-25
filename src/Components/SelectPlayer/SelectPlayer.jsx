import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes, { object } from 'prop-types';

const SelectPlayer = ({selectedPlayer}) => {
    const {name, battingStyle, image} = selectedPlayer
    return (
        <div className="flex justify-between items-center p-6 border-2 rounded-2xl mb-6">
            <div className="flex items-center gap-6">
                <div>
                    <img className="w-28 rounded-2xl" src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-3">{name}</h2>
                    <p className="text-gray-500">{battingStyle}</p>
                </div>
            </div>
            <div>
                <button className="text-red-600 text-3xl"><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

SelectPlayer.propTypes = {
    selectedPlayer: PropTypes,object
};

export default SelectPlayer;