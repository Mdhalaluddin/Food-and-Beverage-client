import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";


const UpdateProduct = () => {

    const food = useLoaderData()
    const { _id, name, brandName, price, category, description,  photo, rating } = food;
    const navigate = useNavigate()
    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const updateFood = { name, rating, brandName, price, category, description, photo };
        console.log(updateFood);


        fetch(`https://food-and-beverage-servar.vercel.app/food/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateFood)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Food Update successfully!',
                        'success'
                    )
                    return navigate("/")
                }
            })

    }
    return (
        <>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="hero mx-auto bg-green-200 ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 mt-4 py-6 shadow-2xl bg-green-600 shadow-amber-700">
                        <h1 className="text-3xl font-bold text-center mt-6">Update Food</h1>
                        <form onSubmit={handleUpdateFood} className="card-body ">
                            <div className="lg:flex gap-4">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short description</span>
                                        </label>
                                        <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="rating" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered" required />
                                    </div>
                                </div>

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name="photo" placeholder="Photo Url" defaultValue={photo} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Update Product" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>

    );
};

export default UpdateProduct;