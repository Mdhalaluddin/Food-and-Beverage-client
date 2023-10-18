import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <div className="mt-36 flex items-center justify-center h-full w-full">
                <img src="https://i.ibb.co/10J5cWc/error-img.png" alt="" />
            </div>
            <div className="text-center py-3 ">
                <NavLink to="/"><button className="btn hover:bg-red-400">GO to Home</button></NavLink>
            </div>

        </>
    );
};

export default ErrorPage;