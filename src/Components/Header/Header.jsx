import logo from "../../assets/logo.png";
import coinImg from "../../assets/coin.png";
import bannerLogo from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";
import PropTypes from 'prop-types';

const Header = ({coin, handleAddCoin}) => {
  return (
    <header className="max-w-7xl mx-auto relative">
        
        <div className="max-w-7xl mx-auto fixed w-full backdrop-blur-md z-10">
            <nav className="flex justify-between items-center py-4">
                <div>
                    <img className="w-20" src={logo} alt="" />
                </div>
                <div className="flex justify-between items-center gap-12">
                    <button className="hidden md:flex">Home</button>
                    <button className="hidden md:flex">Fixture</button>
                    <button className="hidden md:flex">Team</button>
                    <button className="hidden md:flex">Schedule</button>
                    <div className="flex justify-between items-center gap-2 p-4 border-2 rounded-lg">
                        <span>{coin} coin</span>
                        <img className="w-5" src={coinImg} alt="" />
                    </div>
                </div>
            </nav>
        </div>
        <div className="h-[140px]"></div>
        <div className="text-center bg-[#131313] object-cover py-16 rounded-2xl mb-12" style={{ backgroundImage: `url(${bannerBg})`}}>
            <img className="mx-auto" src={bannerLogo} alt="" />
            <h2 className="text-4xl font-bold text-white mt-6">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-2xl font-medium text-gray-400 my-4">Beyond Boundaries Beyond Limits</p>
            <button onClick={handleAddCoin} className="bg-[#E7FE29] py-4 px-5 rounded-xl text-base font-bold">Claim Free Credit</button>
        </div>
    </header>
  );
};

Header.propTypes = {
    coin: PropTypes.number,
    handleAddCoin: PropTypes.func
};

export default Header;
