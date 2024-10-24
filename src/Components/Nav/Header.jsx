import logo from "../../assets/logo.png";
import coin from "../../assets/coin.png";
import bannerLogo from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";
// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto">
        
        <nav className="flex justify-between items-center  py-10">
            <div>
                <img className="w-20" src={logo} alt="" />
            </div>
            <div className="flex justify-between items-center gap-12">
                <button>Home</button>
                <button>Fixture</button>
                <button>Team</button>
                <button>Schedule</button>
                <div className="flex justify-between items-center gap-2 p-4 border-2 rounded-lg">
                    <span>0 coin</span>
                    <img className="w-5" src={coin} alt="" />
                </div>
            </div>
        </nav>

        <div className="text-center bg-[#131313] object-cover py-16 rounded-2xl" style={{ backgroundImage: `url(${bannerBg})`}}>
            <img className="mx-auto" src={bannerLogo} alt="" />
            <h2 className="text-4xl font-bold text-white mt-6">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-2xl font-medium text-gray-400 my-4">Beyond Boundaries Beyond Limits</p>
            <button className="bg-[#E7FE29] py-4 px-5 rounded-xl text-base font-bold">Claim Free Credit</button>
        </div>
    </header>
  );
};

// Nav.propTypes = {

// };

export default Header;
