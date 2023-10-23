import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";


const AddCardPage = () => {
    const navigate = useNavigate()
    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newFood = { name, rating, brandName, price, category, description, photo };
        // console.log(newFood);


        fetch('https://food-and-beverage-servar.vercel.app/food', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newFood)

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
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-rose-100">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-rose-400 shadow-amber-700">
                        <h1 className="text-3xl font-bold text-center mt-6">Add Food</h1>
                        <form onSubmit={handleAddFood} className="card-body">
                            <div className="md:flex gap-4">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short description</span>
                                        </label>
                                        <input type="text" name="description" placeholder="Short description" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="rating" name="rating" placeholder="Rating" className="input input-bordered" required />
                                    </div>
                                </div>

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add Product" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddCardPage;