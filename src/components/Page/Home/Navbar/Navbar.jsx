import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const {newUser}=useLoaderData()
    // console.log(newUser);
    
    const handleSignOut =()=>{
        logOut()
        .then()
        .cath()
    }
    
    const navLink = <>
        <li className="text-white"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-white text-gray-100"><NavLink to="/addproduct">Add Product</NavLink></li>
        <li className="text-white"><NavLink to="/allfood">All Food</NavLink></li>
        <li className="text-white"><NavLink to="/registration">registration</NavLink></li>
        <li className="text-white"><NavLink to="/login">Login</NavLink></li>

    </>
    return (
        <nav className=" bg-gray-900">
            <div className="navbar max-w-[92%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn  bg-rose-500 text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-black rounded-box w-52 text-black">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-1/3 h-10" src="https://i.ibb.co/NxFv47M/food-beverage-logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <NavLink to="/"><AiOutlineShoppingCart className="text-2xl mr-5 text-white"></AiOutlineShoppingCart></NavLink>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-sm btn-primary">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-sm btn-error">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;