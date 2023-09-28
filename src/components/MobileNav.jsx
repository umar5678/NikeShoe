// src/components/MobileNav.js
import { navLinks } from "../constents";

const MobileNav = ({ isOpen, onClose }) => {
    return (
        <div
            className={`${isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out  top-0 right-0 h-1 w-64  z-50 transform relative`}
        >
            <div className=" bg-coral-red ">
                {/* Close icon */}
                <button
                    onClick={onClose}
                    className=" float-right cursor-pointer focus:outline-none z-50 bg-coral-red w-full"
                >
                    {/* <img src={hamburger} height={20} width={20} /> */}
                </button>
                {/* Mobile Nav Links */}


                <ul className=" p-4 mt-16 absolute bg-coral-red  w-full -right-4 border-left shadow-2xl ">
                    {navLinks.map((linkItem) => (
                        <li key={linkItem.label}>
                            <a href={linkItem.href} className="block p-4 text-white" onClick={onClose}>{linkItem.label}</a>
                        </li>
                    ))}

                    {/* Add more links as needed */}
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
