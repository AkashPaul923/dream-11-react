import footerLogo from "../../assets/logo-footer.png";
import bannerNews from "../../assets/bg-shadow.png";

const Footer = () => {
    return (
        <footer className="bg-[#06091a] text-white">
            <div className="max-w-7xl mx-auto relative">
                <div className="w-full p-6 rounded-3xl bg-[#ffffff26] border absolute -top-[170px]">
                    <div className="flex flex-col justify-center items-center py-20 bg-white text-black space-y-6 rounded-3xl bg-center border" style={{ backgroundImage: `url(${bannerNews})`}}>
                        <p className="text-4xl font-bold">Subscribe to our Newsletter</p>
                        <p className="text-xl font-medium text-gray-500">Get the latest updates and news right in your inbox!</p>
                        <div>
                            <input className="px-8 py-3 rounded-xl border" placeholder="Enter your email" type="email" name="" id="" />
                            <button className="text-black font-semibold px-8 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-500 ml-4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="max-w-7xl mx-auto pt-[320px] md:pt-[200px]">
                <div>
                    <img className="mx-auto pt-8" src={footerLogo} alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-16">
                    <div>
                        <p className="text-lg font-semibold mb-4">About Us</p>
                        <p className="text-gray-500 w-3/5">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-4">Quick Links</p>
                        <ul className="text-gray-500 space-y-4">
                            <li>Home </li>
                            <li>Services </li>
                            <li>About </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-4">Subscribe</p>
                        <p className="text-gray-500 mb-5">Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className="px-8 py-3 rounded-l-xl" placeholder="Enter your email" type="email" name="" id="" />
                            <button className="text-black font-semibold px-8 py-3 rounded-r-xl bg-gradient-to-r from-pink-400 to-yellow-500">Subscribe</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <p className="text-gray-500 text-center py-8 border-t">@2024 Your Company All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;