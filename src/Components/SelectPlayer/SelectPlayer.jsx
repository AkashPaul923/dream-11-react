import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';

const SelectPlayer = ({selectedPlayer, handleDeleteBtn}) => {
    const {name, role, image, price} = selectedPlayer
    return (
        <div className="flex justify-between items-center p-6 border-2 rounded-2xl mb-6">
            <div className="flex items-center gap-6">
                <div>
                    <img className="w-32 rounded-2xl" src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-3">{name}</h2>
                    <p className="text-gray-500">{role}</p>
                    <p className="text-gray-500">Price: ${price}</p>
                </div>
            </div>
            <div>
                <button onClick={() =>handleDeleteBtn(selectedPlayer)} className="text-red-600 text-3xl"><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

SelectPlayer.propTypes = {
    selectedPlayer: PropTypes.object,
    handleDeleteBtn: PropTypes.func
};

export default SelectPlayer;