import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="px-10">
            <nav className="flex pt-3 justify-between items-center">
                <div>

                    <img className="w-8/12" src="/src/assets/Logo.png" alt="logo" />
                </div>

                <ul className="flex gap-3 md:gap-5">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-red-500 underline " : ""
                        }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-red-500 underline " : ""
                        }
                        >Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-red-500 underline " : ""
                        }
                        >Statistics</NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;