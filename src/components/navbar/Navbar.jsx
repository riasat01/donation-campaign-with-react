import { NavLink, useLocation } from "react-router-dom";
import {AiOutlineMenuFold} from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {

    const [hide, setHide] = useState(true);
    const location = useLocation();
    // console.log(location.pathname);
    return (
        <div className="max-w-7xl m-auto">
            <nav className={`flex justify-between items-center ${location.pathname === '/' && 'absolute'}`}>
            <section><img className="h-16 w-36 md:ml-5 lg:ml-0" src="./Resources/Logo.png" alt="donation campaign logo" /></section>
            <section className={`hidden md:block ${location.pathname === '/' && 'md:ml-[300px] lg:ml-[870px]'}`}>
                <ul className="flex items-center gap-12">
                    <li>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#FF444A] underline duration-700" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/donation`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#FF444A] underline duration-700" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/statistics`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#FF444A] underline duration-700" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </section>
            <section className={`md:hidden ${location.pathname === '/' && 'ml-64'}`}>
                <div onClick={() => setHide(!hide)} className="text-2xl text-red-500">
                <AiOutlineMenuFold></AiOutlineMenuFold>
                </div>
                <ul className={`${hide && 'hidden'} absolute right-3 flex flex-col items-center p-4 bg-slate-300 rounded-xl`}>
                    <li>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#FF444A] underline duration-700" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/donation`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#FF444A] underline duration-700" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/statistics`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#FF444A] underline duration-700" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </section>
        </nav>
        </div>
    );
};

export default Navbar;