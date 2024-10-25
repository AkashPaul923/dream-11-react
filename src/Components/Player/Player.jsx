import { FaUser, FaFlag } from "react-icons/fa";
import PropTypes from 'prop-types';

const Player = ({player}) => {
    const { name, country, role, battingStyle, bowlingStyle, price, image} = player;

    return (
        <div className="p-6 border-2 rounded-2xl">
            <div>
                <img className="rounded-2xl" src={image} alt="" />
            </div>
            <div className="flex items-center gap-2 text-xl font-semibold mt-5">
                <FaUser /><span>{name}</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center gap-2 text-base text-gray-500"><FaFlag /> <p>{country}</p></div>
                <p className="text-sm  px-4 py-2 rounded-lg bg-[#f3f3f3]">{role}</p>
            </div>
            <p className="py-4 border-t-2 text-base font-bold">Rating</p>
            <div className="flex justify-between items-center text-base font-semibold">
                <p>{battingStyle}</p>
                <p className="text-gray-500">{bowlingStyle}</p>
            </div>
            <div className="flex justify-between items-center mt-3">
                <p className="text-base font-semibold">Price: $ {price}</p>
                <button className="text-sm font-normal px-4 py-2 rounded-lg border-2 hover:bg-[#f3f3f3]">Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object
};

export default Player;
