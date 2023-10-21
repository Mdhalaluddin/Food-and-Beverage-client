import { Link, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState} from "react";
import swal from 'sweetalert';


const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError]= useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    // const [newUser, setNewUser] = useState([])
    const handleRegistration = event => {
        event.preventDefault();


        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const newRegistration = { email, password };
        console.log(newRegistration);
        setRegisterError('');
        setSuccess('')
        
        if(password.length<6){
            if(setRegisterError){
                swal(' password should be at least 6 characters or longer')
            }
            return;
        }
        else if(!/[A-Z]/.test(password)){
           if(setRegisterError)
            {
                swal("Your password must contain at least one upper case letter.");
            }
            return;
        }
        else if(!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
           if(setRegisterError){
            swal('Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]')
           }
            return;
        }
        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state? location.state: '/')
            if(setSuccess){
                
                swal('User Created Succesefully')
            }
        })
        .catch(error =>{
            console.log(error);
            if(email){
                if(setRegisterError){
                    swal('email already in use')
                }  
            }
        })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-rose-100">
                <div className="hero-content w-full">
                    <div className="card flex-shrink-0 shadow-2xl bg-rose-400 shadow-amber-700 md:w-2/5 w-2/3">
                        <h1 className="text-3xl font-bold text-center mt-6">Registration Now</h1>
                        <form onSubmit={handleRegistration} className="card-body">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Registration" className="btn btn-primary" />
                            </div>
                            <div className="flex justify-center">
                                <span className="">Already registration? Please</span>
                                <Link to="/login">
                                    <span className="btn-link ml-3">Login</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                registerError && <p>{registerError}</p>
            }
            {
                success && <p>{success}</p>
            }
            <Footer></Footer>
        </>
    );
};

export default Registration;