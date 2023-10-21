import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import swal from "sweetalert";

const Login = () => {
    const { signIn, signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [signinError, setSigninError] = useState('')
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')
        const newLogin = { email, password };
        console.log(newLogin);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                if(result.user){
                    swal('Your Successfully login')
                }
                    return navigate(location?.state ? location.state : '/');
                })
            .catch(error => {
                console.error(error);
                // setSingError(error.massage)
                if (email) {
                    if (setSigninError) {
                        swal('Do not match email')
                        return;
                    }
                }
                if (password) {
                    if (setSigninError) {
                        swal('Do not match password')
                        return;
                    }
                }
            })
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    swal.fire(
                        'Success!',
                        'Google Login successfully!',
                        'success'
                    )
                    return navigate(location?.state ? location.state : '/');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (

        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-rose-100">
                <div className="hero-content w-full">
                    <div className="card flex-shrink-0 shadow-2xl bg-rose-400 shadow-amber-700 md:w-2/5 w-2/3">
                        <h1 className="text-3xl font-bold text-center mt-6">Login Now</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <div className="flex justify-center mb-5">
                            <span className="">Please</span>
                            <Link to="/registration">
                                <span className="btn-link ml-3">Registration</span>
                            </Link>
                        </div>
                        <div className="text-center py-4 text-red-500">
                            <button onClick={handleGoogleSignIn} className="btn text-3xl rounded-lg"><FcGoogle></FcGoogle></button>

                        </div>
                    </div>
                </div>
            </div>
        {
            signinError && <p>{signinError}</p>
        }
            <Footer></Footer>
        </>
    );
};

export default Login;