import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);
    if(loading){
        return <span className="text-5xl text-center justify-center mt-36 loading loading-spinner text-secondary"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={loading.pathname} to="/login"></Navigate>
};
PrivetRoute.propTypes ={
    children: PropTypes.node
}
export default PrivetRoute;