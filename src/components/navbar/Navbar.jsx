import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <section><img src="/public/Resources/Logo.png" alt="donation campaign logo" /></section>
            <section>
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
        </nav>
    );
};

export default Navbar;