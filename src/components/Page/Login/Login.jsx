import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const newLogin = { email, password };
        console.log(newLogin);


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
                        'Good job!',
                        'Food added successfully!',
                        'success'
                    )
                    return navigate("/")
                }
            })

    }
    return (
        <div className="hero min-h-screen bg-rose-100">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 shadow-2xl bg-rose-400 shadow-amber-700 w-2/5">
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
                </div>
            </div>
        </div>
    );
};

export default Login;