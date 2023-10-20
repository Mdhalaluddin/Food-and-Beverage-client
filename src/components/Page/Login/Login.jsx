import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {signIn}= useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')
        const newLogin = { email, password };
        console.log(newLogin);
        signIn(email, password)
        .then(result =>{
            console.log(result);
        
        fetch('http://localhost:5000/food', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newLogin)

        })
        
            .then(res => res.json())
            .then(data => { 
                if (data) {
                    Swal.fire(
                        'Success!',
                        'Login successfully!',
                        'success'
                    )
                    return navigate(location?.state? location.state: "/");
                }
            })
        });
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
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;