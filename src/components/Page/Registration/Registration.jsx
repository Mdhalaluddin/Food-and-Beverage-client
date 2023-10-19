import { Link, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext} from "react";
import Swal from "sweetalert2";


const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    // const [newUser, setNewUser] = useState([])
    const handleRegistration = event => {
        event.preventDefault();


        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const newRegistration = { email, password };
        console.log(newRegistration);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = {email}
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => { console.log(data);
                        if (data.insertedId) {
                            Swal.fire(
                                'Good job!',
                                'Registration successfully!',
                                'success'
                            )
                            return navigate("/")
                        }
                    })
            })
            .then(error => {
                console.log(error)
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
            <Footer></Footer>
        </>
    );
};

export default Registration;