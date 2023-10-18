import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
    const navLink = <>
        <li className="text-white"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-white text-gray-100"><NavLink to="/addproduct">Add Product</NavLink></li>
        <li className="text-white"><NavLink to="/login">Login</NavLink></li>

    </>
    return (
        <nav className=" bg-gray-900">
            <div className="navbar max-w-[92%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-1/3 h-10" src="https://i.ibb.co/NxFv47M/food-beverage-logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <NavLink to="/mycart"><AiOutlineShoppingCart className="text-2xl mr-5 text-white"></AiOutlineShoppingCart></NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;