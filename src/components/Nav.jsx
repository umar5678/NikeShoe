import { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constents"
import MobileNav from "./MobileNav";
import { hamburger } from "../assets/icons";

const Nav = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisibe] = useState(true)
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisibe(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos)
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [prevScrollPos]);

    return (
        <header className={`${visible ? 'translate-y-0' : '-translate-y-full'
            } transition-transform duration-300 ease-in-out bg-white shadow-3xl w-full  fixed top-0 left-0 transform z-40  h-14`}>
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="NikeShoes" width={130} height={29} className="absolute m-2 max-lg:pl-4 max-lg:pt-2 lg:m-0 lg:pl-6 " />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden mt-4">
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="font-montserrat leadind-normal text.lg text-slate-gray">
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden max-lg:block">
                    <MobileNav isOpen={mobileNavOpen} onClose={toggleMobileNav} />
                    <div className="lg:hidden ">
                        <button
                            onClick={toggleMobileNav}
                            className="text-white cursor-pointer focus:outline-none z-50 absolute right-8 bottom-5"
                        >
                            <img src={hamburger} height={20} width={20} />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
